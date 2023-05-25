// LOOPS!

// for loop / for statement
// for (initial value; condition to evaluate; increment/decrement){
//   code to execute each time; 
// }


// this loop will start with 'i' being 0
// the loop will run as long as 'i' is less than 5
// each time the loop executes, it will console log whatever 'i' is times 10
// THEN we will increment 'i' by 1 and check the condition again
for (let i = 0; i < 5; i++){
  console.log(i*10);
}

// while loop / while statement
// while (this condition evaluates to true){
//  execute this code;
// }

// while 'i' is less than 5, console.log the value of 'i' and then increment it by 1
while(i < 5){
  console.log(i);
  i += 1;
}

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

function guessColor(){
  let guess = prompt("What is my fav color?");
  while (guess != 'yellow'){
    guess = prompt("Incorrect. Guess again.");
  }
  document.write("You guessed my favorite color is yellow!");
}

function rateMyPage(){
  let rating = prompt("How many stars would you rate my page?");
  for (let i = 0; i < rating; i++){
    document.write('<img src="star.jpeg" />');
  }
}