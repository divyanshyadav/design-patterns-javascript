export function createMiddlewarePipeline() {
    const middlewares = []

    function push(middleware) {
        middlewares.push(middleware)
    }

    function runner(context) {
        function run(index) {
            if (index >= middlewares.length) return

            const middleware = middlewares[index]

            middleware(context, () => run(index + 1))
        }

        run(0)
    }

    return {
        push,
        runner,
    }
}
