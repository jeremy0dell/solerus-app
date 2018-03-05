import mongoose from 'mongoose'
// import crypto from 'crypto'
import Product from './src/server/model/product'
import Item from './src/server/model/item'
import User from './src/server/model/user'
import Manufacturer from './src/server/model/manufacturer'

mongoose.connect('mongodb://127.0.0.1:27017/solerus')

/* eslint-disable */
const products = [{"name":"Supreme x The North Face Leopard Nuptse","description":"Ideal for unpredictable weather forecasts, this packable, warm jacket is crafted from more than 50% recycled content and insulated with 700 fill down that’s certified to the Responsible Down Standard (RDS).","retailer":"Supreme","image":"https://i.imgur.com/fqQ2Bfs.jpg"},
{"name":"Rolex Submariner","description":"The Rolex Submariner’s robust and functional design swiftly became iconic. With their subtly redesigned Oyster case, distinctive dial with large luminescent hour markers, graduated rotatable Cerachrom bezel and solid link Oyster bracelet, the latest generation Submariner and Submariner Date are firmly in line with the original model launched in 1953.","retailer":"Rolex","image":"https://cdn2.jomashop.com/media/catalog/product/r/o/rolex-oyster-perpetual-submariner-black-dial-black-cerachrom-bezel-steel-mens-watch-116610ln.jpg"},
{"name":"iPhone X","description":"Our vision has always been to create an iPhone that is entirely screen. One so immersive the device itself disappears into the experience. And so intelligent it can respond to a tap, your voice, and even a glance. With iPhone X, that vision is now a reality. Say hello to the future.","retailer":"Apple","image":"https://onetechmind.com/content/images/iphonex-hero.png"},
{"name":"Palm Springs Backpack Mini","description":"Nicolas Ghesquière gave a surprising twist to the backpack, turning a utilitarian staple into this trendy and oh-so-covetable city bag. The sweet Mini version in soft Monogram canvas sports a multi-positional strap for cross-body wear.","retailer":"Loius Vuitton","image":"https://wbcdn.worldsbest.com/uploads/35/29063/1497538845.jpg"},
{"name":"Rembrandt Oil on Canvas Painting","description":"School of Rembrandt Harmensz. van Rijn. circa 1650, A kitchen interior and a woman plucking a chicken with a copper pot, baskets and a plate of fish, oil on canvas","retailer":"Sotheby's","image":"https://i.pinimg.com/564x/ed/b5/38/edb53802ec7488fc99383654a284a886.jpg"},
{"name":"Cartier Gold Half Diamond Love Bracelet","description":"Love bracelet, 18K yellow gold.","retailer":"Cartier","image":"http://www.raymondleejewelers.net/wp-content/uploads/2014/12/Cartier-18K-Yellow-Gold-Love-Diamond-Bangle-Bracelet-1024x1024.jpg"},
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

const manu = {
  name: 'Nordstrom',
  manuType: 'dist',
  email: 'nordstrom@gmail.com',
  password: '$2a$10$is/Zb98l9UYf8wzYWMdk5epyn5hoXlwxg48Qjqpg9bkOgyQ0BFCw.', // 'qwerqwer'
  isVerified: true,
}

const manuTwo = {
  name: 'Rolex',
  manuType: 'manu',
  email: 'rolex@gmail.com',
  password: '$2a$10$is/Zb98l9UYf8wzYWMdk5epyn5hoXlwxg48Qjqpg9bkOgyQ0BFCw.', // 'qwerqwer'
  isVerified: true,
}

const promises = []

new User(user).save()
.then(usr => Promise.all([new Product(products[0]).save(), usr]))
.then((res) => {
  const m = new Item({ serial: 0, product: res[0]._id, cora_id: '12304321' }).save()
  promises.push(m)

  return Promise.all(promises)
})
.then(usr => Promise.all([new Product(products[1]).save(), usr]))
.then((res) => {
  const m = new Item({ serial: 1, product: res[0]._id, cora_id: '12314321' }).save()
  promises.push(m)

  return Promise.all(promises)
})
.then(usr => Promise.all([new Product(products[2]).save(), usr]))
.then((res) => {
  const m = new Item({ serial: 2, product: res[0]._id, cora_id: '12324321' }).save()
  promises.push(m)

  return Promise.all(promises)
})
.then(usr => Promise.all([new Product(products[3]).save(), usr]))
.then((res) => {
  const m = new Item({ serial: 3, product: res[0]._id, cora_id: '12334321' }).save()
  promises.push(m)

  return Promise.all(promises)
})
.then(usr => Promise.all([new Product(products[4]).save(), usr]))
.then((res) => {
  const m = new Item({ serial: 4, product: res[0]._id, cora_id: '12344321' }).save()
  promises.push(m)

  return Promise.all(promises)
})
.then(usr => Promise.all([new Product(products[5]).save(), usr]))
.then((res) => {
  const m = new Item({ serial: 5, product: res[0]._id, cora_id: '12354321' }).save()
  promises.push(m)

  return Promise.all(promises)
})
.then((res) => {
  User.update(
    { full_name: 'Foo Bar' },
    { $push: { ownership: { $each: res.map(itm => itm._id) } } },
  ).exec()
})
.then(new User(userTwo).save())
.then(new Manufacturer(manu).save())
.then(new Manufacturer(manuTwo).save())
.then(() => {
  const Rolex = Manufacturer.findOne({ name: 'Rolex' })
  const watch = Product.findOne({ name: 'Rolex Submariner' })
  return Promise.all([Rolex, watch])
})
.then(([RolexRes, watchRes]) => {
  console.log([RolexRes, watchRes])
  RolexRes.productLines.push(watchRes)
  RolexRes.markModified('ownership')
  return RolexRes.save()
})
.then(() => mongoose.disconnect())
.catch(console.log)
// Make fake user
// Loop thru products
//   save product,
//   then make item with (serial: randInt, product: product._id, cora_id: randHash)
//   then push item to fake user inventory
