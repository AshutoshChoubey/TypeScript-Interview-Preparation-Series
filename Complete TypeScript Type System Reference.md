# Understanding TypeScript: Types and Their Benefits

TypeScript enhances JavaScript by adding static type checking, which helps catch errors early and improves code quality. 

## Why Use Types in TypeScript?

Types in TypeScript enable static analysis, allowing errors to be caught during development rather than at runtime. This boosts developer productivity and code reliability.

### Advantages

- **Early Error Detection**: Identifies issues like type mismatches during compilation, reducing runtime bugs.
- **Improved Code Readability**: Explicit types act as documentation, making code easier to understand and refactor.
- **Better Tooling**: Enhances IDE features like autocompletion, refactoring, and navigation.
- **Scalability for Large Projects**: Facilitates collaboration in teams by enforcing consistent data structures.
- **Self-Documenting Code**: Reduces the need for extensive comments by clarifying expected inputs/outputs.
- **Performance Optimizations**: Allows for potential compiler optimizations, though not always guaranteed.

### Disadvantages

- **Learning Curve**: Requires understanding type systems, which can be challenging for JavaScript developers.
- **Additional Boilerplate**: Explicit type annotations increase code verbosity.
- **Compilation Overhead**: Adds a build step, slowing development in small projects.
- **Potential Over-Typing**: Overuse can lead to rigid code that's harder to maintain.
- **Not Runtime-Enforced**: Types are erased at runtime, so no performance impact but also no runtime checks.

## Problems in JavaScript That TypeScript Resolves

JavaScript is dynamically typed, which can lead to various issues. TypeScript addresses these through static typing.

- **Runtime Type Errors**: JavaScript allows invalid operations (e.g., adding a string to a number), causing crashes; TypeScript catches these at compile time.
- **Lack of Structure**: No built-in way to define object shapes, leading to inconsistent data; TypeScript uses interfaces and types for enforcement.
- **Refactoring Risks**: Changing code can introduce hidden bugs due to loose typing; TypeScript provides type-safe refactoring.
- **Scalability Challenges**: Large codebases become error-prone without type checks; TypeScript adds safety for enterprise applications.
- **Poor IDE Support**: Limited autocompletion in plain JavaScript; TypeScript enables advanced editor intelligence.
- **Debugging Difficulties**: Errors surface only at runtime; TypeScript shifts detection to the development phase.

## Complete TypeScript Type System Reference

TypeScript provides a comprehensive type system that enhances JavaScript with static type checking. Here's a structured breakdown of all available types, categorized systematically with syntax, examples, and use cases.

### 1. Primitive Types

These are the basic building blocks representing single values in TypeScript.

#### String Type

```typescript
let message: string = "Hello TypeScript";
let template: string = `Welcome ${message}`;
```

**Use Cases:** Text data, user inputs, API responses, template strings.

#### Number Type

```typescript
let count: number = 42;
let price: number = 99.99;
let binary: number = 0b1010;
let octal: number = 0o744;
let hex: number = 0xf00d;
```

**Use Cases:** Mathematical calculations, counters, prices, measurements.

#### Boolean Type

```typescript
let isActive: boolean = true;
let hasPermission: boolean = false;
```

**Use Cases:** Flags, conditional logic, form validation states.

#### BigInt Type

```typescript
let largeNumber: bigint = 9007199254740991n;
let anotherBig: bigint = BigInt(9007199254740991);
```

**Use Cases:** Large integer calculations, cryptographic operations, high-precision math.

#### Symbol Type

The `symbol` type represents unique, immutable values primarily used as object property keys. Introduced in ES6, it's fully supported in TypeScript for type-safe coding. Unlike strings or numbers, every symbol is guaranteed to be distinct—even if created with the same description—which prevents accidental property collisions.

- **Key Characteristics**:
  - **Uniqueness**: Symbols created with `Symbol()` are always unique — two separate `Symbol()` calls never produce equal values. However, `Symbol.for(key)` creates or returns a global shared symbol for `key`, so `Symbol.for('x') === Symbol.for('x')` is `true`.
  - **Immutability (symbol identity)**: The Symbol primitive's identity (and its description) is immutable — you cannot change a symbol after it's created.
  - **Property mutability**: However, properties on objects that use symbols as keys are ordinary object properties and can be added, changed, or deleted; the immutability refers to the symbol value itself, not to symbol-keyed object properties.
  - **Non-enumerable**: Symbol-keyed properties don't appear in loops like `for...in` or methods like `Object.keys()`, making them great for "hidden" data.

In TypeScript, you declare a symbol like this:

```typescript
let mySymbol: symbol = Symbol("description");  // The string is optional, just for debugging
```

The description (e.g., "description") is only for readability in tools like console logs; it doesn't affect uniqueness.

**How to Create Symbols**

- **Basic Creation**:

```typescript
const uniqueId = Symbol();  // No description
const labeledSymbol = Symbol("userId");  // With a label for clarity
```

- **Global Symbols** (Shared Across Realms):

```typescript
const globalSym = Symbol.for("sharedKey");  // Creates or retrieves a shared symbol
const sameSym = Symbol.for("sharedKey");    // Retrieves the same symbol
console.log(globalSym === sameSym);         // true
```

Use `Symbol.keyFor(globalSym)` to get the key back as a string.

**Private Object Properties**
Symbols mimic private fields in objects, keeping data hidden from external access.

```typescript
const SECRET_KEY = Symbol("secret");

class BankAccount {
  private [SECRET_KEY]: number;  // Computed property name for privacy

  constructor(balance: number) {
    this[SECRET_KEY] = balance;
  }

  getBalance(): number {
    return this[SECRET_KEY];
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance());  // 1000
// console.log(account.secret);     // undefined – can't access directly
```

Use built-in symbols like `Symbol.iterator` to make custom objects work with loops.

```typescript
class Countdown {
  constructor(private start: number) {}

  [Symbol.iterator]() {  // Enables for...of iteration
    let current = this.start;
    return {
      next: () => ({
        value: current,
        done: current-- < 1
      })
    };
  }
}
const timer = new Countdown(3);
for (const num of timer) {
  console.log(num);  // Outputs: 3, 2, 1
}


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
        } else {
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
```

**Use Cases:** Unique object keys, private properties, constants that need uniqueness.

#### Null and Undefined

```typescript
let empty: null = null;
let notSet: undefined = undefined;
```

**Use Cases:** Representing absence of value, optional parameters, uninitialized state.

### 2. Non-Primitive Types

Complex types that can contain multiple values or represent more sophisticated structures.

#### Object Type

```typescript
let person: object = { name: "John", age: 30 };
let config: { host: string; port: number } = { host: "localhost", port: 3000 };
```

**Use Cases:** Configuration objects, API payloads, complex data structures.

#### Array Types

```typescript
let numbers: number[] = [1, 2, 3, 4];
let strings: Array<string> = ["a", "b", "c"];
let mixed: (string | number)[] = [1, "two", 3];
```

**Use Cases:** Lists of data, collections, batch operations.

#### Tuple Types

```typescript
let coordinates: [number, number] = [10, 20];
let person: [string, number, boolean] = ["Alice", 25, true];
let namedTuple: [x: number, y: number] = [10, 20];
```

**Use Cases:** Fixed-length arrays, coordinate pairs, function return values, database records.

#### Function Types

```typescript
let add: (a: number, b: number) => number = (x, y) => x + y;
let greet: (name: string) => void = (n) => console.log(`Hello ${n}`);
```

**Use Cases:** Callback functions, event handlers, higher-order functions.

### 3. Enumeration Types

Named constants that improve code readability and maintainability.

#### Numeric Enums

```typescript
enum Status {
  Pending,    // 0
  Approved,   // 1
  Rejected    // 2
}

enum Priority {
  Low = 1,
  Medium = 5,
  High = 10
}
```

#### String Enums

```typescript
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
```

#### Heterogeneous Enums

```typescript
enum Mixed {
  No = 0,
  Yes = "YES"
}
```

**Use Cases:** Status codes, configuration options, API constants, state machines.

### 4. Union Types

Allow variables to hold one of several possible types.

#### Basic Union

```typescript
let id: string | number = "abc123";
id = 42; // Valid

function printId(id: string | number): void {
  console.log(`ID: ${id}`);
}
```

#### Complex Union

```typescript
type Status = "loading" | "success" | "error";
type ApiResponse =
  | { status: "success"; data: any }
  | { status: "error"; message: string }
  | { status: "loading" };

  function handleResponse(res: ApiResponse) {
  if (res.status === "success") {
    console.log("Data:", res.data);
  } else if (res.status === "error") {
    console.error("Error:", res.message);
  } else if (res.status === "loading") {
    console.log("Loading...");
  }
}

```

**Use Cases:** API responses, form states, flexible parameters, discriminated unions.

### 5. Intersection Types

Combine multiple types into one using the `&` operator.

```typescript
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  department: string;
};

type Staff = Person & Employee;

const employee: Staff = {
  name: "John",
  age: 30,
  employeeId: "EMP001",
  department: "IT"
};
```

**Use Cases:** Mixing multiple interfaces, extending types, composing complex objects.

### 6. Interface Types

Define contracts for object structures.

#### Basic Interface

```typescript
interface User {
  readonly id: string;
  name: string;
  email: string;
  age?: number; // Optional property
}
```

#### Interface with Methods

```typescript
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}
```

#### Interface Inheritance

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}
```

#### Index Signatures

```typescript
interface StringDictionary {
  [key: string]: string;
}

interface NumberArray {
  [index: number]: number;
}

interface StringDictionary {
  [key: string]: string;
}

const user: StringDictionary = {
  name: "Ashutosh",
  city: "Patna",
  country: "India",
};

console.log(user["name"]); // ✅ "Ashutosh"
console.log(user["city"]); // ✅ "Patna"
user["age"] = 25; // ❌ Error: number not assignable to string
interface NumberArray {
  [index: number]: number;
}

const fibonacci: NumberArray = [0, 1, 1, 2, 3, 5, 8];

console.log(fibonacci[3]); // ✅ 2
console.log(fibonacci[6]); // ✅ 8
fibonacci[7] = "thirteen"; // ❌ Error: string not assignable to number


```

**Use Cases:** API contracts, class blueprints, configuration schemas, type safety for objects.

### 7. Generic Types

Create reusable components that work with multiple types.

#### Generic Functions

```typescript
function identity<T>(arg: T): T {
  return arg;
}

function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
```

#### Generic Interfaces

```typescript
interface Container<Type> {
  value: Type;
  getValue(): Type;
}

interface Pair<T, K> {
  first: T;
  second: K;
}
```

#### Generic Classes

```typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}
```

#### Generic Constraints

```typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

## 🔹 **Generic Functions**

```typescript
// Generic identity function
function identity<T>(arg: T): T {
  return arg;
}

let num = identity<number>(42);    // Explicit type
let str = identity("Hello");       // Type inferred

console.log(num);  // 42
console.log(str);  // Hello

// Generic function with two types
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

let userPair = pair("Alice", 25);   // [string, number]
let flagPair = pair(true, "Done");  // [boolean, string]
```

---

## 🔹 **Generic Interfaces**

```typescript
// A generic container interface
interface Container<Type> {
  value: Type;
  getValue(): Type;
}

// Usage with string
const stringContainer: Container<string> = {
  value: "Hello TS",
  getValue() {
    return this.value;
  },
};

console.log(stringContainer.getValue()); // Hello TS

// Generic pair interface
interface Pair<T, K> {
  first: T;
  second: K;
}

const numberPair: Pair<number, number> = { first: 10, second: 20 };
const mixedPair: Pair<string, boolean> = { first: "Active", second: true };

console.log(numberPair); // { first: 10, second: 20 }
console.log(mixedPair);  // { first: "Active", second: true }
```

---

## 🔹 **Generic Classes**

```typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

// Stack of numbers
const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // 20

// Stack of strings
const stringStack = new Stack<string>();
stringStack.push("A");
stringStack.push("B");
console.log(stringStack.pop()); // "B"
```

---

## 🔹 **Generic Constraints**

```typescript
// Constraint: T must have a length property
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log("Length:", arg.length);
  return arg;
}

// Works with arrays and strings
logLength("Hello World");         // Length: 11
logLength([1, 2, 3, 4]);          // Length: 4
logLength({ length: 100, name: "Box" }); // Length: 100

// ❌ Error: number has no "length" property
// logLength(42);
```

---



**Use Cases:** Reusable components, type-safe collections, API wrappers, utility functions.

### 8. Type Aliases

Create custom names for complex types.

#### Basic Type Alias

```typescript
type StringOrNumber = string | number;
type UserId = string;
type EventHandler = (event: Event) => void;
```

#### Complex Type Alias

```typescript
type ApiResponse<T> = {
  success: boolean;
  data: T;
  error?: string;
  timestamp: Date;
};

type UserResponse = ApiResponse<User>;
```

**Use Cases:** Simplifying complex types, creating domain-specific types, improving readability.

### 9. Literal Types

Specify exact values rather than general types.

#### String Literals

```typescript
type Theme = "light" | "dark" | "auto";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
```

#### Numeric Literals

```typescript
type Dice = 1 | 2 | 3 | 4 | 5 | 6;
type PowerOfTwo = 2 | 4 | 8 | 16 | 32;
```

#### Boolean Literals

```typescript
type Success = true;
type Failure = false;
```

**Use Cases:** Configuration options, API endpoints, strict value constraints, state machines.

### 10. Utility Types

Built-in TypeScript types for common transformations.

#### Object Manipulation

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties required
type RequiredUser = Required<User>;

// Pick specific properties
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;

// Omit specific properties
type UserWithoutPassword = Omit<User, 'password'>;

// Make all properties readonly
type ImmutableUser = Readonly<User>;
```

#### Function Utilities

```typescript
function getUser(): { id: string; name: string } {
  return { id: "1", name: "John" };
}

// Extract return type
type UserType = ReturnType<typeof getUser>;

// Extract parameter types
type GetUserParams = Parameters<typeof getUser>;
```

#### Advanced Utilities

```typescript
// Create object type with specific keys and values
type StatusMap = Record<"pending" | "success" | "error", string>;

// Non-nullable type
type NonNullableString = NonNullable<string | null | undefined>;
```


## 🎯 **Object Manipulation**

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}
```

### 1. `Partial<T>` → Make all properties optional

Use case: **Updating a user** (you may not update all fields).

```typescript
type PartialUser = Partial<User>;

function updateUser(id: string, updates: PartialUser) {
  console.log(`Updating user ${id} with`, updates);
}

// ✅ Only updating name
updateUser("1", { name: "Alice" });
```

---

### 2. `Required<T>` → Make all properties required

Use case: **Validating a user before saving** (no field should be missing).

```typescript
type RequiredUser = Required<User>;

function saveUser(user: RequiredUser) {
  console.log("Saving user:", user);
}

// ❌ Error if missing any property
saveUser({
  id: "1",
  name: "John",
  email: "john@example.com",
  password: "secret",
});
```

---

### 3. `Pick<T, K>` → Pick specific properties

Use case: **Returning only safe fields** for frontend.

```typescript
type PublicUser = Pick<User, "id" | "name" | "email">;

function getPublicUser(user: User): PublicUser {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}
```

---

### 4. `Omit<T, K>` → Omit specific properties

Use case: **Removing sensitive data** like password.

```typescript
type UserWithoutPassword = Omit<User, "password">;

function getSafeUser(user: User): UserWithoutPassword {
  const { password, ...rest } = user;
  return rest;
}
```

---

### 5. `Readonly<T>` → Make properties immutable

Use case: **Prevent accidental changes** to a user object.

```typescript
type ImmutableUser = Readonly<User>;

function printUser(user: ImmutableUser) {
  console.log(`User: ${user.name}`);
  // user.name = "Changed"; ❌ Error: cannot modify readonly property
}
```

---

## ⚡ **Function Utilities**

```typescript
function getUser(): { id: string; name: string } {
  return { id: "1", name: "John" };
}
```

### 6. `ReturnType<T>` → Extract return type of a function

Use case: **Reusing the same return type without duplication.**

```typescript
type UserType = ReturnType<typeof getUser>;

const user: UserType = { id: "2", name: "Alice" };
```

---

### 7. `Parameters<T>` → Extract parameter types

Use case: **Wrapping a function call safely.**

```typescript
type GetUserParams = Parameters<typeof getUser>; // []

function callGetUser(...args: GetUserParams) {
  return getUser(...args);
}
```

---

## 🚀 **Advanced Utilities**


### **8. `Record<K, T>`**

👉 **Definition:**
`Record<K, T>` creates an **object type** where:

* `K` → the set of keys (union of string literals)
* `T` → the type of values


#### Example:

```ts
type StatusMap = Record<"pending" | "success" | "error", string>;

const statusMessages: StatusMap = {
  pending: "Loading...",
  success: "Data loaded!",
  error: "Something went wrong",
};
```

✅ Here,

* The keys **must** be `"pending" | "success" | "error"`.
* The values **must** be strings.
* If you miss a key or add an extra one, TypeScript throws an error.

#### **Use Case:**

* Mapping **status codes → messages** (UI states, API status, form errors).
* Creating **lookup tables** with strict key-value types.

---

### **9. `NonNullable<T>`**

👉 **Definition:**
`NonNullable<T>` removes `null` and `undefined` from a type.
It ensures that the value is **always safe to use without null checks**.

#### Example:

```ts
type NonNullableString = NonNullable<string | null | undefined>;

function printText(text: NonNullableString) {
  console.log(text.toUpperCase());
}

printText("Hello");   // ✅ Works
// printText(null);   ❌ Error (TypeScript prevents it)
```

Good catch 👍 — actually, **`NonNullable<T>` is not always the same as `string | null | undefined`**.
It works on **any type** you pass to it — and it **removes `null` and `undefined`** from that type.

Let’s clarify with examples 👇

---

### ✅ Case 1: `string | null | undefined`

```ts
type T1 = NonNullable<string | null | undefined>;
```

Result → `string`
👉 Removes both `null` and `undefined`.

---

### ✅ Case 2: `number | null`

```ts
type T2 = NonNullable<number | null>;
```

Result → `number`

---

### ✅ Case 3: `boolean | undefined`

```ts
type T3 = NonNullable<boolean | undefined>;
```

Result → `boolean`

---

### ✅ Case 4: Complex union

```ts
type User = { id: number; name: string } | null | undefined;

type SafeUser = NonNullable<User>;
```

Result → `{ id: number; name: string }`

---

🔑 **So `NonNullable<T>` is NOT always `string | null | undefined`.**
It depends on what `T` is — it strips away `null` and `undefined` from *any* union type.


```ts
type User = 
  | { id: number; name: string } 
  | null 
  | undefined 
  | string 
  | number;
```

✅ This means:
A `User` value can be either:

* an object `{ id: number; name: string }`,
* `null`,
* `undefined`,
* a `string`,
* or a `number`.

---

### Using it

```ts
let u1: User = { id: 1, name: "Ashu" }; // object ✅
let u2: User = null;                     // null ✅
let u3: User = "Hello";                  // string ✅
let u4: User = 42;                       // number ✅
```

---

### With `NonNullable<User>`

```ts
type SafeUser = NonNullable<User>;
```

Now `SafeUser` removes `null` and `undefined`, so it becomes:

```ts
type SafeUser = { id: number; name: string } | string | number;
```




✅ Here,

* `NonNullable<string | null | undefined>` becomes just `string`.
* You cannot pass `null` or `undefined`.

#### **Use Case:**

* **API type transformations** → when APIs return `string | null`, but you need a safe `string`.
* **Form handling** → ensure a field value is always valid before using it.
* **Data validation** → prevent runtime null/undefined errors.
* **Type safety** → removes ambiguity, so functions can safely use methods (`toUpperCase`, etc.).

---

#### 🔑 **Key Takeaways**

* `Record<K, T>` → For creating **strictly typed objects** with fixed keys and uniform value types.
* `NonNullable<T>` → For **excluding null/undefined** and ensuring safe, predictable values.


### 11. Special Types

#### Any Type

```typescript
let anything: any = 42;
anything = "hello";
anything = true;
```

**Use Cases:** Migration from JavaScript, third-party libraries without types (avoid when possible).

#### Unknown Type

```typescript
let userInput: unknown = getInput();

// Must check type before use
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}
```

**Use Cases:** Type-safe alternative to `any`, user input validation, API responses.

---

## 1. `any`

* Tells TypeScript: **“Trust me, I know what I’m doing.”**
* Turns off type checking for that value.
* You can **assign it to anything** and **use it however you want**.

Example:

```ts
let value: any;

value = 42;
value = "hello";
value = { x: 10 };

let num: number = value; // ✅ OK
value.toUpperCase();     // ✅ No error, even if it's not a string
```

⚠️ Danger: `any` removes all safety → you might get runtime errors.

---

## 2. `unknown`

* Tells TypeScript: **“I don’t know what this is, so you must check before using it.”**
* Safer alternative to `any`.
* You can assign anything to `unknown`, but you **cannot directly use it** without type narrowing or type assertion.

Example:

```ts
let value: unknown;

value = 42;
value = "hello";

let num: number = value; // ❌ Error: Type 'unknown' not assignable to type 'number'

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ Safe
}
```

---

## 3. Key Differences

| Feature                 | `any` 🚨                          | `unknown` ✅                           |
| ----------------------- | --------------------------------- | ------------------------------------- |
| Can assign anything?    | Yes                               | Yes                                   |
| Can use without checks? | Yes                               | ❌ No                                  |
| Type safety             | ❌ None                            | ✅ Enforced                            |
| Assign to other types   | ✅ Allowed                         | ❌ Not allowed without check           |
| Use case                | Quick escape hatch (bad practice) | Safe alternative when type is unknown |

---

## 4. Real-Life Analogy

* `any` → Like turning off seatbelts in a car 🚗💥 (you can do anything, but unsafe).
* `unknown` → Like wearing seatbelts 🚦 (you must check before moving safely).

---

## 5. When to Use?

* **Use `unknown`** when you truly don’t know the type (e.g., parsing JSON, external APIs).
* **Avoid `any`**, except maybe in quick prototyping or migration from JavaScript.

---

👉 Example with JSON:

```ts
function parseJson(json: string): unknown {
  return JSON.parse(json);
}

const data = parseJson('{"name": "Ashu"}');

// data.name; ❌ Error: object is of type 'unknown'

if (typeof data === "object" && data !== null && "name" in data) {
  console.log((data as { name: string }).name); // ✅ Safe
}
```

#### Never Type

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

**Use Cases:** Functions that never return, exhaustive checks, error handling.

#### Void Type

```typescript
function logMessage(msg: string): void {
  console.log(msg);
  // No return value
}
```

**Use Cases:** Functions that don't return values, event handlers, side effects.

### 12. Advanced Types

#### Mapped Types

```typescript
type Optional<T> = {
  [P in keyof T]?: T[P];
};

type User = {
  name: string,
  age: number
};

type PartialUser = Optional<User>;  // Results in { name?: string; age?: number; }

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
```



```ts
type Optional<T> = {
  [P in keyof T]?: T[P];
};
```

#### Explanation:

* `keyof T` → gets all keys of type `T`.
  For `User`, this is `"name" | "age"`.
* `[P in keyof T]` → loops through each property key of `T`.
* `?:` → makes that property **optional**.
* `T[P]` → means "the type of property `P` in `T`".

So, if `T = User`,

```ts
type User = {
  name: string;
  age: number;
};

type PartialUser = Optional<User>;
```

Expands into:

```ts
type PartialUser = {
  name?: string;
  age?: number;
};
```

👉 This is basically the same as TypeScript’s built-in `Partial<T>` utility type.

---

## 2. `Nullable<T>`

```ts
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
```

### Explanation:

* Again, looping through each property of `T`.
* Instead of making them optional, we allow each property to be `null` in addition to its original type.

For `User`,

```ts
type NullableUser = Nullable<User>;
```

Expands into:

```ts
type NullableUser = {
  name: string | null;
  age: number | null;
};
```


```ts
let user1: Optional<User> = {};  
// ✅ valid because both fields are optional

let user2: Nullable<User> = { name: null, age: 30 };  
// ✅ valid because null is allowed, but fields must exist
```


```ts
type User = {
  name: string;
  age: number;
};
```

---

## 1. `keyof T`

```ts
type Keys = keyof User;
```

* `keyof User` means **"all the keys of User as a union"**.
* For `User`, it is:

```ts
type Keys = "name" | "age";
```

So now we have a union of the property names.

---

## 2. `[P in keyof T]`

This is a **mapped type loop**.
Think of it like:

👉 For each property name `P` inside `"name" | "age"`, build a new object property.

Example:

```ts
type Copy<T> = {
  [P in keyof T]: T[P];
};
```

Now if we do:

```ts
type CopyUser = Copy<User>;
```

It expands like this:

1. Take `P = "name"` → property type is `T["name"]` → `string`.
2. Take `P = "age"` → property type is `T["age"]` → `number`.

So:

```ts
type CopyUser = {
  name: string;
  age: number;
};
```

It just reconstructs the same type.

---

## 3. `[P in keyof T]: T[P]`

Now let’s see what this means with modifications:

### Example A – Optional

```ts
type Optional<T> = {
  [P in keyof T]?: T[P];
};

type PartialUser = Optional<User>;
```

Expansion step by step:

* For `"name"` → `name?: string`
* For `"age"` → `age?: number`

Result:

```ts
type PartialUser = {
  name?: string;
  age?: number;
};
```

---

### Example B – Nullable

```ts
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type NullableUser = Nullable<User>;
```

Expansion step by step:

* For `"name"` → `name: string | null`
* For `"age"` → `age: number | null`

Result:

```ts
type NullableUser = {
  name: string | null;
  age: number | null;
};
```

---

✅ So:

* `keyof T` → list of property names (like `"name" | "age"`)
* `[P in keyof T]` → loop over each key
* `T[P]` → type of the property at key `P` (like `string` for `name`, `number` for `age`)

---

#### Conditional Types

```typescript
type ApiResponse<T> = T extends string
  ? { message: T }
  : { data: T };

type StringResponse = ApiResponse<string>; // { message: string }
type NumberResponse = ApiResponse<number>; // { data: number }
```

This says:

* If `T` is a `string` → use `{ message: T }`
* Otherwise → use `{ data: T }`

So it works like an **if-else** for types.

---

## 2. Step-by-Step Example

### Case 1 – `T = string`

```ts
type StringResponse = ApiResponse<string>;
```

Substitute `T = string`:

```ts
type StringResponse = string extends string
  ? { message: string }
  : { data: string };
```

Since `string extends string` ✅ true → choose first branch:

```ts
type StringResponse = { message: string };
```

---

### Case 2 – `T = number`

```ts
type NumberResponse = ApiResponse<number>;
```

Substitute `T = number`:

```ts
type NumberResponse = number extends string
  ? { message: number }
  : { data: number };
```

Since `number extends string` ❌ false → choose second branch:

```ts
type NumberResponse = { data: number };
```

---

## 3. Usage Example

```ts
let r1: StringResponse = { message: "Hello" }; // ✅ OK
let r2: NumberResponse = { data: 123 };        // ✅ OK

// ❌ Error: "data" not allowed here
let r3: StringResponse = { data: "oops" };
```

---

## 4. Analogy with JavaScript (if/else)

Think of it like:

```js
function apiResponse(value) {
  if (typeof value === "string") {
    return { message: value };
  } else {
    return { data: value };
  }
}
```

The **difference**: in TypeScript, this happens **at type level** (during compilation), not at runtime.

---

✅ So:

* `T extends string ? X : Y` is a **conditional type**.


#### Template Literal Types

```typescript
type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<"click">; // "onClick"

type HttpUrl = `http://${string}`;
type HttpsUrl = `https://${string}`;
```

## 1. Basic Idea

In JavaScript you can do:

```js
const name = "Click";
const eventName = `on${name}`; // "onClick"
```

Template literal types do the **same thing at the type level**.

---

## 2. Example 1 – EventName

```ts
type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<"click">; // "onClick"
```

### How it works:

* `T extends string` → ensures we only pass strings.
* \`on\${Capitalize<T>}\` → constructs a new string **type**:

  * Prefix `"on"`
  * Then **capitalize** the string `T`.

👉 If `T = "click"`, result = `"onClick"`.

---

## 3. Example 2 – HttpUrl and HttpsUrl

```ts
type HttpUrl = `http://${string}`;
type HttpsUrl = `https://${string}`;
```

### How it works:

* `${string}` means **any string can go here**.
* So:

  * `HttpUrl` = any string that starts with `"http://"`
  * `HttpsUrl` = any string that starts with `"https://"`

Examples:

```ts
let a: HttpUrl = "http://google.com";   // ✅ OK
let b: HttpsUrl = "https://openai.com"; // ✅ OK
let c: HttpUrl = "ftp://server.com";    // ❌ Error (must start with http://)
```

---

## 4. Better / Real-Life Examples 🚀

### (a) CSS Units

```ts
type CssLength = `${number}px` | `${number}em` | `${number}rem`;

let width: CssLength;

width = "100px";  // ✅ OK
width = "2em";    // ✅ OK
width = "20";     // ❌ Error, must have unit
```

---

### (b) API Routes

```ts
type UserApi = `/users/${number}`;
type PostApi = `/posts/${number}`;

let userUrl: UserApi = "/users/123";   // ✅
let postUrl: PostApi = "/posts/456";   // ✅
let invalid: UserApi = "/user/1";      // ❌ typo, does not match
```

---

### (c) Event System

```ts
type EventName<T extends string> = `on${Capitalize<T>}`;

type ButtonEvents = EventName<"click" | "hover" | "focus">;
// Result = "onClick" | "onHover" | "onFocus"

let event: ButtonEvents;

event = "onClick"; // ✅
event = "onHover"; // ✅
event = "click";   // ❌ Error
```

---

### (d) File Extensions

```ts
type FileExtension = `${string}.${"jpg" | "png" | "gif"}`;

let img: FileExtension;

img = "photo.jpg";   // ✅
img = "banner.png";  // ✅
img = "doc.pdf";     // ❌ Error
```

---

## ✅ Key Points

* Template literal types = **string concatenation at type level**.
* You can use:

  * `${string}`, `${number}`, `${boolean}`
  * Built-in helpers: `Uppercase<T>`, `Lowercase<T>`, `Capitalize<T>`, `Uncapitalize<T>`.
* Great for **strict typing** in APIs, routes, events, CSS, etc.



**Use Cases:** Advanced type manipulation, library development, complex type relationships.

## Type System Best Practices

This comprehensive type system enables TypeScript to provide excellent static analysis, IntelliSense support, and compile-time error detection while maintaining JavaScript's flexibility.

### Choose the Right Type

- Use **primitives** for simple values.
- Use **interfaces** for object contracts.
- Use **type aliases** for unions and complex types.
- Use **generics** for reusable components.
- Use **enums** for fixed sets of values.

### Type Safety Guidelines

- Avoid `any` - use `unknown` instead.
- Use union types instead of `any` for flexibility.
- Prefer interfaces over type aliases for objects.
- Use readonly for immutable data.
- Leverage utility types for transformations.
