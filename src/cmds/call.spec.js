const { call } = require('./call')
const { deepEqual } = require('assert')

describe('call.js', () => {
  describe('#call', () => {
    it('should return a call cmd', () => {
      const fn = function*() {}
      const a = call(fn, 'payload')
      deepEqual(a, {
        type: 'call',
        payload: 'payload',
        fn
      })
    })
  })
})
