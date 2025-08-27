function indentify<T>(arg:T):T{
    return arg;
}

let num = indentify<number>(123)
let str = indentify<string>("123")
console.log(num,str);

function pair<T,Utype>(first:T,second:Utype):[T,Utype]{
    return [first,second];
}
let p1 = pair<number,string>(1,"ashutosh");
let p2 = pair<boolean,number>(true,123);
console.log(p1,p2);

interface Container<T>{
    value:T;
    getValue:()=>T
}
const stringContainer:Container<string> = {
    value:"Hello, Generics!",
    getValue: function() {
        return this.value;
    }
}
console.log(stringContainer.getValue());

interface Pair<L,M>{
    first:L;
    second:M;
}
const numberStringPair:Pair<number,string> = {
    first:1,
    second:"one"
}
const stringBooleanPair:Pair<string,boolean> = {
    first:"isAdmin",
    second:true
} 
console.log(stringBooleanPair);
console.log(numberStringPair);

class Stack<T>{
    private  item:T[] = [];
    push(element:T){
        this.item.push(element);
    }
    pop():T | undefined{
        return this.item.pop();
    }
}

const numberStack = new Stack<number>();
numberStack.push(123);
const  stringStack = new Stack<string>();
stringStack.push("hello");
const booleanStack = new Stack<boolean>();
booleanStack.push(true);
interface longWise{
    length:number;
}
function logLength<T extends longWise>(arg:T):T{
    console.log("Length is:",arg.length);
    return arg
}
logLength("Hello");
logLength([1,2,3,4]);
logLength({length:10});
// logLength(42)
