# Middleware Pattern

-   As components grow in the project than it become quite difficult to communicate with one another to solve this we can use middleware pattern in which components can only talk to middleware object
-   Made from chain of functions
-   Context object has been passed to the first function in the chain
-   Middleware function can modify the context object
-   Middleware function can call the next middleware in the chain

## References

-   https://www.patterns.dev/posts/mediator-pattern/
-   https://muniftanjim.dev/blog/basic-middleware-pattern-in-javascript/
