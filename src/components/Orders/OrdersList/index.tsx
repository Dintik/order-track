'use client'

import { useState } from 'react'
import { orders } from '@/data/ordersAndProducts'
import { OrderItem } from '../OrderItem'
import { IOrder } from '@/types'
import { OrderDetails } from '../OrderDetails'
import styles from './styles.module.scss'

export const OrdersList = () => {
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null)

  return (
    <main className={styles.orders}>
      <section className={styles.orders__title}>
        {/* // TODO: need add new order functionality */}
        <h1>Orders</h1>
        <p>&nbsp;/ {orders.length}</p>
      </section>
      <section className={styles.orders__content}>
        <div
          className={`${styles.orders__list} ${selectedOrder && styles.orders__listSort}`}
        >
          {orders.map((order) => (
            <OrderItem
              key={order.id}
              order={order}
              onSelect={setSelectedOrder}
              isSelected={selectedOrder?.id === order.id}
              isFullSize={!selectedOrder}
            />
          ))}
        </div>

        {selectedOrder && (
          <OrderDetails
            order={selectedOrder}
            onClose={() => setSelectedOrder(null)}
          />
        )}
      </section>
    </main>
  )
}
