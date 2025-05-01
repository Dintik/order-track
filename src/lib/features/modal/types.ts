import { IOrder, IProduct } from '@/types'

export enum ModalType {
  DELETION_CONFIRM = 'DeletionConfirm'
}

export interface ModalState {
  isModalOpened: boolean
  typeModal: ModalType | ''
  modalData: ModalData
}

export type ModalData =
  | {
      [ModalType.DELETION_CONFIRM]: IProduct | IOrder
    }[ModalType]
  | null
