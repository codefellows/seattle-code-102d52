// *** Data Types ***
// string --> surrounded with single or double quotation marks --> Example: 'words go in here'
// number --> no quotation marks --> Example: 42
// boolean --> true OR false 

//-----------------------------------------------------------------------------------------------------

// *** Declaring/Defining a variable ***
// let <-- creating a variable that can be changed
// const <-- constant, can NOT be changed

// assignment operator is the = sign, it gives value to the variable

// declaring a variable called myContainer AND assigning it the value of a string that says 'hello'
let myContainer = 'Hello';

// declaring a new variable called myOtherContainer AND assigning it the value of a string that says 'class'
let myOtherContainer = 'class';

// declaring a new variable called myName and giving it the value of "Kassie"
// the value of this variable can NOT be changed later
const myName = "Kassie"; 

//-----------------------------------------------------------------------------------------------------

// *** JavaScript built in commands ***

// console.log() <-- whatever is in the () will print to the developer console

let myAge = 34; // declare a variable and assign it the value 34
console.log(myAge); // prints the value of the variable myAge to the developer console in browser
myAge = 35; // re-assign the value of this variable to the number 35

// alert() <-- pops up an alert box with the message we 
alert("Hello everyone!"); // pop up box that says "Hello everyone!"

// prompt() <-- pops up a message to the user and gives them the ability to provide input

// document.write("I LIKE TURTLES") <-- use JavaScript to write content to your HTML document

// ask the user for input AND store it in a variable called userName
const userName = prompt("What is your name?"); 
// print that stored value to the console
console.log(userName);

// *** CONDITIONAL LOGIC ***

// if(this thing is true){do this} else if (this thing is true) {do this} else {do this}

// 
// if(this is true){                // check this condition first, is it true?
//   execute this code              // if yes, do this
// } else if (this thing is true){  // if the previous thing was false we check if THIS is true
//   execute this code              // if yes, do this
// } else {                         // otherwise, for literally anything else,
//   execute this code              // do this 
// }

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

document.write("I LIKE TURTLES");