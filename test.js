const mocha = require('mocha')
const expect = require('expect.js')
const bangbang = require('./index.js')

describe('bang-bang', () => {
  it('returns "Hello world!"', () => {
    expect(bangbang('Hello world')).to.be('Hello world!')
  })
})
