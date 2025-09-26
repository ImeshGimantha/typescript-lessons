// variables / primitive types
let id: number = 5;
let name: string = "John Doe";
let status: boolean = true;
let undefinedVar: undefined = undefined;
let x: any = "Hello";
x = 20;

// union
let pid: number | string = 0o1;
pid = "C001";

// unknown type
let unknownVar: unknown = "Hello World";

unknownVar = (unknownVar as string).toUpperCase();

unknownVar = '5';

if (typeof unknownVar === 'string') {
    unknownVar = unknownVar.toUpperCase();
}