const mocha = require('mocha')
const expect = require('expect.js')
const bangbang = require('./index.js')

describe('bang-bang', () => {
  describe('by default', () => {
    it('returns "Hello world!"', () => {
      const value = bangbang('Hello world')

      expect(value).to.be('Hello world!')
    })
  })

  describe('with a specific caracter', () => {
      it('returns "Hello world?"', () => {
      const value = bangbang('Hello world', { character: '?'})

      expect(value).to.be('Hello world!')
    })
  })

  describe('with more that one occurence of "!"', () => {
    it('returns "Hello world!!!"', () =>
      {
        const value = bangbang('Hello world', { times: 3 })

        expect(value).to.be('Hello world!!!')
      }
    )
  })
})
