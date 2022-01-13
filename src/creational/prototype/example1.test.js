import { Dog, SuperDog } from './example1'

test("Dog's prototypal chain", () => {
    const dog = new Dog()

    // dog -----> Dog ------> Object

    expect(dog.__proto__).toBe(Dog.prototype)
    expect(dog.__proto__.__proto__).toBe(Object.prototype)
})

test('SuperDog prototypal chain', () => {
    const superDog = new SuperDog()

    // superDog ----> SuperDog ----> Dog -----> Object

    expect(superDog.__proto__).toBe(SuperDog.prototype)
    expect(superDog.__proto__.__proto__).toBe(Dog.prototype)
    expect(superDog.__proto__.__proto__.__proto__).toBe(Object.prototype)
})
