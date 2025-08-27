"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function indentify(arg) {
    return arg;
}
let num = indentify(123);
let str = indentify("123");
console.log(num, str);
function pair(first, second) {
    return [first, second];
}
let p1 = pair(1, "ashutosh");
let p2 = pair(true, 123);
console.log(p1, p2);
const stringContainer = {
    value: "Hello, Generics!",
    getValue: function () {
        return this.value;
    }
};
console.log(stringContainer.getValue());
const numberStringPair = {
    first: 1,
    second: "one"
};
const stringBooleanPair = {
    first: "isAdmin",
    second: true
};
console.log(stringBooleanPair);
console.log(numberStringPair);
class Stack {
    item = [];
    push(element) {
        this.item.push(element);
    }
    pop() {
        return this.item.pop();
    }
}
const numberStack = new Stack();
numberStack.push(123);
const stringStack = new Stack();
stringStack.push("hello");
const booleanStack = new Stack();
booleanStack.push(true);
function logLength(arg) {
    console.log("Length is:", arg.length);
    return arg;
}
logLength("Hello");
logLength([1, 2, 3, 4]);
logLength({ length: 10 });
// logLength(42)
//# sourceMappingURL=generic.js.map