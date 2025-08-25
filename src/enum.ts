enum Status{
Pending,
InProgress,
Completed,
Failed
}

let satatusCode: Status = Status.Pending;

console.log(Status.Pending); // Output: 0
console.log(Status.InProgress); // Output: 1
console.log(Status.Completed); // Output: 2
console.log(Status.Failed); // Output: 3
console.log(Status[0]); // Output: "Pending"
console.log(Status[1]); // Output: "InProgress"
console.log(Status[2]); // Output: "Completed"

enum Priority{
Low = 1,
Medium=2,
High = 5,
}

console.log(Priority.Low); // Output: 1
console.log(Priority.Medium); // Output: 2
console.log(Priority.High); // Output: 5
console.log(Priority[1]); // Output: "Low"
console.log(Priority[2]); // Output: "Medium"
console.log(Priority[5]); // Output: "High" 

enum Direction{
Up="UP",
Down="DOWN",
Left="LEFT",
Right="RIGHT"
}
console.log(Direction.Up); // Output: "UP"
console.log(Direction.Down); // Output: "DOWN"
console.log(Direction.Left); // Output: "LEFT"
console.log(Direction.Right); // Output: "RIGHT"

enum mixed{
No=0,Yes="YES", default = "DEFAULT"
}

console.log(mixed.No); // Output: 0
console.log(mixed.Yes); // Output: "YES"

