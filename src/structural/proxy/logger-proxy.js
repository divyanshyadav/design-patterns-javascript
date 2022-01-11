function creatLoggerProxy(obj, logger) {
    return new Proxy(obj, {
        get: (obj, prop) => {
            logger.log(`${prop} property has been accessed`)
            return Reflect.get(obj, prop)
        },
        set: (obj, prop, value) => {
            logger.log(
                `changed value of property '${prop}' from '${obj[prop]}' to '${value}'`
            )
            return Reflect.set(obj, prop, value)
        },
    })
}

export default creatLoggerProxy
