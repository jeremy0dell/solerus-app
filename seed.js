import mongoose from 'mongoose'
// import crypto from 'crypto'
import Product from './src/server/model/product'
import Item from './src/server/model/item'
import User from './src/server/model/user'

mongoose.connect('mongodb://localhost/solerus')

/* eslint-disable */
const products = [{"name":"Supreme x The North Face Leopard Nuptse","description":"Ideal for unpredictable weather forecasts, this packable, warm jacket is crafted from more than 50% recycled content and insulated with 700 fill down that’s certified to the Responsible Down Standard (RDS).","retailer":"Supreme","image":"https://i.imgur.com/fqQ2Bfs.jpg"},
{"name":"Rolex Submariner","description":"The Rolex Submariner’s robust and functional design swiftly became iconic. With their subtly redesigned Oyster case, distinctive dial with large luminescent hour markers, graduated rotatable Cerachrom bezel and solid link Oyster bracelet, the latest generation Submariner and Submariner Date are firmly in line with the original model launched in 1953.","retailer":"Rolex","image":"https://s7test3.scene7.com/is/image/Rolex/?src=is%7BRolex%2Fshadow_oyster_submariner_40%3Flayer%3D1%26src%3D41315%26layer%3D2%26src%3D42290_g_40%26layer%3D3%26src%3D41343%7D&$rv55-watch-grid-retina$"},
{"name":"Stiegers","description":"engage web-enabled infrastructures","retailer":"Little Inc","image":"http://dummyimage.com/225x241.jpg/5fa2dd/ffffff"},
{"name":"Finley","description":"cultivate customized markets","retailer":"Brakus-Rowe","image":"http://dummyimage.com/141x119.png/ff4444/ffffff"},
{"name":"Meran","description":"recontextualize user-centric bandwidth","retailer":"Halvorson-Konopelski","image":"http://dummyimage.com/106x249.png/dddddd/000000"},
{"name":"Toal","description":"architect vertical networks","retailer":"Grimes Group","image":"http://dummyimage.com/216x186.bmp/ff4444/ffffff"},
{"name":"Sainte Paul","description":"utilize interactive users","retailer":"Schaefer, Schmeler and Price","image":"http://dummyimage.com/209x114.png/dddddd/000000"},
{"name":"Iacobucci","description":"engineer e-business deliverables","retailer":"Cartwright, Lynch and Schulist","image":"http://dummyimage.com/169x240.bmp/5fa2dd/ffffff"},
{"name":"Ewbanke","description":"redefine B2C e-commerce","retailer":"Heaney LLC","image":"http://dummyimage.com/100x110.png/5fa2dd/ffffff"},
{"name":"Meldrum","description":"whiteboard web-enabled deliverables","retailer":"Runolfsson, Spinka and Lemke","image":"http://dummyimage.com/117x191.jpg/cc0000/ffffff"}]
/* eslint-enable */

const user = {
  full_name: 'Foo Bar',
  email: 'jeremy@gmail.com',
  password: '$2a$10$is/Zb98l9UYf8wzYWMdk5epyn5hoXlwxg48Qjqpg9bkOgyQ0BFCw.', // 'qwerqwer'
  isVerified: true,
}

const userTwo = {
  full_name: 'Another Guy',
  email: 'azhar@gmail.com',
  password: '$2a$10$is/Zb98l9UYf8wzYWMdk5epyn5hoXlwxg48Qjqpg9bkOgyQ0BFCw.', // 'qwerqwer'
  isVerified: true,
}

const promises = []
const prom = []

new User(user).save()
.then(usr => Promise.all([new Product(products[0]).save(), usr]))
.then((res) => {
  for (let i = 0; i < 10; i += 1) {
    const m = new Item({ serial: i, product: res[0]._id, cora_id: `123${i}4321` }).save()
    promises.push(m)
  }

  return Promise.all(promises)
})
.then((res) => {
  User.update(
    { full_name: 'Foo Bar' },
    { $push: { ownership: { $each: res } } },
  ).exec()
})
.then(new User(userTwo).save())
.then(usr => Promise.all([new Product(products[1]).save(), usr]))
.then((res) => {
  for (let i = 0; i < 10; i += 1) {
    const m = new Item({ serial: i, product: res[0]._id, cora_id: `12${i}21` }).save()
    prom.push(m)
  }

  return Promise.all(prom)
})
.then((res) => {
  User.update(
    { full_name: 'Another Guy' },
    { $push: { ownership: { $each: res } } },
  ).exec()
})
.then(() => mongoose.disconnect())
.catch(console.log)
// Make fake user
// Loop thru products
//   save product,
//   then make item with (serial: randInt, product: product._id, cora_id: randHash)
//   then push item to fake user inventory
