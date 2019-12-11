"use strict";
// DANIEL LESSON CODE DOESNT WORK FIGURE OUT LATER


var truck = {
    make: "Chevy",
    model: "Silverado",
    year: 2017,
    isTitled: true,
    options: ["4 wheel drive", "heated seats", "leather interior"],
    goGoGo: function (key) {
        if (key === "key") {
            console.log("vroom");
        } else {
            console.log("...");
        }
}}
console.log("car was made in " + truck.year);
console.log("truck has these options:")
truck.options.forEach(function (options) {
    console.log(options)
})


// var make = "Chevy",
// var model = "Silverado",
// var year = 2017,
// var isTitled = true,
// var goGoGo = function (key) {
//     if (key == "correct") {
//         console.log("vroom");
//     } else {
//         console.log("...");
//     }
// }

