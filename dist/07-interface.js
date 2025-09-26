"use strict";
// In interface we can't store multi types. it will be only a one type
Object.defineProperty(exports, "__esModule", { value: true });
let student = {
    id: 1001,
    name: 'John',
    age: 21,
    location: 'Galle',
};
student.isStudent = true;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
