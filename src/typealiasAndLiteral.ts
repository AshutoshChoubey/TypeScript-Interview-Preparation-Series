type stringOrNumber = string | number;
type UserId= string;
type EventHanderler = (event: Event)=>void

type ApiResponse<T>= {
    status: "success";
    data: T;
}
type User={
    id:UserId;
    name:string;
    email:string;
}
 type User2={
    name:string;
    email:string;
 }
type UserResponse = ApiResponse<User>
type UserResponse2 = ApiResponse<User2>

let userResponse:UserResponse = {   
    status:"success",
    data:{
        id:"123",
        name:"ashutosh",
        email:"as@test.com"
    }
}

let userResponse2:UserResponse2 = {
    status:"success",
    data:{
        name:"ashutosh",
        email:"abc@abc.com"
    }
}

type Theme = "dark" | "light" | "system";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type diceRoll = 1 | 2 | 3 | 4 | 5 | 6;
type PowerofTwo = 2 | 4 | 8 | 16 | 32 | 64 | 128;

type success =true;
type failure = false;