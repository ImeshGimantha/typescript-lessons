"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['John', 'David', 'Grace', 'Mike']);
console.log(numArray, strArray);
