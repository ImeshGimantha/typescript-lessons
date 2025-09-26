// define class types using interface
interface PersonInterface {
    id: number;
    name: string;
    register(): string;
}

class Person implements PersonInterface {

    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        
        console.log(`Hello ${this.name}`);
    }

    register() {
        return `${this.name} is now registered!`;
    }
}

class Employee extends Person {

    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }

}

const john = new Person(1001, "John");
const david = new Employee(1002, "David", "Developer");

console.log(john, david);
console.log(john.register());
console.log(david.register());