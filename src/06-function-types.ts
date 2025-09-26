/*
    function <function_name>(): <return type> {code}
*/

function addNumber(x: number, y: number): number {
    return x + y;
}

addNumber(3,4);

function showLog(message: string | number): void {
    console.log(message);
}

showLog("Test Message");

// interfaces with function
interface MathFunc {
    (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;