//make avariable
let apple="apple";
let uppuercaseApple="APPLE";
let twenty=20;
let thirty=30;
let fruit=["apple","mango","orange","banana"];

//equality & inequality
console.log("is apple equal to an apple?");
console.log(apple==apple);

console.log("\nis apple not equalato an apple?");
console.log(apple!=apple);

//test using lower case function
console.log ("\nis APPLE is equale to apple after conversing to lowerCase?");
console.log(uppuercaseApple.toLowerCase()== apple);

console.log("\nis APPLE is not equal to apple after conversingto lowerCase?");
console.log(uppuercaseApple.toLowerCase()!= "apple");

//numerical test
//equality 
console.log("\nis twenty is equal to 20?");
console.log(twenty==20);
//inequality
console.log("\nis twenty is equal to 20?");
console .log(twenty!=20);
//greater then
console.log("\nis twenty is greater then 10");
console.log(twenty>10);
//less then
console.log("\n thirty is less then 20?");
console.log(thirty<twenty);
//greater than or equal to
console.log("\n twenty greater than or is equal to 15");
console .log( twenty>=15);
//less than or equal to
console.log("\n thirty less than or is equal to 10");
console.log( thirty<=10);
//test using and or operator
// using && (and)
console .log("ten is greater than 0 and ten is equal to 10");
console.log(10>0 && 10==10);

console.log("\n ten is less than 5 and ten is equal to 10");
console.log(10<5 && 10==10);
//using || (or)
console.log("\ntwenty is less than 50 or twenty is equal to 20");
console.log(20<50|| 20==20);

console.log("\nfifty is greater than 70 or twenty is not equal to 20");
console.log(50>70 || 20!=20);

//test whether an item is include a arry.
//include in array
console.log("\n  orange is include in fruit array");
console.log(fruit.includes("orange"));
//not include 
console.log("\n orange is not include in fruit array");
console. log(!fruit.includes("orange"));














