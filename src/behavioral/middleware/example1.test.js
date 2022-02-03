import { createMiddlewarePipeline } from './example1'

test('case 1', () => {
    const pipeline = createMiddlewarePipeline()

    pipeline.push((context, next) => {
        context.value += 1
        next()
    })

    pipeline.push((context, next) => {
        context.value *= 2
        next()
    })

    const context = { value: 1 }
    pipeline.runner(context)

    expect(context.value).toBe(4)
})
