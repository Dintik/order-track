'use client'

import { useState } from 'react'
import { products, orders } from '@/data/ordersAndProducts'
import { ProductItem } from '../ProductItem'
import styles from './styles.module.scss'

export const ProductsList = () => {
  const [selectedType, setSelectedType] = useState<string>('all')

  const uniqueTypes = [
    'all',
    ...new Set(products.map((product) => product.type))
  ]
  const filteredProducts =
    selectedType === 'all'
      ? products
      : products.filter((product) => product.type === selectedType)

  const getOrderTitle = (orderId: number) => {
    const order = orders.find((order) => order.id === orderId)
    return order?.title ?? 'Unknown order'
  }

  return (
    <main className={styles.products}>
      <section className={styles.products__header}>
        <div className={styles.products__title}>
          <h1>Products</h1>
          <p>&nbsp;/ {filteredProducts.length}</p>
        </div>
        <div className={styles.products__filter}>
          <label htmlFor='typeFilter'>Filter by type:</label>
          <select
            id='typeFilter'
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {uniqueTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </section>
      <section className={styles.products__list}>
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            orderTitle={getOrderTitle(product.order)}
          />
        ))}
      </section>
    </main>
  )
}
