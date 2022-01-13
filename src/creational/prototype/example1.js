export class Dog {
    constructor(name) {
        this.name = name
    }

    bark() {
        return 'bhoo..bhoo'
    }
}

export class SuperDog extends Dog {
    fly() {
        return 'flying dog...'
    }
}
