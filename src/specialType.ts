let anything :any= 42
anything= "hello"
anything= true
anything = {}
anything = []
console.log(anything.toUpperCase());

let something: unknown = 42;
something = "hello";
something = true;
something = {};
something = [];   
something = "hello world";  

let str: string;
// str = something;
if (typeof something === "string") {
    str = something;
    console.log(something.toUpperCase());
}

function anyFunction(): any {
    return "This could be anything";
}

function parseJson(json: string): unknown {
    return JSON.parse(json);
}
const data = parseJson('{"name":"Alice"}');
if (typeof data === "object") {
    console.log((data as { name: string }).name);
    console.log("It's an object");
}

function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
    }
}   

function processValue(value: string | number) :void {
    if (typeof value === "string") {
        console.log("String value:", value.toUpperCase());
    } else if (typeof value === "number") {
        console.log("Number value:", value.toFixed(2));
    } else {
        throwError("Unexpected type");
    }
}
