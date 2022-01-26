class Dog {
    constructor(name) {
        this.name = name
    }
}

const dogFunctionality = {
    bark: () => 'barking',
    eat: () => 'eating',
}

const animalFunctionality = {
    sleep: () => 'sleeping',
    walk: () => 'walking',
}

Object.assign(Dog.prototype, dogFunctionality, animalFunctionality)

export default Dog
