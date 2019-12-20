
// ##Basic Review

// 1. What is an array in Javascript?
// Arrays in JavaScript. In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.

// 2. What is an object in Javascript?
// Objects in Javascript. ... Loosely speaking, objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, respectively, in the context of an object.

// 3. What is the difference between an array and an object?
// Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values.

// 4. What is a property? A method?
//A method is a function associated with an object, or, simply put, a method is a property of an object that is a function. Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object.

// 5. Why are loops useful when dealing with arrays?
//The for loop is probably the most common and well known type of loop in any programming language. For can be used to iterate through the elements of an array: For can also be used to perform a fixed number of iterations: By default the increment is one.


// 6. What is an index?
//An array is an ordered set of values that you refer to with a name and an index. For example, you could have an array called emp that contains employees' names indexed by their numerical employee number. ... JavaScript does not have an explicit array data type

// 7. What is the difference between dot and bracket notation?
//The difference is in how x is interpreted. When using a dot, the part after the dot must be a valid variable name, and it directly names the property. When using square brackets, the expression between the brackets is evaluated to get the property name. Whereas value


// ## Practice Problems
// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.

//steps
//1. write function filterNumbers(inputArray)
//2. since returning array, need "bucket" to store the numbers
//3. we need to loop to get to check each individual item(for each or for loop)
//4. we need to check each item to see if its a number --> typeof item === "number"
//5. if item is a number we need to push it to our bucket
//6. sort () on the bucket array
//7. return the bucket

function filterNumbers(inputArray){
    var numberBucket = [];

    inputArray.forEach(function (item) {
        if (typeof item === "number"){
            numberBucket.push(item)
        }
    })
    return numberBucket.sort(function (a, b) {
        return a - b;
    })
}

console.log(filterNumbers(["fred", true, 5, 3])) //[3, 5]

// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.

//Steps
//1. write function getOlder(dogs)
//2. loop through array to get each individual dog --> dog.age +=1
//3. return dogs


//Example Input:

var dogList = [
{
name: "Chompers",
breed: "Pug",
age: 7
},
{
name: "Freddy",
breed: "Lab",
age: 4
},
{
name: "Mr. Pig",
breed: "Mastif",
age: 10
}
];

function getOlder(dogs) {
    dogs.forEach(function (dog) {
        dog.age += 1;
    })
    return dogs
}
console.log(getOlder(dogList));

// Answer for Example
// [
// {
// name: "Chompers",
// breed: "Pug",
// age: 8
// },
// {
// name: "Freddy",
// breed: "Lab",
// age: 5
// },
// {
// name: "Mr. Pig",
// breed: "Mastif",
// age: 11
// }
// ];


// 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false
// Steps
//1. function washCars(cars)
//2. for each loop --> for each car set isDirty = false;
//3. return cars

// Example input
var carList = [
{
make: 'Volvo',
color: 'red',
year: 1996,
isDirty: true
},
{
make: 'Toyota',
color: 'black',
year: 2004,
isDirty: false
},
{
make: 'Ford',
color: 'white',
year: 2007,
isDirty: true
}
]

function washCars(cars) {
    cars.forEach(function (car){
        car.isDirty = false;
    })
    return cars
}
console.log(washCars(carList));

// Answer for Example output:
// [
// {
// make: 'Volvo',
// color: 'red',
// year: 1996,
// isDirty: false // changed to false
// },
// {
// make: 'Toyota',
// color: 'black',
// year: 2004,
// isDirty: false // stays the same
// },
// {
// make: 'Ford',
// color: 'white',
// year: 2007,
// isDirty: false // changed to false
// }
// ]


// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.


//Example Input:
var userList = [
{
isAdmin: true,
email: 'user1@email.com'
},
{
isAdmin: true,
email: 'user2@email.com'
},
{
isAdmin: false,
email: 'user3@email.com'
}
];

//Steps for PART 1
//1. write function adminList(users)
//2. var totalAdmin = 0;
//3. loop through all the users --> for each user -->
// if(user.isAdmin){
//   totalAdmin += 1;
//   }
//4. return totalAdminCount

function adminList(users) {
    var totalAdminCount = 0;

    users.forEach(function (user){
        if (user.isAdmin){
            totalAdminCount += 1;
        }
    })
    return totalAdminCount;
}

// Steps for Part 2
//1. function adminList(users)
//2. adminEmailBucket = []
//3. loop through users --> for each user if isAdmin push email to the bucket
//4. return adminEmailBucket

// function adminList(users){
//     var adminEmailBucket = [];
//
//     users.forEach(function (user) {
//         if (user.isAdmin){
//             adminEmailBucket.push(user.email)
//         }
//     })
//     return adminEmailBucket
// }


// Steps for Part 3
//1. function adminList(users)
//2. adminBucket = []
//3. loop through users --> for each user if isAdmin push email to the bucket
//4. return adminBucket

function adminList(users){
    var adminBucket = [];

    users.forEach(function (user) {
        if (user.isAdmin){
            adminBucket.push(user)
        }
    })
    return adminBucket
}
console.log(adminList(userList));


// Example Output (before refactor): 2


// Example Output (after 1st refactor):
// [
// 'user1@email.com',
// 'user2@email.com'
// ]


// Example Output (after 2nd refactor):
// [
// {
// isAdmin: true,
// email: 'user1@email.com'
// },
// {
// isAdmin: true,
// email: 'user2@email.com'
// }
// ]



// 5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

//Steps
//1. function makeSandwichObjects(breads, fillings)
//1.5 create sandwichBucket
//2. make a loop ---> for loop [i]
//3. we need to create a sandwich object
//4. sandwichBucket


var breadList  = [
"white",
"wheat",
"rhy",
"white"
];

var fillingList = [
"pb&j",
"ham",
"cheese steak",
"tuna"
];

// one way it can be done
// function makeSandwichObjects(breads, fillings) {
//     var sandwichBucket = [];
//
//     for(var i = 0; i<breads.length; i++){
//         var sandwichObject = {
//             bread: breads[i],
//             fillings: fillings[i]
//         }
//         sandwichBucket.push(sandwichObject);
//     }
//     return sandwichBucket;
// }
// console.log(makeSandwichObjects(breadList, fillingList));


//second way
function makeSandwichObjects(breads, fillings) {
    var sandwichBucket = [];

    for(var i = 0; i<breads.length; i++){
        sandwichBucket.push({
            bread: breads[i],
            fillings: fillings[i]
        });
    }
    return sandwichBucket;
}

console.log(makeSandwichObjects(breadList, fillingList));




// makeSandwichObjects(breads, fillings) // example call to the function

// Example Output:
// [
// {
// bread: "white",
// filling: "pb&j"
// },
// {
// bread: "wheat",
// filling: "ham"
// },
// {
// bread: "rhy",
// filling: "cheese steak"
// },
// {
// bread: "white",
// filling: "tuna"
// }
// ]


// TODO Write a function named keepYellow that accepts an array of strings and returns an array with all the strings that are equal to "yellow"

//Steps
//1 function keepYellow(strings)
//2 var colorbucket = []
// for each / loop through strings array ---> for each string check to see if its === yellow
// if it is equal to "yellow push string to bucket
// return colorBucket


function keepYellow(inputArray){
    var colorBucket = [];

    inputArray.forEach(function (color) {
        if (color === "yellow"){
            colorBucket.push(color)
        }
    })
    return colorBucket;

}


console.log(keepYellow(["yellow", "red", "blue", "yellow", "black", "brown", "yellow"]));