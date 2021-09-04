export default class Observer {
    constructor() {
        this.events = {};
    }

    subscribe(event, fn) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(fn);
    }

    unsubscribe(event, fnToRemove) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter(fn => fn !== fnToRemove);
    }

    notify(event, data) {
        if (!this.events[event]) return;
        this.events[event].forEach(fn => fn.call(this, data));
    }
}
