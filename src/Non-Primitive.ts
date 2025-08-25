let person: object = { name: "ashutosh", age: 20 };
let config : {host:string, port:number, db:string}= { host: "localhost", port: 8080, db: "test" };

let arr: string[] = ["apple", "banana", "orange"];
let arr2:Array<number> = [1, 2, 3, 4, 5];

let mixedArr: (string | number | boolean)[] = [1, "two", true, 4, "five"];
let mixedArr2: Array<string | number | boolean> = ["one", 2, "three", 4, false];

let tuple: [string, number, boolean] = ["ashutosh", 20, true];

let add: (a: number, b: number) => number = (x, y) => x + y;
let greet: (name: string) => void = (n) => console.log(`Hello ${n}`);
