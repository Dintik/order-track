import Image from 'next/image'
import { IProduct, IPrice } from '@/types'
import { formatDateShort } from '@/helpers/date'
import styles from './styles.module.scss'

interface ProductItemProps {
  product: IProduct
  orderTitle?: string
  isShort?: boolean
}

export const ProductItem = ({
  product,
  orderTitle,
  isShort
}: ProductItemProps) => {
  return (
    <div className={`${styles.product} ${isShort && styles.product__short}`}>
      <Image
        src={product.photo}
        alt={product.title}
        className={styles.product__image}
        width={90}
        height={60}
      />
      <div>
        <h2 className={styles.product__title}>{product.title}</h2>
        <p>SN: {product.serialNumber}</p>
      </div>
      {!isShort && (
        <>
          <div className={styles.product__guarantee}>
            <p>
              from <span>{formatDateShort(product.guarantee.start)}</span>
            </p>
            <p>
              to <span>{formatDateShort(product.guarantee.end)}</span>
            </p>
          </div>
          <p className={styles.product__isNew}>
            {product.isNew ? 'New' : 'Used'}
          </p>
          <div className={styles.product__priceContainer}>
            {product.price.map((price: IPrice) => (
              <p
                className={`${styles.product__price} ${price.isDefault === 1 && styles.product__defaultPrice}`}
                key={price.symbol}
              >
                {price.value} {price.symbol}
              </p>
            ))}
          </div>
          <p className={styles.product__largeParagraph}>{product.type}</p>
          <p className={styles.product__largeParagraph}>
            {product.specification}
          </p>
          {orderTitle && (
            <p className={styles.product__largeParagraph}>{orderTitle}</p>
          )}
        </>
      )}
      <button type='button' className='btn btn-light'>
        <i className='bi bi-trash3-fill' />
      </button>
    </div>
  )
}
