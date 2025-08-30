type user ={
    name:string
    age:number
}
type partialUser= Partial<user>

type Optional<T>={
  [P in keyof T] ?: T[P]
}
type OPtionalUser= Optional<user>

type Nullable<T> ={
    [P in keyof T] : T[P] | null
}

type user1={
name:string | null
age: number | null
}

type ApiResponse<T> = T extends string ? { message:T } : { data: T}
type stringResponse = ApiResponse<string> // { message: string}
type NumberResonse = ApiResponse<number> // { data: number }

let r1: stringResponse= {
    message:"123"
}

let r2: NumberResonse= {
    data:123
}

type EventName<T extends string>=`on${Capitalize<T>}`;
type ClickEvent= EventName<"click"> // 'onClick'
let e1: ClickEvent = "onClick"

type Httpurl= `https://${string}`;
let url: Httpurl = "https://example.com"

type HttpsUrl = `https://${string}`;
let url2: HttpsUrl = "https://example.com";