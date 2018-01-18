import mongoose from 'mongoose'
// import crypto from 'crypto'
import Product from './src/server/model/product'
import Item from './src/server/model/item'
import User from './src/server/model/user'

mongoose.connect('mongodb://localhost/solerus')

/* eslint-disable */
const products = [{"name":"Supreme x The North Face Leopard Nuptse","description":"empower ubiquitous mindshare","retailer":"Jerde, Hagenes and Cummings","image":"https://i.imgur.com/fqQ2Bfs.jpg"},
{"name":"Butts","description":"evolve robust e-commerce","retailer":"Kirlin-Wolf","image":"http://dummyimage.com/176x120.png/dddddd/000000"},
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

const promises = []

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
.then(() => mongoose.disconnect())
.catch(console.log)
// Make fake user
// Loop thru products
//   save product,
//   then make item with (serial: randInt, product: product._id, cora_id: randHash)
//   then push item to fake user inventory
