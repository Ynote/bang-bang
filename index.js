const bangbang = (sentence, options = {}) => {
  const { character = '!', times = 1 } = options
  const a = Array(times).fill(character).join('')

  return `${sentence}${a}`
}


module.exports = bangbang
