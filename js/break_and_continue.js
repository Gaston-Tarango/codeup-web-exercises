 "use strict";
//  MY WAY which is wrong
//     let askForNumber = function () {
//         let userInput = prompt("Please enter an odd number between 1-50");
//         if (typeof userInput === "number" && !isNaN(Number(userInput))) {
//             return userInput;
//         } else {
//             return "The input you provided is not a number.";
//         }
//     };
// console.log(askForNumber());
// for (var i = 1; i <= 50; i++) {
//
//     if (i % 2 === 0) {
//
//         continue;
//     }
//
//     console.log('Here is an odd number: ' + i);
// }


 // Vivians way 2 different problems both correct
//problem 1
 do {
     var userNumber = Number(prompt("Pick an odd number between 1 and 50"));
     if (userNumber % 2 === 0){
         alert(userNumber + " is not odd, please pick again")
     } else if (userNumber < 1 || userNumber > 50) {
         alert(userNumber + " is not between 1 and 50, please pick again");
     } else if (isNaN(userNumber)){
         alert(userNumber + " is not a number, please pick again");
     } else {
         alert("congrats you picked the right number");
         break;
     }
 } while (true);

// problem 2
 for (var i = 1; i <= 50; i += 2){
     if (i === userNumber){
         console.log("yikes! Skipping number: " + i);
         continue;
     }

     console.log("Here is an odd number: " + i);
 }