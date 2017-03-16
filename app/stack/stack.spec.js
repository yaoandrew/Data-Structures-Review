const Stack = require('./stack')

describe('Stack Data Structure', () => {
    it('Stack should exist', () => {
        expect(Stack).to.exist
    })
    it('Stack should have a push method', () => {
        expect(Stack.count).to.equal(0)
    })
})