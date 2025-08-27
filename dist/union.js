"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id = 101;
id = "202";
id = 303;
let taskStatus = "Pending";
taskStatus = "InProgress";
// taskStatus = "Completed1"; // Error: Type '"Completed1"' is not assignable to type 'Status'.
taskStatus = "Failed";
function handleApiResponse(response) {
    if (response.status === "success") {
        console.log("Data:", response.data);
    }
    else if (response.status === "error") {
        console.log("Error:", response.error);
    }
    else {
        console.log("Loading...");
    }
}
// type staff = Person & Employee;
let emp = {
    name: "ashutosh",
    age: 20,
    employeeId: 123,
    position: "developer"
};
let user1 = {
    id: 1,
    name: "ashutosh̉",
    email: "abc@gmail.com̉̉",
    isAdmin: true,
    otherDetails: {
        address: "xyz",
        phone: 1234567890
    }
};
let admin1 = {
    id: 2,
    name: "admin",
    email: "abc@abc.com",
    adminLevel: 1,
    permissions: ["read", "write", "delete"],
    addUser: function (user) {
        console.log("User added:", user.name);
    },
    removeUser: function (userId) {
        console.log("User removed with id:", userId);
    }
};
let myArray = ["apple", "banana", "orange"];
let myDict = {
    length: 3,
    "one": 1,
    "two": 2,
};
let strDict = {
    name: "ashutosh",
    "city": "true",
};
const user = {
    name: "Ashutosh",
    city: "Patna",
    country: "India",
};
console.log(user["name"]); // ✅ "Ashutosh"
console.log(user["city"]); // ✅ "Patna"
user["age"] = "20"; // ❌ Error: number not assignable to string
const fibonacci = [0, 1, 1, 2, 3, 5, 8];
//# sourceMappingURL=union.js.map