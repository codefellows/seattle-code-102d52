myFunction();
anotherFunction();
console.log(myFunction);


function myFunction(){
  console.log("Hello from inside the function");
}

// FUNCTION EXPRESSION
let anotherFunction = function(){
  console.log("Hello from inside another function");
}

anotherFunction = "Hello, I break functions";

