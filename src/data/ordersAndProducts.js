export const orders = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc1',
    products: [1, 3, 5, 7, 9, 10]
  },
  {
    id: 2,
    title: 'Order 2 - Lorem ipsum dolor sit amet',
    date: '2017-06-29 12:09:33',
    description: 'desc2',
    products: [2, 4, 6, 8]
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc3',
    products: [11]
  }
]

export const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo:
      'https://content2.rozetka.com.ua/goods/images/big_tile/419088411.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 1 },
      { value: 90, symbol: 'EUR', isDefault: 0 }
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 0,
    photo:
      'https://content1.rozetka.com.ua/goods/images/big_tile/440994724.jpg',
    title: 'Product 2 - Lorem ipsum dolor sit amet',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 90, symbol: 'EUR', isDefault: 1 }
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 3,
    serialNumber: 78,
    isNew: 1,
    photo:
      'https://content2.rozetka.com.ua/goods/images/big_tile/372360252.jpg',
    title: 'TP-Link Archer AX73',
    type: 'Routers - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    specification: 'Wi-Fi 6, 5400 Mbps, 4 antennas',
    guarantee: {
      start: '2023-01-15 10:00:00',
      end: '2025-01-15 10:00:00'
    },
    price: [
      { value: 150, symbol: 'USD', isDefault: 1 },
      { value: 135, symbol: 'EUR', isDefault: 0 }
    ],
    order: 1,
    date: '2023-01-15 10:00:00'
  },
  {
    id: 4,
    serialNumber: 1234,
    isNew: 0,
    photo:
      'https://content1.rozetka.com.ua/goods/images/big_tile/351513379.jpg',
    title: 'ASUS RT-AX82U',
    type: 'Routers - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    specification: 'Wi-Fi 6, 5700 Mbps, 4 antennas, RGB',
    guarantee: {
      start: '2023-02-20 14:30:00',
      end: '2025-02-20 14:30:00'
    },
    price: [
      { value: 180, symbol: 'USD', isDefault: 0 },
      { value: 162, symbol: 'EUR', isDefault: 1 }
    ],
    order: 2,
    date: '2023-02-20 14:30:00'
  },
  {
    id: 5,
    serialNumber: 3456,
    isNew: 1,
    photo: 'https://content2.rozetka.com.ua/goods/images/big_tile/12241784.jpg',
    title: 'Seagate BarraCuda 2TB',
    type: 'Hard Drives',
    specification: '2TB, 7200 RPM, SATA III',
    guarantee: {
      start: '2023-03-10 09:15:00',
      end: '2025-03-10 09:15:00'
    },
    price: [
      { value: 80, symbol: 'USD', isDefault: 1 },
      { value: 72, symbol: 'EUR', isDefault: 0 }
    ],
    order: 1,
    date: '2023-03-10 09:15:00'
  },
  {
    id: 6,
    serialNumber: 7890,
    isNew: 1,
    photo: 'https://content1.rozetka.com.ua/goods/images/big_tile/4668889.jpg',
    title: 'WD Blue 4TB',
    type: 'Hard Drives',
    specification: '4TB, 5400 RPM, SATA III',
    guarantee: {
      start: '2023-04-05 11:45:00',
      end: '2025-04-05 11:45:00'
    },
    price: [
      { value: 120, symbol: 'USD', isDefault: 0 },
      { value: 108, symbol: 'EUR', isDefault: 1 }
    ],
    order: 2,
    date: '2023-04-05 11:45:00'
  },
  {
    id: 7,
    serialNumber: 2345,
    isNew: 1,
    photo:
      'https://content2.rozetka.com.ua/goods/images/big_tile/304428950.jpg',
    title: 'Samsung 870 EVO 1TB',
    type: 'Hard Drives',
    specification: '1TB, SSD, SATA III',
    guarantee: {
      start: '2023-05-12 16:20:00',
      end: '2025-05-12 16:20:00'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 1 },
      { value: 90, symbol: 'EUR', isDefault: 0 }
    ],
    order: 1,
    date: '2023-05-12 16:20:00'
  },
  {
    id: 8,
    serialNumber: 6789,
    isNew: 0,
    photo:
      'https://content1.rozetka.com.ua/goods/images/big_tile/331790442.jpg',
    title: 'Crucial MX500 2TB',
    type: 'Hard Drives',
    specification: '2TB, SSD, SATA III',
    guarantee: {
      start: '2023-06-18 13:10:00',
      end: '2025-06-18 13:10:00'
    },
    price: [
      { value: 150, symbol: 'USD', isDefault: 0 },
      { value: 135, symbol: 'EUR', isDefault: 1 }
    ],
    order: 2,
    date: '2023-06-18 13:10:00'
  },
  {
    id: 9,
    serialNumber: 1235,
    isNew: 1,
    photo: 'https://content.rozetka.com.ua/goods/images/big_tile/25228742.png',
    title: 'ASUS ROG Strix B550-F',
    type: 'Motherboards',
    specification: 'AMD B550, AM4, ATX',
    guarantee: {
      start: '2023-07-22 15:40:00',
      end: '2025-07-22 15:40:00'
    },
    price: [
      { value: 200, symbol: 'USD', isDefault: 1 },
      { value: 180, symbol: 'EUR', isDefault: 0 }
    ],
    order: 1,
    date: '2023-07-22 15:40:00'
  },
  {
    id: 10,
    serialNumber: 5679,
    isNew: 0,
    photo: 'https://content.rozetka.com.ua/goods/images/big_tile/30200012.jpg',
    title: 'MSI MPG Z590',
    type: 'Motherboards',
    specification: 'Intel Z590, LGA 1200, ATX',
    guarantee: {
      start: '2023-08-30 12:25:00',
      end: '2025-08-30 12:25:00'
    },
    price: [
      { value: 250, symbol: 'USD', isDefault: 0 },
      { value: 225, symbol: 'EUR', isDefault: 1 }
    ],
    order: 2,
    date: '2023-08-30 12:25:00'
  },
  {
    id: 11,
    serialNumber: 9013,
    isNew: 1,
    photo: 'https://content.rozetka.com.ua/goods/images/big_tile/471647747.jpg',
    title: 'Gigabyte B660M',
    type: 'Motherboards',
    specification: 'Intel B660, LGA 1700, Micro-ATX',
    guarantee: {
      start: '2023-09-14 17:50:00',
      end: '2025-09-14 17:50:00'
    },
    price: [
      { value: 18000, symbol: 'USD', isDefault: 1 },
      { value: 16200, symbol: 'EUR', isDefault: 0 }
    ],
    order: 3,
    date: '2023-09-14 17:50:00'
  }
]
