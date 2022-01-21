# Observer Pattern

-   Observer - which react to an event
-   Observable - which notify its subscribers on event

Using observer pattern, objects, the observers, can subscribe to another object called observable. So if any event occurs then observable can notifies all its subscribers.

## Pros

-   With observer pattern we can enforce 'separation of concerns' and the single-responsibility principle. As observer object is not tightly bind with the Observable object and can be decoupled at any point. The observable object is responsible for monitoring the events while observers simply handle the received data.

## Cons

-   If the observer becomes very complex, it may cause performance issues when notifying all observers.

## Libs using this pattern

-   RxJS
