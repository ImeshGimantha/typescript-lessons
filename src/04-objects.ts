let user: {
    id: number;
    name: string;
} = {
    id: 1,
    name: 'John'
}

type Person = {
    id: number;
    name: string;
    age: number;
    location: string;
    isStudent: boolean;
}

let person: Person = {
    id: 1001,
    name: "Grace",
    age: 21,
    location: "Galle",
    isStudent: false
}

// type can be declare as a one type or multi type structure
type Point = number | string;
const P1: Point = 1;