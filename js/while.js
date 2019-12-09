 "use strict";

        // let num = 2;
        // while (num <= 65536) {
        //     console.log(num);
        //     num *= 2;
        //
        // }
 // vivians way of solving
 // var x = 2;
 // while (x <=65536){
 //     console.log(x);
 //     x *= 2;
 // }

        //1. generate total amount of cones - happens one time --> all cones
        //2. customer wants to buy x amount of cones
        //3. check to see if have amount available
        //4. if not sorry message
        //5. if do happy message
        //6. subtract the amount of cones sold from allcones
        //7. repeat until i dont have any cones left

//
//  let allCones = Math.floor(Math.random() * 50) + 50;
//
//
//  do {
//      // this is how many cones bought by each customer
//      var conesPurchased = Math.floor(Math.random() * 5) + 1;
//
//      // checks if enough cones to sell
//      if (conesPurchased > allCones){
//          // sad path dont have enough cones
//          var sadConesMessage = "cannot sell you " + conesPurchased + " i only have " + allCones + "....";
//          console.log(sadConesMessage);
//      } else {
//          // happy path do have enough cones
//          allCones -= conesPurchased;
//          var happyConesMessage = conesPurchased + " cone sold ... " + allCones + " cones to go";
//          console.log(happyConesMessage);
//      }
//  }while (allCones > 0);
//
// console.log("yay i sold all the cones");


        // let allCones = Math.floor(Math.random() * 50) + 50;
        // let boughtCones;
        // console.log("You have " + allCones + " cones at the start of the day.");
        // do {
        //     boughtCones = Math.floor(Math.random() * 5) + 1;
        //     if (allCones<boughtCones) {
        //         continue;
        //     }
        //     allCones -= boughtCones;
        //     console.log(`Sold ${boughtCones} cone(s). Remaining total at ${allCones}.`);
        //     if (allCones === 0) {
        //         console.log("Yay! I sold them all!");
        //     }
        // } while (allCones !== 0);




