
//Number one
var oranges = [];
var divisibleBy3and5 = [];
var divisibleBy5 = [];
var divisibleBy3 = [];

for (i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        divisibleBy3and5.push(i);
    } else if 
        (i % 5 === 0) {
        divisibleBy5.push(i);
    } else {
        (i % 3 === 0) 
        divisibleBy3.push(i);
    }
}
console.log(divisibleBy3);
console.log(divisibleBy5);
console.log(divisibleBy3and5);

//Number two

var stackOne = [];
var stackTwo = [];
var stackThree = [];

for (j = 1; j < 101; j++) {
    stackOne.push(j)
}
for (j = 1; j < 101; j++) {
    stackTwo.push(j)
}
for (j = 1; j < 101; j++) {
    stackThree.push(j)
}
var bigStack = stackOne.concat(stackTwo, stackThree);

console.log(bigStack);
console.log("Process can be described as wack")

//Third Problem

//this generates random array
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (-20 - 40 + 1)) + 20;
}
var randomNumbers = [];
for (k = 0; k < 11; k++) 
{
    randomNumbers.push(getRandomInt());
}

//sort array ascending order
function ascendingOrder() {
    randomNumbers.sort(function(a, b){return b-a});
}
console.log(randomNumbers)
ascendingOrder()
console.log("Highest number: " + randomNumbers[0])

//sort array descending order
function descendingOrder() {
    randomNumbers.sort(function(a, b){return a-b});
}
console.log(randomNumbers)
descendingOrder()
console.log("Lowest number: " + randomNumbers[0])

//Fourth problem


for (l = 1; l < 101; l++) {
    if (l % 3 === 0 && l % 5 === 0) {
        console.log('covalence');
    } else if 
        (l % 5 === 0) {
        console.log('valence');
    } else {
        (l % 3 === 0) 
        console.log('cove');
    }
}

//Fifth problem ????????????

var documents = ['Lucy','Mike', 'Luke', 'James', 'John Doe', 'Dave', 'Sarah', 'Natalie']


for (let k = 0; k < documents.length; k++) {
    if (documents[k] === "John Doe") {
        console.log(documents[k]);
    }
}

//Sixth Problem

var reverseDocuments = [1, 2, 3, 4, 5, 6];
console.log(reverseDocuments)
reverseDocuments.reverse();
console.log(reverseDocuments);

//Seventh Problem

var cdCollection = [3, 4, "maroon 5", 6, 7, 8, 9, 10];

console.log(cdCollection);

var index = cdCollection.indexOf("maroon 5");

cdCollection.splice(index, 1);

console.log(cdCollection)

//Eigth Problem

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var cards = []

for (var m = 0; m < 101; m++) {
    let m = getRandomArbitrary(2000, 2010);
    cards.push(m);
}

console.log(cards)
console.log(cards[0])

for (var n = 0; n < 101; n++) {
    if (cards[n] === 2007) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

//Ninth Problem

var book = [];
var newBook = [];
for (var o = 0; o < 101; o++) {
    book.push(o);
}
console.log(book)

function isOdd(n) {
    return Math.abs(n % 2) == 1;
}

for (let o = 0; o < 101; o++) {
    if (isOdd(book[o]) === true) {
        newBook.push(book[o]);
    }
}
console.log(newBook);

// Tenth Problem

var sentences = ["this is a sentence", "this is also a sentence", "lastly, this is also a sentence"];
var newSentences = [];
console.log(sentences)
for (let p = 0; p < sentences.length; p++) {
    console.log(sentences[p].toUpperCase());
}

//Eleventh Problem

var canOne = "ben";
var canTwo = "bartholoptomitusidius";
var canThree = "dave";
var canFour = "carol";
const canFive = "draa'knar, destroyer of worlds";
var candidates = [canOne, canTwo, canThree, canFour, canFive];
var goodCandidates = [];

console.log(candidates);

if (canOne.length > 15) {
    goodCandidates.push(canOne)
}
if (canTwo.length > 15) {
    goodCandidates.push(canTwo)
}
if (canThree.length > 15) {
    goodCandidates.push(canThree)
}
if (canFour.length > 15) {
    goodCandidates.push(canFour)
}
if (canFive.length > 15) {
    goodCandidates.push(canFive)
}
console.log(goodCandidates);

//Twelfth Problem

var orders = []

for (let m = 0; m < 15; m++) {
    let m = getRandomArbitrary(1, 4);
    if (m === 1) {
        orders.push("Hotdog")
    } else {
        if (m === 2) {
            orders.push("Hamburger")
        } else {
            if (m === 3) {
                orders.push("French fries")
            } else {
                if (m === 4)
                    orders.push("Drink")
            }
        }
    }
}

console.log(orders)

for (let n = 0; n < 15; n++) {
    if (orders[n] === "French fries") {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

//Thirteenth Problem

function reverse_a_number(n) {
    n = n + "";
    return n.split("").reverse().join("");
}

let d = getRandomArbitrary(1, 999);
console.log(d);
console.log(reverse_a_number(d));