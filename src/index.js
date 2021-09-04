import Subject from './observer';

const subject = new Subject();

const fn1 = () => console.log('notified fn1');
const fn2 = () => console.log('notified fn2');

subject.subscribe(fn1);
subject.subscribe(fn2);

subject.notify();
