import makeId from './makeId'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default function makeProducts(num) {
  const products = []
  for (let i = 0; i < num; i++) {
    products.push({
      id: makeId(),
      imageUrl: 'https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg',
      name: `product${i}`,
      description: `Product ${i} description`,
      price: getRandomInt(50, 500)
    })
  }
  return products;
}