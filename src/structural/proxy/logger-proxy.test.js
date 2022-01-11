import creatLoggerProxy from './logger-proxy'

describe('logger proxy', () => {
    test('accessing properties', () => {
        const logger = {
            log: jest.fn(),
        }

        const person = {
            name: 'Red John',
        }

        const personProxy = creatLoggerProxy(person, logger)

        expect(personProxy.name).toBe(person.name)
        expect(logger.log).toHaveBeenCalledTimes(1)
        expect(logger.log).toHaveBeenCalledWith(
            'name property has been accessed'
        )
    })

    test('setting properties', () => {
        const logger = {
            log: jest.fn(),
        }

        const person = {
            name: 'Red John',
        }

        const oldName = person.name
        const newName = 'Red Doa'

        const personProxy = creatLoggerProxy(person, logger)
        personProxy.name = newName

        expect(person.name).toBe(newName)
        expect(logger.log).toHaveBeenCalledTimes(1)
        expect(logger.log).toHaveBeenCalledWith(
            `changed value of property 'name' from '${oldName}' to '${newName}'`
        )
    })
})
