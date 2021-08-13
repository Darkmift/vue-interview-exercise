function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function makeProducts(num) {
  const products = []
  for (let i = 0; i < num; i++) {
    products.push({
      imageUrl: 'http://',
      name: `product${i}`,
      description: `Product ${i} description`,
      price: getRandomInt(50, 500)
    })
  }
  return products;
}