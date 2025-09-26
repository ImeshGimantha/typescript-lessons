// arrays
let ids: number[] = [1, 2, 3, 4, 5, 6];
let arr: any[] = [1, "John", true];

// union type arrays
let mixArray: (string | number | boolean)[] = ["John", 21, true];

// 2D arrays with types
let arrayOfArrays: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];

// tuples
let person: [number, string, boolean] = [1, "Grace", true];

// tuple arrays
let employee: [number, string][] = [
    [1, 'John'],
    [2, 'Grace'],
    [3, 'David']
]