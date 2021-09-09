import Singleton from '../src/creational/singleton'

test('new Object will always return same', () => {
    const instance = new Singleton()
    expect(instance === new Singleton()).toBe(true)
    expect(instance).toBe(new Singleton())
})
