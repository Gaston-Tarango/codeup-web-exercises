 "use strict";

    let askForNumber = function () {
        let userInput = prompt("Please enter an odd number between 1-50");
        if (typeof userInput === "number" && !isNaN(Number(userInput))) {
            return userInput;
        } else {
            return "The input you provided is not a number.";
        }
    };

for (var i = 1; i <= 50; i++) {

    if (i % 2 === 0) {

        continue;
    }

    console.log('Here is an odd number: ' + i);
}