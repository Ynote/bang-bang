const getRandomInt = () => {
  const max = 4

  return Math.floor(Math.random() * max)
}

const getBangs = () => {
  return new Array(getRandomInt()).fill('!').join('')
}

const bangbang = (sentence) => `${sentence}${getBangs()}`

module.exports = bangbang
