// In interface we can't store multi types. it will be only a one type

interface Person {
    // if we use 'readonly' we can store it only one time
    readonly id: number;
    name: string;
    age: number;
    location: string;
    // if '?' use after the property, we don't have to give value.
    // if we want, we can store vale or not
    isStudent?: boolean;
}

let student: Person = {
    id: 1001,
    name: 'John',
    age: 21,
    location: 'Galle',
}

student.isStudent = true;


// interfaces with function
interface MathFunc {
    (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// extend interfaces
interface Point2D {
    x: number;
    y: number;
}

interface Point3D extends Point2D {
    z: number;
}