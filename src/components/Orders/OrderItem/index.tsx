import { IOrder, IPrice, IProduct } from '@/types'
import { products } from '@/data/ordersAndProducts'
import { formatDateLong, formatDateShort } from '@/helpers/date'
import styles from './styles.module.scss'

interface OrderItemProps {
  order: IOrder
  onSelect: (order: IOrder) => void
  isSelected: boolean
  isFullSize: boolean
}

const calculateTotalPrice = (order: IOrder) => {
  const orderProducts = order.products
    .map((id) => products.find((p) => p.id === id))
    .filter((product): product is IProduct => product !== undefined)

  return orderProducts.reduce<Record<string, number>>((acc, product) => {
    product.price.forEach((price: IPrice) => {
      if (!acc[price.symbol]) {
        acc[price.symbol] = 0
      }
      acc[price.symbol] += price.value
    })
    return acc
  }, {})
}

export const OrderItem = ({
  order,
  onSelect,
  isSelected,
  isFullSize
}: OrderItemProps) => {
  return (
    <div
      className={`${styles.order} ${isSelected && styles.order__selected}`}
      onClick={() => onSelect(order)}
    >
      {isFullSize && <h2 className={styles.order__title}>{order.title}</h2>}
      <div className={styles.order__products}>
        <i className='bi bi-list-ul' />
        <div>
          <p>
            <b>{order.products.length}</b>
          </p>
          <p>Products</p>
        </div>
      </div>
      <div className={styles.order__date}>
        <p>{formatDateShort(order.date)}</p>
        <p>{formatDateLong(order.date)}</p>
      </div>
      {isFullSize && (
        <div className={styles.order__totalPrice}>
          {Object.entries(calculateTotalPrice(order)).map(
            ([currency, amount]) => (
              <p key={currency}>
                {amount} {currency}
              </p>
            )
          )}
        </div>
      )}
      {isFullSize ? (
        <button
          onClick={(e) => {
            e.stopPropagation()
          }}
          type='button'
          className='btn btn-light btn-light'
        >
          <i className='bi bi-trash3-fill' />
        </button>
      ) : (
        <div></div>
      )}
      {isSelected && (
        <div className={styles.order__arrow}>
          <i className='bi bi-arrow-right-short' />
        </div>
      )}
    </div>
  )
}
