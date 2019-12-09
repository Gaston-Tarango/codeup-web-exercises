(function () {
    "use strict";

    let askForNumber = function () {
        let userInput = prompt("Please enter a number between 1-50");
        if (typeof userInput === "number" && !isNaN(Number(userInput))) {
            return userInput;
        } else {
            return "The input you provided is not a number.";
        }
    };
    // console.log(askForNumber());
    let userInput = window.prompt("Please enter a number between 1-50");
    console.log(typeof (userInput));
    console.log(userInput);
    userInput = Number(userInput);
    console.log(typeof (userInput));
    console.log(userInput);
    let x = "123";
    console.log(Number(x) + Number(x));
})();