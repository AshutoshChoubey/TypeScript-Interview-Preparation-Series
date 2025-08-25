let id : string | number = 101;
id = "202";
id = 303;

type Status = "Pending" | "InProgress" | "Completed" | "Failed";
let taskStatus: Status = "Pending";
taskStatus = "InProgress";
// taskStatus = "Completed1"; // Error: Type '"Completed1"' is not assignable to type 'Status'.
taskStatus = "Failed";
type ApiResponse = 
| { status: "success"; data: string }
| { status: "error"; error: string }
| { status: "loading" };

function handleApiResponse(response: ApiResponse) {
    if (response.status === "success") {
        console.log("Data:", response.data);
    } else if (response.status === "error") {
        console.log("Error:", response.error);
    } else {
        console.log("Loading...");
    }
}

type Person={
    name:string;
    age:number;
    address?:string; // optional property
}
type Employee = {
    employeeId:number;
    position:string;
}   

type staff = Person & Employee;
// type staff = Person & Employee;

let emp:staff = {
    name:"ashutosh",
    age:20,
    employeeId:123,
    position:"developer"
}

// basic interface

interface User{
    id:number | string;
    name:string;
    email:string;
    isAdmin?:boolean; // optional property
}

interface User{
    id:number | string;
    name:string;
    email:string;
    otherDetails?:{
        address?:string;
        phone?:string | number;
    }
}

let user1:User = {
    id:1,
    name:"ashutosh̉",
    email:"abc@gmail.com̉̉",
    isAdmin:true,
    otherDetails:{
        address:"xyz",
        phone:1234567890    }
}

interface Admin extends User{
    adminLevel:number;
    permissions:string[];
    addUser:(user:User)=>void;
    removeUser:(userId:number | string)=>void;
}   

// index signature in interface
interface StringArray{
    [index:number]:string;
}
let myArray:StringArray = ["apple","banana","orange"];
 interface NumberDictionary{
    [index:string]:number;
    length:number; // length property must be a number
    // name:string; // Error: Property 'name' of type 'string' is not assignable to string index type 'number'.
 }
 let myDict:NumberDictionary = {
    length:3,
    "one":1,
    "two":2, 
 }
 interface StringDictionary{
    [index:string]:string;
}
let strDict:StringDictionary = {
    "name":"ashutosh",
    "city":"xyz",
}

const user: StringDictionary = {
  name: "Ashutosh",
  city: "Patna",
  country: "India",
};

console.log(user["name"]); // ✅ "Ashutosh"
console.log(user["city"]); // ✅ "Patna"
user["age"] = "20"; // ❌ Error: number not assignable to string
interface NumberArray {
  [index: number]: number;
}

const fibonacci: NumberArray = [0, 1, 1, 2, 3, 5, 8];