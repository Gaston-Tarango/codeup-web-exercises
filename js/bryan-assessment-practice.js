//the following functions will be useful for solving more complicated functions! These were taken from previous exercises! You will also notice that I use some concepts from es6, although it is not absolutely necessary, it usually results in simpler and/or more eloquent functions.

// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.

function isNegative(num) {
    return num < 0;
}

// Write a function named `isTen` that accepts a number and returns a boolean

function isTen(num) {
    return num === 10;
}

// Write a function named `double` that accepts a number and returns the number
// doubled.

function double(num) {
    return (num * 2);
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// write a function named remove3s that accepts and array of numbers and returns an array with all all of the same numbers except for 3

function remove3s(arr) {
    let bucket = [];
    arr.forEach(function (num) {
        if (num !==3) {
            bucket.push(num);
        }
    })
    return bucket
}

console.log(remove3s([1, 3, 3, 3, 3, 3, 4, 5, 6, 7, 7]));

// write a function named sumAll that returns the sum of all numbers in an array

function sumAll(arr) {
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            arr[i] = parseFloat(arr[i]);
            total += arr[i];
        }
        return total;
}

console.log(sumAll([1, 3, 3]));

// once we have the sum of all numbers in an array we can use it for further math problems.


// write a function named countEvens that accepts an array of nuyms and returns the number of even numbers in the array.

function countEvens(arr) {
        var evenCount = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evenCount += 1;
            }
        }
        return evenCount
}
console.log(countEvens([1, 1, 2, 2, 2]));


// Write a function named totalSales that accepts an array of employee objects. Each object has a 'name' property and a 'sale' property. Return the total sales

function totalSales(arr) {
    var totalSales = 0;
    for (var i = 0; i < arr.length; i++) {
        var empSales = parseFloat(arr[i].sales);
        totalSales += empSales;
    }
    return totalSales
}


//write a function named AsAndBs that accepts a string and returns a count of how many a's and b's is contains

function AsAndBs(str) {
        var letterCount = 0;
        var string = str.toString();
        string = string.toLowerCase();
        for (var i = 0; i <= string.length - 1; i++) {
            if (string.charAt(i) === "a" || string.charAt(i) === "b") {
                letterCount += 1;
                console.log(string);
            }
        }
        return letterCount;
}

console.log(AsAndBs("banana"))


// Write a function called StringLength that returns the length of a string, if the input is not a string, return false

function StringLength(str) {
        return str.length;
}

console.log(StringLength("doggo"))

//write a function that accepts a string and returns an object with the original string, the length of the string, as well as the number of a's and b's

function analyzeWord(str) {
    var word = {};
    word.word = str;
    word.numberOfLetters = StringLength(str);
    word.numberOfAsAndBs = AsAndBs(str);
    return word
}

console.log(analyzeWord("dog"))


// Write a function thataccepts an array or strings and returns an array of those words analyzaed similarly

function analyzeAllWords(arr) {
    var analyzeWords = [];

    for (var i = 0; i < arr.length; i++) {
        analyzeWords.push(analyzeWord(arr[i]));
    }
    return analyzeWords
}
console.log(analyzeAllWords(['dog', 'banana', 'mississippi']));