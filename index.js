const bangbang = (sentence, options = {}) => {
  const { character = '!'} = options

  return `${sentence}${character}`
}


module.exports = bangbang
