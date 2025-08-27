"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Completed"] = 2] = "Completed";
    Status[Status["Failed"] = 3] = "Failed";
})(Status || (Status = {}));
let satatusCode = Status.Pending;
console.log(Status.Pending); // Output: 0
console.log(Status.InProgress); // Output: 1
console.log(Status.Completed); // Output: 2
console.log(Status.Failed); // Output: 3
console.log(Status[0]); // Output: "Pending"
console.log(Status[1]); // Output: "InProgress"
console.log(Status[2]); // Output: "Completed"
var Priority;
(function (Priority) {
    Priority[Priority["Low"] = 1] = "Low";
    Priority[Priority["Medium"] = 2] = "Medium";
    Priority[Priority["High"] = 5] = "High";
})(Priority || (Priority = {}));
console.log(Priority.Low); // Output: 1
console.log(Priority.Medium); // Output: 2
console.log(Priority.High); // Output: 5
console.log(Priority[1]); // Output: "Low"
console.log(Priority[2]); // Output: "Medium"
console.log(Priority[5]); // Output: "High" 
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.Up); // Output: "UP"
console.log(Direction.Down); // Output: "DOWN"
console.log(Direction.Left); // Output: "LEFT"
console.log(Direction.Right); // Output: "RIGHT"
var mixed;
(function (mixed) {
    mixed[mixed["No"] = 0] = "No";
    mixed["Yes"] = "YES";
    mixed["default"] = "DEFAULT";
})(mixed || (mixed = {}));
console.log(mixed.No); // Output: 0
console.log(mixed.Yes); // Output: "YES"
//# sourceMappingURL=enum.js.map