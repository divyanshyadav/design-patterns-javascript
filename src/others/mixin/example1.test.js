import Dog from './example1'

test('dog functionality', () => {
    const max = new Dog()
    expect(max.bark()).toBe('barking')
    expect(max.eat()).toBe('eating')
    expect(max.sleep()).toBe('sleeping')
    expect(max.walk()).toBe('walking')
})
