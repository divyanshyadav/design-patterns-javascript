export default class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fnToRemove) {
        this.observers = this.observers.filter(fn => fn !== fnToRemove);
    }

    notify() {
        this.observers.forEach(fn => fn.call());
    }
}
