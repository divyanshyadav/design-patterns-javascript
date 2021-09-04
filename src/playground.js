import Observer from './behavioral-patterns/observer';

class Button extends Observer {}

const fn1 = e => console.log(e.target);
const fn2 = e => console.log(e.target);

const button = new Button();
button.subscribe('click', fn1);
button.subscribe('click', fn2);

button.notify('click', { target: button });
