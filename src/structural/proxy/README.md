# Proxy pattern

-   Proxy pattern is used when you want to control the interactions with the underline objects.

-   A proxy object can determine the behavior whenever we are interacting with the object.

-   Use cases: validation, formatting, notification or debugging

## Warning

Over use of Proxy object or performing heavy operations on each handler method invocation can easily affect the performance of the application negatively. It's best to not use proxy for performance-critical code.
