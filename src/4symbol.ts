const s1= Symbol()
console.log(s1== Symbol());
const s2= Symbol('Description');

const s3= Symbol.for('Description');
const s4= Symbol.for('Description1');

const user ={
    [s1]: 'value1',
    [s2]: 'value2',
    [s3]: 'value3',
    [s4]: 'value4',
    name: 'John Doe',
    age: 30,
}
user[s1] = 'updated value1';
console.log(user[s1]); // 'updated value1'
console.log(user[s2]); // 'value2'
console.log(Object.keys(user));
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(), Symbol(Description), Symbol(Description)]
console.log(Reflect.ownKeys(user)); // ['name', 'age', Symbol(), Symbol(Description), Symbol(Description)]

