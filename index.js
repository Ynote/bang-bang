const bangbang = (sentence, replaceDots) => {
  if (replaceDots) {
    return sentence.replace(/\./g, '!')
  }

  return `${sentence}!`
}


module.exports = bangbang
