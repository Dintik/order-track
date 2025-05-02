import { products } from '@/data/ordersAndProducts'
import { IOrder } from '@/types'
import { ProductItem } from '../../Products/ProductItem'
import styles from './styles.module.scss'

interface OrderDetailsProps {
  order: IOrder
  onClose: () => void
}

export const OrderDetails = ({ order, onClose }: OrderDetailsProps) => {
  return (
    <div className={styles.orderDetails}>
      <button className={styles.orderDetails__close} onClick={onClose}>
        <i className='bi bi-x-lg' />
      </button>
      <div className={styles.orderDetails__header}>
        <h2>{order.title}</h2>
        {/* // TODO: need add new product functionality */}
        <p>Add new product</p>
      </div>

      <div className={styles.orderDetails__list}>
        {order.products.map((product) => (
          <ProductItem
            key={product}
            product={products.find((p) => p.id === product)!}
            isShort
          />
        ))}
      </div>
    </div>
  )
}
