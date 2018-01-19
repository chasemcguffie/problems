
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

var saidNum = [];

for (l = 1; l < 101; l++) {
    if (l % 3 === 0 && l % 5 === 0) {
        saidNum.pop(l);
        saidNum.push('covalence');
    } else if 
        (i % 5 === 0) {
        saidNum.pop(l);
        saidNum.push('valence');
    } else {
        (i % 3 === 0) 
        saidNum.pop(l);
        saidNum.push('cove');
    }
}
console.log(saidNum)