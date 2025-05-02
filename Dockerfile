FROM node:20.11.1-slim AS builder

RUN apt-get update && \
    apt-get install -y git && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /usr/app

COPY \
  eslint.config.mjs \
  next.config.ts \
  next-env.d.ts \
  package.json \
  tsconfig.json \
  yarn.lock ./

RUN corepack enable && corepack prepare yarn@4.2.2 --activate && yarn install

COPY ./src ./src
COPY ./public ./public
COPY .env.local .env

RUN yarn build || exit 1

RUN cat .env

FROM node:22.13.0-alpine AS runner

WORKDIR /usr/app

RUN chown -R node:node .

COPY --from=builder /usr/app/.next/standalone ./
COPY --from=builder /usr/app/.next/static ./.next/static
COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/.env .env

USER node
EXPOSE 3000

CMD ["node", "server.js"]
