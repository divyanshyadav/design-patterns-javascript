export default class Observable {
    constructor() {
        this.observers = []
    }

    subscribe(fn) {
        this.observers.push(fn)
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(f => f !== fn)
    }

    notify(data) {
        this.observers.forEach(observer => observer(data))
    }
}
