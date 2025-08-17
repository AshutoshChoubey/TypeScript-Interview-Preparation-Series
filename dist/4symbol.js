"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const s1 = Symbol();
console.log(s1 == Symbol());
const s2 = Symbol('Description');
const s3 = Symbol.for('Description');
const s4 = Symbol.for('Description1');
const user = {
    [s1]: 'value1',
    [s2]: 'value2',
    [s3]: 'value3',
    [s4]: 'value4',
    name: 'John Doe',
    age: 30,
};
user[s1] = 'updated value1';
console.log(user[s1]); // 'updated value1'
console.log(user[s2]); // 'value2'
console.log(Object.keys(user));
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(), Symbol(Description), Symbol(Description)]
console.log(Reflect.ownKeys(user)); // ['name', 'age', Symbol(), Symbol(Description), Symbol(Description)]
// A custom object
const myNumbers = {
    start: 1,
    end: 5,
    // Defining Symbol.iterator to make this object iterable
    [Symbol.iterator]() {
        let current = this.start;
        let end = this.end;
        return {
            next() {
                if (current <= end) {
                    return { value: current++, done: false }; // yield next number
                }
                else {
                    return { done: true }; // end of iteration
                }
            }
        };
    }
};
// Now we can use for...of on our object
for (let num of myNumbers) {
    console.log(num);
}
//# sourceMappingURL=4symbol.js.map