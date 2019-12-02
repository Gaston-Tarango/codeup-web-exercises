"use strict";
console.log("Hello from our external js file!");

alert("Welcome to my Website!");

var userInput = prompt("Please enter your favorite color?");
console.log(userInput);
alert("Great! " + userInput + " is my favorite color too!");

var moviedays= 3;

var lilmer= prompt("How many days did you rent Little Mermaid?" );
var brobear = prompt("How many days did you rent Brother Bear?");
var herc = prompt("How many days did you rent Hercules?");
alert("You rented movies at the rate of $3 a day for $" + ((parseInt(lilmer) + parseInt(brobear)+ parseInt(herc)) * (moviedays)));


var totalHrs =

var googleHours =(prompt("Working for Google pays $400/hr. How many hours of work was done at Google?"));
var fbHours =(prompt("Working for FB pays $350/hr. How many hours of work was done at Facebook?"));
var amazonHours =(prompt("Working for Amazon pays $380/hr. How many hours of work was done at Amazon?"));
alert("Congrats Looks like your going home with: $" + ((parseInt(googleHours) + parseInt(fbHours) + parseInt(amazonHours))));


var movieDay = Number(prompt("how much the daily rental rate?"));
var mermDays = Number(prompt("How many days are you renting lil mermaid"));
var brotBear = Number(prompt("How many days are you renting bro bear"));
var hecules = Number(prompt("How many days are you renting Hercules"));
var totalCost = (mermDays + brotBear + hecules) * movieDay;
var alertMessage = "You owe $: " + totalCost;
alert(alertMessage);

var googRate = Number(prompt("What is Your Google Rate?"));
var fbRate = Number(prompt("What is Your FB Rate?"));
var amRate = Number(prompt("What is Your Amazon Rate?"));

var googleTime = Number(prompt("How many hours for Google"));
var fbTime = Number(prompt("How many hours for FB"));
var amTime = Number(prompt("How many hours for Amazon"));

var totalPay = (googRate * googleTime) + (amRate * amTime) + (fbRate * fbTime);

var alertMessage = "Your total pay is: $" + totalPay;
alert(alertMessage);

// 3.3

var classIsNotFull = confirm("Class is not full");
var noScheduleConflicts = confirm("schedules do not conflict");

var studentEnrolled = classIsNotFull && noScheduleConflicts;
console.log(studentEnrolled);

alert("Student can enroll" + studentEnrolled);

//3.4

var numberOfItems = Number(prompt("How many items for checkout?"));
var offerValid = confirm("Is the offer valid?");
var isPremium = confirm("are you a premium member?");

var discountApplied = offerValid && (isPremium || numberOfItems > 2);
alert("Product discount status: " + discountApplied);
