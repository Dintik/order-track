'use client'

import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { closeModal } from '@/lib/features/modal/modalSlice'
import { ModalType } from '@/lib/features/modal/types'
import { useScrollLock } from '@/hooks/useScrollLock'
import { DeletionConfirm } from './DeletionConfirm'
import styles from './styles.module.scss'

const Backdrop: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <section className={styles.backdrop}>{children}</section>
)

export const ModalWindow = () => {
  const dispatch = useAppDispatch()

  const { isModalOpened, typeModal } = useAppSelector(
    (state) => state.modal,
    (prev, next) =>
      prev.isModalOpened === next.isModalOpened &&
      prev.typeModal === next.typeModal
  )

  useScrollLock(isModalOpened)

  const renderModal = useCallback(() => {
    switch (typeModal) {
      case ModalType.DELETION_CONFIRM:
        return <DeletionConfirm />
      default:
        dispatch(closeModal())
        return null
    }
  }, [typeModal, dispatch])

  if (!isModalOpened) return null

  return <Backdrop>{renderModal()}</Backdrop>
}
