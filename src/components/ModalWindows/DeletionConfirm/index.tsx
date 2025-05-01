'use client'

import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { closeModal } from '@/lib/features/modal/modalSlice'
import { IProduct, IOrder } from '@/types'
import styles from './styles.module.scss'

const isProduct = (item: IProduct | IOrder | null): item is IProduct => {
  return item !== null && 'serialNumber' in item
}

export const DeletionConfirm = () => {
  const dispatch = useAppDispatch()
  const { modalData } = useAppSelector((state) => state.modal)

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <div className={styles.modal}>
      <button className={styles.modal__close} onClick={handleClose}>
        <i className='bi bi-x-lg' />
      </button>
      <div className={styles.modal__content}>
        <h5>
          Are you sure you want to delete this{' '}
          {isProduct(modalData) ? 'product' : 'order'}?
        </h5>
        <div className={styles.modal__info}>
          {isProduct(modalData) && (
            <div className={styles.modal__image}>
              <Image
                src={modalData.photo}
                alt='Product'
                width={90}
                height={60}
              />
            </div>
          )}
          <div className={styles.modal__details}>
            <p className={styles.modal__title}>{modalData?.title}</p>
            <p className={styles.modal__additional}>
              {isProduct(modalData)
                ? `SN: ${modalData.serialNumber}`
                : modalData?.description}
            </p>
          </div>
        </div>
        <div className={styles.modal__actions}>
          <button className={styles.modal__button} onClick={handleClose}>
            Cancel
          </button>
          <button
            className={`${styles.modal__button} ${styles.modal__buttonDelete}`}
            onClick={() => {
              // TODO: Implement delete action
              handleClose()
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
