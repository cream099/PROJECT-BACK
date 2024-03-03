const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  { username : 'andy', password, email: 'andy@ggg.mail', phone: '11111111111' },
  { username : 'bobby', password, email: 'bobby@ggg.mail', phone: '2222222222' },
  { username : 'candy', password, email: 'candy@ggg.mail', phone: '3333333333' },
]

const cartData = [
  { id: 1, quantity: 1, userId: 1, productId: 1},
  { id: 2, quantity: 1, userId: 2, productId: 2},
  { id: 3, quantity: 1, userId: 3, productId: 3},
]

const orderData = [
  {
    id : 1,
    name : 'andy',
    phone : '1111111111',
    address : 'mahasarakham',
    total : '150',
    date : new Date().toISOString(),
    userId : 1,
  },
  {
    id : 2,
    name : 'bobby',
    phone : '2222222222',
    address : 'mahasarakham',
    total : '150',
    date : new Date().toISOString(),
    userId : 2,
  },
  {
    id : 3,
    name : 'candy',
    phone : '3333333333',
    address : 'mahasarakham',
    total : '150',
    date : new Date().toISOString(),
    userId : 3,
  }
]

const productData = [
  { id : 1, productName : 'เสื้อ1', price : '150' },
  { id : 2, productName : 'เสื้อ2', price : '150' },
  { id : 3, productName : 'เสื้อ3', price : '150' },
]

const imgData = [
  { id : 1, url : '', productId : 1 },
  { id : 2, url : '', productId : 2 },
  { id : 3, url : '', productId : 3 },
]

const paymentData = [
  {
    id : 1,
    amount : '150',
    paymentDate : new Date().toISOString(),
    paymentStatus : 'SUCCESS',
    orderId : 1,
  }
]

const shipmentData = [
  { 
    id : 1, 
    shipmentDate : new Date().toISOString(), 
    shipmentStatus : 'SHIPPED', 
    orderId : 1, 
  },
]

const run = async () => {
  await prisma.user.createMany({
    data : userData
  })
  await prisma.cart.createMany({
    data : cartData
  })
  await prisma.order.createMany({
    data : orderData
  })
  await prisma.product.createMany({
    data : productData
  })
  await prisma.img.createMany({
    data : imgData
  })
  await prisma.payment.createMany({
    data : paymentData
  })
  await prisma.shipment.createMany({
    data : shipmentData
  })
}

run()
