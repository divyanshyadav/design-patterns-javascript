import Observer from '../observer'

test('observer subscribe and notify', () => {
    class Button extends Observer {}

    const fn1 = jest.fn()
    const fn2 = jest.fn()

    const button = new Button()
    button.subscribe('click', fn1)
    button.subscribe('click', fn2)

    const data = { target: button }
    button.notify('click', data)

    expect(fn1).toHaveBeenCalledTimes(1)
    expect(fn2).toHaveBeenCalledTimes(1)
    expect(fn1).toHaveBeenCalledWith(data)
    expect(fn2).toHaveBeenCalledWith(data)
})
