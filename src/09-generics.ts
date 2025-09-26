function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5]);
let strArray = getArray<string>(['John', 'David', 'Grace', 'Mike']);

console.log(numArray, strArray);