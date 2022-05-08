test('run test return "bar"', () =>{
    const foo = require('../foo')
    expect(foo.foo()).toBe('bar')
})