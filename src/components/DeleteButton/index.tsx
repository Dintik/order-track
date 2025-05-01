'use client'

import { useAppDispatch } from '@/lib/hooks'
import { callModal } from '@/lib/features/modal/modalSlice'
import { ModalType } from '@/lib/features/modal/types'
import { IOrder, IProduct } from '@/types'

interface DeleteButtonProps {
  item: IOrder | IProduct
}

export const DeleteButton = ({ item }: DeleteButtonProps) => {
  const dispatch = useAppDispatch()

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(
      callModal({
        typeModal: ModalType.DELETION_CONFIRM,
        modalData: item
      })
    )
  }

  return (
    <button type='button' className='btn btn-light' onClick={handleDelete}>
      <i className='bi bi-trash3-fill' />
    </button>
  )
}
