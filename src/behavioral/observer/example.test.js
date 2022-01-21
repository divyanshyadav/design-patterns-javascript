import Observable from './observable'

test('', () => {
    const sendMessage = jest.fn()
    const sendEmail = jest.fn()

    const observable = new Observable()
    observable.subscribe(sendMessage)
    observable.subscribe(sendEmail)

    function onData(data) {
        observable.notify(data)
    }

    onData('hello')

    expect(sendMessage).toHaveBeenCalledWith('hello')
    expect(sendEmail).toHaveBeenCalledWith('hello')
    expect(sendEmail).toHaveBeenCalledTimes(1)
    expect(sendMessage).toHaveBeenCalledTimes(1)
})
