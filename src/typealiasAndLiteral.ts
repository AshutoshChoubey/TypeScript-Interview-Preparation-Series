type stringOrNumber = string | number;
let id: stringOrNumber;
type EventHandler = (event: string) => void;

type ApiResponse<TYPE>={
    sucess:boolean;
    data:TYPE;
    error?:string;
    timestamp?:number;
}

type UserResponse = ApiResponse<{
    id:number;
    name:string;
    email:string;
}>  

type Theme = "light" | "dark" | "system";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type Dice = 1 | 2 | 3 | 4 | 5 | 6;
type CardinalDirection = "North" | "East" | "South" | "West";
type BooleanLiteral = true | false;