"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
//
// if (isAdmin){
//     //show admin navbar
//     //showAdminNavbar()  <-- function
// }
//
// //TODO Together: Send a 20% off coupon if its users birthday
//
// if (isBirthday) {
//     //send the 20% coupon
//     //sendBirthdayEmail() <-- function
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
// var isRainy = true;
//
// if (isRainy === true) {
//     alert("its raining!");
// }
//
// if (isRainy){
//     alert("its raining!");
// }

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.


// var itemCost = 100;
// var currentBalance = 200;
//
// if (itemCost <= currentBalance){
//     alert("You have enough money!");
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
// var numberOfLives = 0;
// if (numberOfLives === 0){
//     alert("Sorry, game over")
// }
//

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

//  var isSnowy = true;
//
//  if (isSnowy === true) {
//      alert("its snowing!");
// }
//
//  var weather = "snowing";
//
// if(weather === "snowing")
//     alert("its snowing");

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// var numberInput = 20;
// if (numberInput > 10){
//     alert("number greater than 10")
// }
//

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

// var isAdmin = true;
//
// if (isAdmin){
//     //show admin navbar
//     alert("user is admin")
// } else {
//     //show regular navbar
//     alert("user not admin")
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else alert "have a nice day!"

// var isRainy = true;
//
// if (isRainy === true) {
//     alert("its raining!");
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var numberOfLives = 0;
// if (numberOfLives === 0){
//    alert("Sorry, game over")
// } else {
//     alert("Next Level!")
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var weather = snowing;
//
// if (weather === snowing) {
//     alert("its snowing!");
// } else {
//     alert("Check back later for more details!")
// }

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var numberInput = 20;
//
// if(numberInput > 10){
//     alert("Number greater than 10")
// } else {
//     alert("number less than 10")
// }


//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!. 

// function checkIfGameIsOver(numberOfLives){
//     if (numberOfLives === 0) {
//         alert("Sorry, game over");
//     } else {
//         alert("Next Level!");
//     }
// }


// function checkIfGameIsOver(numberOfLives){
//     var returnMessage;
//     if (numberOfLives === 0){
//         returnMessage = "sorry game over";
//     } else {
//         returnMessage = "next level"
//     }
//     return returnMessage;
// }
//
// console.log(checkIfGameIsOver(0));


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

    
    
// SHOULD WE DELETE STUFF EXAMPLE
// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
// console.log("The value of the confirm is: " + weShouldDeleteStuff)
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("delete Everything");
// } else {
//     alert("Operation Canceled!");
// }


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

// var weather = "snowing";
//
// if(weather === "snowing"){
//     alert("snowing");
// } else if (weather === "raining"){
//     alert("raining");
// } else if (weather=== "sunny"){
//     alert("sunny");
// } else {
//     alert("Have a nice day")
// }


//TODO Together: refactor the above statement as a function


// function checkWeather(weather) {
//     if(weather === "snowing"){
//         return "snowing";
//     } else if (weather === "raining"){
//         return "raining";
//     } else if (weather === "sunny"){
//         return "sunny";
//     } else {
//         return "Have a nice day"
//     }
//
//
// }


// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

// function checkTrafficLight(trafficLights) {
//     if (trafficLights === "green") {
//         return "your good keep going";
//     } else if (trafficLights === "yellow") {
//         return "Floor it";
//     } else if(trafficLights === "red") {
//         return "stop"
//     }else {
//         return "proceed with caution";
//     }
// }
//
// console.log(checkTrafficLight("yellow"));
//


// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.


// var userAge = 15;
// var hasPermit = true;
//
// if(userAge < 15){
//     alert("Better start walking")
// } else {
//     if (userAge === 15){
//         alert("you can have a permit!");
//     } else if (userAge >= 16 && hasPermit){
//         alert("you can have a liscense");
//     } else if(userAge >= 16 && !hasPermit){
//         alert("get a permit")
//     }else {
//         alert("Please see front desk!");
//     }
// }
//
//


// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);

//
// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message);


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;
//
// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!

// var weather = "sunny";
// var weatherMessage = (weather === "rainy") ? "Its Raining" : "Its Sunny";
//
// console.log(weatherMessage);


// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

// var weather = "rainy";
//
// switch (weather) {
//     case "rainy":
//         alert("its raining");
//         break;
//     case "sunny":
//         alert("its sunny");
//         break;
//     case "snow":
//         alert("its snowing");
//         break;
//     default:
//         alert("have a nice day!");
//         break;
// }




//TODO: Rewrite the intersection function from earlier as a switch statement.

// function checkTrafficLight(trafficLights) {
//      if (trafficLights === "green") {
//          return "your good keep going";
//      } else if (trafficLights === "yellow") {
//          return "Floor it";
//      } else if(trafficLights === "red") {
//          return "stop"
//      }else {
//         return "proceed with caution";
//      }
//  }
//
//  console.log(checkTrafficLight("yellow"));

// function checkTrafficLight(trafficLight) {
// var colorMessage;
//
// switch (trafficLight) {
//     case "green":
//         colorMessage("keep going");
//         break;
//     case "yellow":
//         colorMessage("floor it");
//         break;
//     case "red":
//         colorMessage("stop");
//         break;
// }
//
// return colorMessage;
// console.log(checkTrafficLight("yellow"));

// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

// "use strict";
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * if what the user enters is not a number, use an alert to tell them that, and
//  * do *not* display any of the above information.
//  *
//  * Can you refactor your code to use functions?
//  */
//
// /* (WRITE OUT PSEUDO CODE TO HELP SOLVE PROBLEMS)
//     1. I need a confirm to ask the user if they want to enter a number. (if they don't enter #, skip down to final 'else').
//     2. ((nested)) if they click confirm (we need a conditional) ask the user for a number (prompt)
//     3. if this is a number or not.
//     4. if number, even odd, number + 100, neg/pos
//     5. if not, tell them it's not.
// */
//
// function numberStuff() {
//     var numbers = confirm("Would you like to enter a number?");
//     if (numbers === true) {
//         var typedNumber = parseInt(prompt("Please enter a number:"));
//         console.log("The user's number: " + typedNumber);
//         var isNumber = (!isNaN(typedNumber));
//         console.log("The user typed an actual number: " + isNumber);
//         if (isNumber) {
//             if (typedNumber % 2 === 0) {
//                 alert("That number is even!");
//             } else {
//                 alert("That number is odd!");
//             }
//             alert("Your number, plus one hundred, is " + (parseInt(typedNumber) + 100));
//             if (typedNumber > 0) {
//                 alert("Your number is positive");
//             } else {
//                 alert("Your number is negative");
//             }
//             if (isNaN(typedNumber)) {
//                 alert("That wasn't a number, gosh.")
//             }
//         } else {
//             alert("That's not a number.");
//         }
//     } else {
//         alert("gosh.");
//     }
// }
// numberStuff();
//
//
//
//
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined above, if the color passed is not
//  * one of the ones defined above, return a message that says so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
//
// function analyzeColor(color) {
//     if (color === "blue") {
//         return "Wow, that's blue!"
//     } else if (color === "red") {
//         return "Wow, that's red!"
//     } else if (color === "green") {
//         return "Wow, that's green!"
//     } else if (color === "orange") {
//         return "Yep, that's orange."
//     } else if (color === "yellow") {
//         return "Huh. Yellow!"
//     } else {
//         return "This doesn't fit within the confines of my understanding."
//     }
// }
//
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color everytime the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message everytime you refresh the page
//  */
// console.log(analyzeColor(randomColor));
//
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
//
// function colorPicker () {
//     var returnMessage;
//     switch (randomColor) {
//         case (randomColor === "blue"):
//             returnMessage = "Wow,that's blue!";
//             break;
//         case (randomColor === "red"):
//             returnMessage = "Wow, taht's red!";
//             break;
//         case (randomColor === "green"):
//             returnMessage = "Wow, that's green!";
//             break;
//         case (randomColor === "orange"):
//             returnMessage = "Yep, that's orange.";
//             break;
//         case (randomColor === "yellow"):
//             returnMessage = "yellow yellow yellow!";
//             break;
//         default:
//             returnMessage = "This doesn't fit within the confines of my understanding.";
//             break;
//     }
//     return returnMessage;
// }
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
// var colorPrompt  = prompt("What color should I type?");
// var newColor = analyzeColor(colorPrompt);
// alert(newColor);
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
// function calculateTotal(luckyNumber, totalBill) {
//     var discountRate = 0;
//     if (luckyNumber === 1) {
//         discountRate = .1;
//     }
//     else if (luckyNumber === 2) {
//         discountRate = .25;
//     }
//     else if (luckyNumber === 3) {
//         discountRate = .35;
//     }
//     else if (luckyNumber === 4) {
//         discountRate = .5;
//     }
//     else if (luckyNumber === 5) {
//         return "It's all free!!!!";
//     }
//     else {
//         return totalBill;
//     }
//     return (totalBill - (totalBill * discountRate));
// }
//
// (calculateTotal(4, 35));
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  //  */
// // Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// var totalBill = parseFloat(prompt("How much was your total bill?"));
// var realTotal = calculateTotal(luckyNumber, totalBill);
// alert("Your lucky number is " + luckyNumber + "Your price before discount was " + totalBill + "Your new, better-looking, discounted price is now " + realTotal);
