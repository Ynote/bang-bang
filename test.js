const mocha = require('mocha')
const expect = require('expect.js')
const bangbang = require('./index.js')

describe('bang-bang', () => {
  it('returns "Hello world" with 0 to 3 bangs at the end of the sentence', () => {
    expect(bangbang('Hello world')).to.match(/^Hello world(\d{0,3})/)
  })
})
