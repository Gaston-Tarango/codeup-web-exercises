// (function () {
//     "use strict";
//
//         let num = 2;
//         while (num <= 65536) {
//             console.log(num);
//             num *= 2;
//
//         }
//
//
//
//         let allCones = Math.floor(Math.random() * 50) + 50;
//         let boughtCones;
//         console.log("You have " + allCones + " cones at the start of the day.");
//         do {
//             boughtCones = Math.floor(Math.random() * 5) + 1;
//             if (allCones<boughtCones) {
//                 continue;
//             }
//             allCones -= boughtCones;
//             console.log(`Sold ${boughtCones} cone(s). Remaining total at ${allCones}.`);
//             if (allCones === 0) {
//                 console.log("Yay! I sold them all!");
//             }
//         } while (allCones !== 0);
//
//
//
// })();
