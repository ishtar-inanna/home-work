//Task 2
let myLastName = "Mykhailova";

alert(myLastName);

//Task 6
let myBrothersfirstName, myBrotherslastName, myBrothersGroup, myBrothersYear;

myBrothersfirstName = 'Slavik';
myBrotherslastName = 'Usachenko';
myBrothersGroup = 'HG1220';
myBrothersYear = 1990;
myBrotherIsMarried = true;

console.log(typeof myBrothersfirstName);
console.log(typeof myBrotherslastName);
console.log(typeof myBrothersGroup);
console.log(typeof myBrothersYear);
console.log(typeof myBrotherIsMarried);


let yourOpinion = null;
let myReasonOfLife;

console.log(yourOpinion, myReasonOfLife);


//Task 7
let usersLogin = prompt('Please, write you login');
console.log(`Your login is ${usersLogin}`);

let usersMail = prompt('Please, write you mail');
console.log(`Your mail is ${usersMail}`);

let usersPassword = prompt('Please, write you password');
console.log(`Your mail is ${usersPassword}`);

//Task 8
let secondsInMinute = 60;
let minutesInHour = 60;
let secondsInHour = secondsInMinute * minutesInHour;

console.log(`There are ${secondsInHour} seconds in an Hour`);

let hoursInDay = 24;
let secondsInDay = secondsInHour * hoursInDay;

console.log(`There are ${secondsInDay} seconds in a Day`);

let daysInMonth = 30;
let secondsInMonth = secondsInDay * daysInMonth;

console.log(`There are ${secondsInMonth} seconds in a Month`);




let x = 1;
let y = 2;

let res1 =  x + "2"// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 =  "true" + 2 // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 =  (x < y) // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"


y = "y"
let res4 = x / y// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

