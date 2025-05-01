import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalState, ModalType, ModalData } from './types'

const initialState: ModalState = {
  isModalOpened: false,
  typeModal: '',
  modalData: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    callModal: (
      state,
      action: PayloadAction<{ typeModal: ModalType; modalData: ModalData }>
    ) => {
      state.isModalOpened = true
      state.typeModal = action.payload.typeModal
      state.modalData = action.payload.modalData
    },
    closeModal: (state) => {
      state.isModalOpened = false
      state.typeModal = ''
      state.modalData = null
    },
    setModalData: (state, action: PayloadAction<ModalData>) => {
      state.modalData = action.payload
    }
  }
})

export const { callModal, closeModal, setModalData } = modalSlice.actions
export const modalReducer = modalSlice.reducer
