export interface IPrice {
  value: number
  symbol: string
  isDefault: number
}

export interface IProduct {
  id: number
  serialNumber: number
  isNew: number
  photo: string
  title: string
  type: string
  specification: string
  guarantee: {
    start: string
    end: string
  }
  price: IPrice[]
  order: number
  date: string
}

export interface IOrder {
  id: number
  title: string
  date: string
  description: string
  products: number[]
}
