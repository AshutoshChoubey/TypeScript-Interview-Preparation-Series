// Boolean
let isActive: boolean = true;

// Number
let age: number = 30;
console.log(age + 10);

// String
let title: string = 'Manager';

// Array
let scores: number[] = [85, 90, 78];
let scores1: Array<number> = [85, 90, 78];

// or use a compact form: let scores: Array<number> = [85, 90, 78];

// Tuple
let employee: [string, number, boolean] = ['John', 35, true];

// numeric Enum
enum WeekDays {
  Monday, //0
  Tuesday, //1
  Wednesday, //2
  Thursday, //3
  Friday, //4
}
// string enum
enum satus {
  new = 'NEW',
  inProgress = 'IN_PROGRESS',
}
let today: WeekDays = WeekDays.Wednesday;

// Any
let dynamicData: any = 20;

// Void
function greet(): void {
  console.log('Hello!');
}

// Null and Undefined
let data: null = null;
let user: undefined = undefined;

// Never
function errorMessage(message: string): never {
  throw new Error(message);
}

// Object
let person: object = {
  name: 'John',
  age: 30,
};

// Function
let calculate: Function;
calculate = function (x: number, y: number): number {
  return x + y;
};

// basic union types
let id: string | number;

// multiple union types
type status = 'loading' | 'success' | 'error';

//complex union with object
type Response1 = { status: 'loading ' } | { status: 'success'; string };

// advanced union type
type AllStuff =
  | string
  | number
  | boolean
  | object
  | null
  | { name: string; age: number };

interface User {
  username: string;
  email?: string;
}

const newUser: User = {
  username: 'World gyan',
  email: 'syx@worldgyan.com',
};

interface Animal {
  name: string;
}
interface Dog extends Animal {
  bread: string;
}

// Generic type
function identity<T, K>(arg: T): K {
  return arg as unknown as K;
}
// let ot = identity<string>('Hello Typescript');
// console.log(ot);

interface Pair<T, K> {
  first: T;
  second: K;
}

let pair: Pair<string, number> = {
  first: 'one',
  second: 2,
};
// generic class
class NameOfClass<T> {
  value: T | undefined;
  constructor(private name: T) {
    this.value = name;
  }
}
