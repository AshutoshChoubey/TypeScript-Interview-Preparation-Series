# Complete TypeScript Type System Reference

TypeScript provides a comprehensive type system that enhances JavaScript with static type checking. Here's a structured breakdown of all available types, categorized systematically with syntax, examples, and use cases.

## **1. Primitive Types**

These are the basic building blocks representing single values in TypeScript.

### **String Type**

```typescript
let message: string = "Hello TypeScript";
let template: string = `Welcome ${message}`;
```

**Use Cases:** Text data, user inputs, API responses, template strings

### **Number Type**

```typescript
let count: number = 42;
let price: number = 99.99;
let binary: number = 0b1010;
let octal: number = 0o744;
let hex: number = 0xf00d;
```

**Use Cases:** Mathematical calculations, counters, prices, measurements

### **Boolean Type**

```typescript
let isActive: boolean = true;
let hasPermission: boolean = false;
```

**Use Cases:** Flags, conditional logic, form validation states

### **BigInt Type**

```typescript
let largeNumber: bigint = 9007199254740991n;
let anotherBig: bigint = BigInt(9007199254740991);
```

**Use Cases:** Large integer calculations, cryptographic operations, high-precision math

### **Symbol Type**

```typescript
let uniqueKey: symbol = Symbol("key");
let namedSymbol: symbol = Symbol.for("globalKey");
```

**Use Cases:** Unique object keys, private properties, constants that need uniqueness

### **Null and Undefined**

```typescript
let empty: null = null;
let notSet: undefined = undefined;
```

**Use Cases:** Representing absence of value, optional parameters, uninitialized state

## **2. Non-Primitive Types**

Complex types that can contain multiple values or represent more sophisticated structures.

### **Object Type**

```typescript
let person: object = { name: "John", age: 30 };
let config: { host: string; port: number } = { host: "localhost", port: 3000 };
```

**Use Cases:** Configuration objects, API payloads, complex data structures

### **Array Types**

```typescript
let numbers: number[] = [1, 2, 3, 4];
let strings: Array<string> = ["a", "b", "c"];
let mixed: (string | number)[] = [1, "two", 3];
```

**Use Cases:** Lists of data, collections, batch operations

### **Tuple Types**

```typescript
let coordinates: [number, number] = [10, 20];
let person: [string, number, boolean] = ["Alice", 25, true];
let namedTuple: [x: number, y: number] = [10, 20];
```

**Use Cases:** Fixed-length arrays, coordinate pairs, function return values, database records

### **Function Types**

```typescript
let add: (a: number, b: number) => number = (x, y) => x + y;
let greet: (name: string) => void = (n) => console.log(`Hello ${n}`);
```

**Use Cases:** Callback functions, event handlers, higher-order functions

## **3. Enumeration Types**

Named constants that improve code readability and maintainability.

### **Numeric Enums**

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

### **String Enums**

```typescript
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
```

### **Heterogeneous Enums**

```typescript
enum Mixed {
  No = 0,
  Yes = "YES"
}
```

**Use Cases:** Status codes, configuration options, API constants, state machines

## **4. Union Types**

Allow variables to hold one of several possible types.

### **Basic Union**

```typescript
let id: string | number = "abc123";
id = 42; // Valid

function printId(id: string | number): void {
  console.log(`ID: ${id}`);
}
```

### **Complex Union**

```typescript
type Status = "loading" | "success" | "error";
type ApiResponse =
  | { status: "success"; data: any }
  | { status: "error"; message: string }
  | { status: "loading" };
```

**Use Cases:** API responses, form states, flexible parameters, discriminated unions

## **5. Intersection Types**

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

**Use Cases:** Mixing multiple interfaces, extending types, composing complex objects

## **6. Interface Types**

Define contracts for object structures.

### **Basic Interface**

```typescript
interface User {
  readonly id: string;
  name: string;
  email: string;
  age?: number; // Optional property
}
```

### **Interface with Methods**

```typescript
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}
```

### **Interface Inheritance**

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}
```

### **Index Signatures**

```typescript
interface StringDictionary {
  [key: string]: string;
}

interface NumberArray {
  [index: number]: number;
}
```

**Use Cases:** API contracts, class blueprints, configuration schemas, type safety for objects

## **7. Generic Types**

Create reusable components that work with multiple types.

### **Generic Functions**

```typescript
function identity<T>(arg: T): T {
  return arg;
}

function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
```

### **Generic Interfaces**

```typescript
interface Container<T> {
  value: T;
  getValue(): T;
}

interface Pair<T, K> {
  first: T;
  second: K;
}
```

### **Generic Classes**

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

### **Generic Constraints**

```typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

**Use Cases:** Reusable components, type-safe collections, API wrappers, utility functions

## **8. Type Aliases**

Create custom names for complex types.

### **Basic Type Alias**

```typescript
type StringOrNumber = string | number;
type UserId = string;
type EventHandler = (event: Event) => void;
```

### **Complex Type Alias**

```typescript
type ApiResponse<T> = {
  success: boolean;
  data: T;
  error?: string;
  timestamp: Date;
};

type UserResponse = ApiResponse<User>;
```

**Use Cases:** Simplifying complex types, creating domain-specific types, improving readability

## **9. Literal Types**

Specify exact values rather than general types.

### **String Literals**

```typescript
type Theme = "light" | "dark" | "auto";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
```

### **Numeric Literals**

```typescript
type Dice = 1 | 2 | 3 | 4 | 5 | 6;
type PowerOfTwo = 2 | 4 | 8 | 16 | 32;
```

### **Boolean Literals**

```typescript
type Success = true;
type Failure = false;
```

**Use Cases:** Configuration options, API endpoints, strict value constraints, state machines

## **10. Utility Types**

Built-in TypeScript types for common transformations.

### **Object Manipulation**

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

### **Function Utilities**

```typescript
function getUser(): { id: string; name: string } {
  return { id: "1", name: "John" };
}

// Extract return type
type UserType = ReturnType<typeof getUser>;

// Extract parameter types
type GetUserParams = Parameters<typeof getUser>;
```

### **Advanced Utilities**

```typescript
// Create object type with specific keys and values
type StatusMap = Record<"pending" | "success" | "error", string>;

// Non-nullable type
type NonNullableString = NonNullable<string | null | undefined>;
```

**Use Cases:** API type transformations, form handling, data validation, type safety

## **11. Special Types**

### **Any Type**

```typescript
let anything: any = 42;
anything = "hello";
anything = true;
```

**Use Cases:** Migration from JavaScript, third-party libraries without types (avoid when possible)

### **Unknown Type**

```typescript
let userInput: unknown = getInput();

// Must check type before use
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}
```

**Use Cases:** Type-safe alternative to `any`, user input validation, API responses

### **Never Type**

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

**Use Cases:** Functions that never return, exhaustive checks, error handling

### **Void Type**

```typescript
function logMessage(msg: string): void {
  console.log(msg);
  // No return value
}
```

**Use Cases:** Functions that don't return values, event handlers, side effects

## **12. Advanced Types**

### **Mapped Types**

```typescript
type Optional<T> = {
  [P in keyof T]?: T[P];
};

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
```

### **Conditional Types**

```typescript
type ApiResponse<T> = T extends string
  ? { message: T }
  : { data: T };

type StringResponse = ApiResponse<string>; // { message: string }
type NumberResponse = ApiResponse<number>; // { data: number }
```

### **Template Literal Types**

```typescript
type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<"click">; // "onClick"

type HttpUrl = `http://${string}`;
type HttpsUrl = `https://${string}`;
```

**Use Cases:** Advanced type manipulation, library development, complex type relationships

## **Type System Best Practices**

### **Choose the Right Type**

- Use **primitives** for simple values
- Use **interfaces** for object contracts
- Use **type aliases** for unions and complex types
- Use **generics** for reusable components
- Use **enums** for fixed sets of values

### **Type Safety Guidelines**

- Avoid `any` - use `unknown` instead
- Use union types instead of `any` for flexibility
- Prefer interfaces over type aliases for objects
- Use readonly for immutable data
- Leverage utility types for transformations

This comprehensive type system enables TypeScript to provide excellent static analysis, IntelliSense support, and compile-time error detection while maintaining JavaScript's flexibility.
