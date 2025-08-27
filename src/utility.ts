interface User {
    id:number | string;
    name:string;
    email?:string;
    password:string;
}
type PartialUser = Partial<User>;
function updateUser(user:string,updates:PartialUser):void{
   console.log(`Updating user ${user} with`,updates);
}   
updateUser("1",{name:"ashutosh"});

type  RequiredUser = Required<User>;
function saveUser(user:RequiredUser):void{
    console.log("Saving user",user);
}
saveUser({id:1,name:"ashutosh",email:"avb@test.com",password:"12345"});

type PublicUser = Pick<User,"id" | "name"> & {email:string | undefined};
function getPublicProfile(user:User):PublicUser{
    return {
        id:user.id,
        name:user.name,
        email:user.email
    }
}
const userProfile = getPublicProfile({id:1,name:"ashutosh",password:"12345"});
console.log(userProfile);

type UserWithoutPassword = Omit<User,"password">;
function displayUser(user:User):UserWithoutPassword{
   const {password,...rest} = user;
   console.log("User Details:",password,rest);
   return rest;
}
const userWithoutPassword = displayUser({id:1,name:"ashutosh",email:"test@qwe.com",password:"12345"});
console.log(userWithoutPassword);

type ImmutableUser = Readonly<User>;
function PrintUser(user:ImmutableUser):void{
    console.log("User Info:",user);
    // user.email = "";
    // user.name = "new name"; // ❌ Error: Cannot assign to 'name' because it is a read-only property.
}
const immutableUser:ImmutableUser = {id:1,name:"ashutosh",email:"test@test.com",password:"12345"};
PrintUser(immutableUser);

// record<K,T>
type status="success" | "error" | "loading"
type statusMap = Record<status,string>;
const statusMessages:statusMap = {
    success:"Operation was successful",
    error:"There was an error",
    loading:"Loading..."
};
console.log(statusMessages);

type nonNullableString = NonNullable<string | null | undefined>;
function printText(text:nonNullableString):void{
    console.log("Text:",text);
}
printText("Hello, World!");
// printText(null); // ❌ Error: Argument of type 'null' is not assignable to parameter of type 'string'.
// printText(undefined); // ❌ Error: Argument of

type unionofTypes = string | number | null | undefined | boolean;
type T2=NonNullable<unionofTypes>;
let a:T2=123;
let b:T2="abc";
// let c:T2=undefined;
let d:T2=true

type User1 = 
  | { id: number; name: string } 
  | null 
  | undefined 
  | string 
  | number;
  let u1:User1={id:1,name:"ashutosh"};
  let u2:User1=null;
  let u3:User1=undefined;
  let u4:User1="abc";
  let u5:User1=123;

  type safeUser = NonNullable<User1>;
  let su1:safeUser={id:1,name:"ashutosh"};
//   let su2:safeUser=null; // ❌ Error: Type 'null'
//   let su3:safeUser=undefined; // ❌ Error: Type 'undefined 
//   let u6:User1=true; // ❌ Error: Type 'true'
    let su4:safeUser="abc";
    let su5:safeUser=123;   