// let a = 5;
// let b = 2;
// // console.log(a + b);
// // console.log("a + b =", a + b);
// let c = a + b;
// console.log("a=", a, "& b=", b);
// console.log("a + b =", c);
// console.log("a-b=", a - b);
// console.log("a*b=", a * b);
// console.log("a/b=", a / b);
// console.log("a%b=", a % b);
// console.log("a**b=", a ** b);
//Airthmetic operator

// let a = 5;
// let b = 3;
// let c = a + b;
// console.log("a + b =", a + b);
// console.log(c);
//  unary operator

// let a = 5;
// let b = 2;
// a += 4;
// console.log("a=", a);

//comparision operators
// let a = 5;
// let b = 6;
// console.log("a===b", a === b);
// console.log("a!=b", a != b);
// console.log("a>b", a !== b);

//logical operators
// let a = 6;
// let b = 5;
// let cond1 = a > b;
// //logical operator
// let a = 6;
// let b = 6;
// // let cond1 = a > b;
// // let cond2 = a === 5;
// //logical and
// // console.log("cond1 && cond2=", cond1 && cond2);

// //logical or
// // console.log("cond1 || cond2", cond1 || cond2);
// // console.log("cond1 ! cond2", !(cond1 < cond2);
// console.log("!(6<6)", !(a === b));

// conditional statement

// let age = 15;
// if (age > 16) {
//   console.log("you can vote");
// } else {
//   console.log("you cannot vote");
// }

// let age = 18;
// let mode = "dark";
// let color;
// if (mode == "dark") {
//   color = "black";
// }

// if (mode == "light") {
//   color = "white";
// }

// console.log(color);

//if else statement
// let mode = "dark";
// let color;
// if (mode == "white") {
//   color = "black";
// } else {
//   color = "white";
// }
// console.log(color);
// let age = 25;
// let canDrive;
// if (age < 18) {
//   console.log("He can drive");
// } else {
//   console.log("You need to be eligible to drive so after 18 only");
// }

//odd or even
// let num = 10;
// if (num % 2 === 0) {
//   console.log(num, "even");
// } else {
//   console.log(num, "odd");
// }

// //syntax rules
// //else if statement
// let age = 20;
// if (age < 31) {
//   console.log(age, "You cannot walk alone");
// } else if (age === 31) {
//   console.log(age, "You can walk alone in nights");
// } else {
//   console.log(age, "You need to stay at home at night");
// }
// let mode = "dark";
// let color;

// if (mode === "dark") {
//   color = "black";
// } else if (mode == "blue") {
//   color = "blue";
// } else {
//   color = "red";
// }
// console.log(color);

//conditional statement
// let age = 10;
// let result = age >= 18 ? console.log("adult") : console.log("not adult");
// let num = prompt("Enter a number");

// if (num % 5 === 0) {
//   console.log(num, "is multiple of 5");
// } else {
//   console.log(num, "is not multiple of 5");
// }
// let studentScore = 2;
// if (studentScore >= 80 && studentScore <= 100) {
//   console.log(studentScore, "Grade A");
// } else if (studentScore >= 70 && studentScore <= 89) {
//   console.log(studentScore, "GradeB");
// } else if (studentScore >= 60 && studentScore <= 69) {
//   console.log(studentScore, "GradeB");
// } else if (studentScore >= 50 && studentScore <= 59) {
//   console.log(studentScore, "GradeB");
// } else if (studentScore >= 0 && studentScore <= 49) {
//   console.log(studentScore, "Grade F");
// }
// console.log("Apna college");
// console.log("Apna college");
// console.log("Apna college");
// console.log("Apna college");
// console.log("Apna college");

//loop to print 5

// for (let count = 1; count <= 5; count++) {
//   console.log("Apna college");
// }

// console.log("Loop has ended");

// //calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log("sum =", sum);

//calculate sum of 1 to 100
// let sum = 0;
// let n = 100;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }

// console.log("sum=", sum);
// console.log("loop has ended");
// for (let i = 0; i <= 5; i++) {
//   console.log("i=", i);
// }
// // let i = 1;
// console.log(i);
// let fullNAme = prompt("Enter Your Full Name");
// let username = "@" + fullNAme + fullNAme.length;

// console.log(username);
// for (let i = 1; i <= 5; i++) {
//   console.log("apna college");
// }

// print 1 to 5
// for (let count = 1; count <= 5; count++) {
//   console.log("apna college");
// }

//calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }

// console.log("sum=", sum);
// console.log("loop has ended");
//while loop
// let i = 1;
// while (i <= 5) {
//   console.log("My name is Bivek");
//   i++;
// }

// do while loop

// let i = 20;
// do {
//   console.log("aapna college");
//   i++;
// } while (i <= 10);

//for of loop

// let str = "Apna college";
// for (let i of str) {
//   //iterator and characters
//   console.log(i);
// }

// let str = "Javascript";
// let size = 0;

// for (let i of str) {
//   console.log("i=", i);
//   size++;
// }
// console.log("string size=", size);

//for in loop
// let student = {
//   name: "Bivek",
//   age: 20,
//   cgpa: 3.4,
//   isPass: true,
// };
// for (let key in student) {
//   console.log("key=", key, "value=", student["key"]);
// }

// print all the even number from 0 to 100
// let number = ;
// for (let num = 0; num <= 100; num++) {
//   //printing all the even number
//   if (num % 2 !== 0) {
//     console.log("num=", num);
//   }
// }

//practice question 2

let gameNum = 25;
let userNum = Number(prompt("Guess the game number:"));

while (userNum !== gameNum) {
  userNum = prompt(" you enter wrong number Guess the game number again :");
}
console.log("you enter the right number you win the game");
