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
//# sourceMappingURL=utility.js.map