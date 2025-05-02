# Order Track

Order Track is a web application for tracking orders and managing products, built with Next.js and TypeScript.

## 🚀 Features

- View list of products
- View list of orders
- Detailed order information
- Filter products by type
- Real-time data updates via Pusher
- Modal windows system with Redux state management

## 🛠 Technologies

- Next.js 15.3.1
- React 19
- TypeScript
- Redux Toolkit for state management
- Bootstrap 5 for styling
- Bootstrap Icons for icons
- Pusher for real-time functionality
- SCSS for styles

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Dintik/order-track.git
cd order-track
```

2. Install dependencies using Yarn:

```bash
yarn install
```

3. Create `.env.local` file based on `.env.example`:

## 🚀 Running the Project

To run in development mode:

```bash
yarn dev
```

To build the project:

```bash
yarn build
```

To run the built project:

```bash
yarn start
```

## 🧹 Linting and Formatting

To check the code:

```bash
yarn lint
```

To format the code:

```bash
yarn format
```

## 📁 Project Structure

- `/src/app` - Main application pages
- `/src/components` - React components
- `/src/hooks` - Custom hooks
- `/src/lib` - Helper libraries
- `/src/helpers` - Helper functions
- `/src/types` - TypeScript types
- `/src/data` - Application data
- `/src/assets` - Static assets

## 🔧 Environment Setup

Create a `.env.local` file in the project root and add the following variables:

```
PUSHER_APP_ID=your_pusher_app_id
PUSHER_KEY=your_pusher_key
PUSHER_SECRET=your_pusher_secret
PUSHER_CLUSTER=your_pusher_cluster
NEXT_PUBLIC_PUSHER_KEY=your_pusher_key
NEXT_PUBLIC_PUSHER_CLUSTER=your_pusher_cluster
```

## 🐳 Running with Docker

1. Build the Docker image:

```bash
docker build -t order-track .
```

2. Run the container:

```bash
docker run -p 3000:3000 order-track
```

- Before building, make sure that the `.env.local` file is in the project root and contains all required environment variables.
- The application will be available at: http://localhost:3000
