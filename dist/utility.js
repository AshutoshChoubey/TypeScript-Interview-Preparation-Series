"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateUser(user, updates) {
    console.log(`Updating user ${user} with`, updates);
}
updateUser("1", { name: "ashutosh" });
function saveUser(user) {
    console.log("Saving user", user);
}
saveUser({ id: 1, name: "ashutosh", email: "avb@test.com", password: "12345" });
function getPublicProfile(user) {
    return {
        id: user.id,
        name: user.name,
        email: user.email
    };
}
const userProfile = getPublicProfile({ id: 1, name: "ashutosh", password: "12345" });
console.log(userProfile);
function displayUser(user) {
    const { password, ...rest } = user;
    console.log("User Details:", password, rest);
    return rest;
}
const userWithoutPassword = displayUser({ id: 1, name: "ashutosh", email: "test@qwe.com", password: "12345" });
console.log(userWithoutPassword);
function PrintUser(user) {
    console.log("User Info:", user);
    // user.email = "";
    // user.name = "new name"; // ❌ Error: Cannot assign to 'name' because it is a read-only property.
}
const immutableUser = { id: 1, name: "ashutosh", email: "test@test.com", password: "12345" };
PrintUser(immutableUser);
const statusMessages = {
    success: "Operation was successful",
    error: "There was an error",
    loading: "Loading..."
};
console.log(statusMessages);
function printText(text) {
    console.log("Text:", text);
}
printText("Hello, World!");
let a = 123;
let b = "abc";
// let c:T2=undefined;
let d = true;
let u1 = { id: 1, name: "ashutosh" };
let u2 = null;
let u3 = undefined;
let u4 = "abc";
let u5 = 123;
let su1 = { id: 1, name: "ashutosh" };
//   let su2:safeUser=null; // ❌ Error: Type 'null'
//   let su3:safeUser=undefined; // ❌ Error: Type 'undefined 
//   let u6:User1=true; // ❌ Error: Type 'true'
let su4 = "abc";
let su5 = 123;
//# sourceMappingURL=utility.js.map