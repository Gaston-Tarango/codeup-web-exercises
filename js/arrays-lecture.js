///DANIEL LESSON GO OVER AFTER CLASS DIDNT LEARN ANYTHING
// var pets = [];
// pets[0] = "Toby";
// pets[1] = "Princess";
// pets[2] = "Samson";
// pets[3] = "jill";
// pets[4] = "Bubbles";
// pets[5] = "Malu";
//
//
// for (var i = 0;i < pets.length;i++){
//     console.log(pets[i]);
// }
//

var fruit = ["apple", "orange", "banana"];
// fruit[fruit.length] = "pear"
console.log(fruit);
fruit.push("pear");
fruit.push("pineapple");
fruit.push("grape");
fruit.push("mango");
fruit.unshift("strawberry");
// console.log(fruit.indexOf("pineapple"))
// console.log(fruit[4])
// console.log(fruit.pop())
// console.log(fruit);

var fruits1thru3 = fruit.slice(0,3);
console.log(fruits1thru3);
console.log(fruit);


//     DOESNT WORK
// var sentence = "The quick brown fox jumped over the lazy dog";
// var word = sentence.split(" ");
// word.forEach(function (word) {
//     var firstLetter = word.split().unshift()
// })


//          DOES WORK
// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//     }
//     // Directly return the joined string
//     return splitStr.join(' ');
// }
// console.log(titleCase("the quick brown fox jumped over the lazy dog"));


//            DOES WORK
// var team = ["chiefs", "chargers", "raiders", "broncos"];
// console.log(team);
// team.push("ravens");
// console.log(team);
// team.pop()
// console.log(team);