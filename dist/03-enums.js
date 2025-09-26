"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Monday"] = 1] = "Monday";
    Direction1[Direction1["Tuesday"] = 2] = "Tuesday";
    Direction1[Direction1["Wednesday"] = 3] = "Wednesday";
    Direction1[Direction1["Thursday"] = 4] = "Thursday";
    Direction1[Direction1["Friday"] = 5] = "Friday";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Wednesday);
var Direction2;
(function (Direction2) {
    Direction2["Monday"] = "Monday";
    Direction2["Tuesday"] = "Tuesday";
    Direction2["Wednesday"] = "Wednesday";
    Direction2["Thursday"] = "Thursday";
    Direction2["Friday"] = "Friday";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Wednesday);
