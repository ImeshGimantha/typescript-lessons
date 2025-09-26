function convertToSomething(value: string | number): number | string {
    if (typeof value === 'string') {
        value = value.toUpperCase();
    }

    if (typeof value === 'number') {
        value = value.toFixed(2);
    }

    return value;
}

console.log(convertToSomething("Hello World"));
console.log(convertToSomething(2500));