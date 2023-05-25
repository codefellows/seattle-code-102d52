let x = 5;
let y = 20;
let z = x + y;

// STRING CONCATENATION
let message = "The value of z is " + z; // string plus variable equals string
console.log(message);
console.log(5+5); // number plus number equals number --> 10
console.log(5 + "5"); // number plus string equals string --> "55"
console.log("Hello" + " " +"world"); //string plus string plus string equals string --> hello world

// ARITHMETIC OPERATORS
x = x+5; // x is assigned the value of what it was before plus 5 --> evaluates to 10
x += 5; // x is assigned the value of what it was before plus 5 --> evaluates to 15

console.log("the value of x is: " + x) // prints our message to the console with the value of x
x -= 3; // x is assigned the value of what it was before minus 3 --> evaluates to 12
console.log("the value of x after x -= 3 is: " + x) // prints our message to the console with value of x
x++; // short-hand for adding 1
x--; // short-hand for subtracting 1

console.log(5 + 5 + "hello world"); // does the math first, then adds the string --> 10hello world

// COMPARISON OPERATORS
console.log(5 <= 5); // is 5 less than OR equal to 5 ? TRUE

// LOGICAL OPERATORS
// AND --> && --> both must be true for the expression to evaluate to true
console.log(5 < 10 && 10 > 1); 
//           true  && true // are BOTH true? TRUE

// OR --> || --> one OR the other must be true for the expression to evaluate to true
console.log(5>10 || 10>1); 
//         false || true // is one OR the other true? TRUE

// NOT --> ! --> basically the opposite
console.log(!true); // what is NOT true? FALSE

let password = "1234";
console.log(password == "password");
//           "1234"  == "password" // false
console.log(password != "password");
//          "1234"   != "password" // true

// -----------------------------

// built in JS functions (or methods);
// alert("Our message goes here");
// console.log();
// document.write();
// prompt();

// Declaring or defining a function
// function name(optional parameters){code you want to happen when this function runs;}

// function name(parameters){
//   code you want to happen when this function runs;
// }

function addTwoNumbers(num1, num2){ // DECLARING/DEFINING <-- MAKING THE RULE/COMMAND
  // let number1 = 5;
  // let number2 = 42;
  let sum = num1 + num2;
  console.log(sum);
  return sum;
}

// // INVOKE or CALL our function <-- USING IT

// let myNewNumber = addTwoNumbers(17, 258);
// let myOtherNumber = addTwoNumbers(1, 45678);

// addTwoNumbers(myNewNumber, myOtherNumber);


function greeting(){
  alert("Hello everyone!");
} 

function getName(){
  const userName = prompt("What is your name?"); 
  console.log(userName);
  return userName;
}

function specialMessage(userName){
  if (userName == "Kassie"){
    document.write("Hiya teach!");
  } else if (userName == "David") {
    document.write("Hi " + userName + "!");
  }else if (userName == "Luke") {
    document.write("Hi " + userName + "!");
  } else if (userName == "Adnan") {
    document.write("Hi " + userName + "!");
  } else if (userName == "Dexter") {
    document.write("Hi " + userName + "!");
  } else if (userName == "Tonya") {
    document.write("Hi " + userName + "!");
  }
  else {
    document.write("Welcome!");
  }
}

function turtle(){
  document.write("I LIKE TURTLES");
}
