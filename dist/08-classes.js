"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(`Hello ${this.name}`);
    }
    register() {
        return `${this.name} is now registered!`;
    }
}
class Employee extends Person {
    position;
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const john = new Person(1001, "John");
const david = new Employee(1002, "David", "Developer");
console.log(john, david);
console.log(john.register());
console.log(david.register());
