// Question 1: Write a function that takes a string (sentence) and an array of strings (in this example dog_names) and check if one of the list members (dog names) is in the string (sentence). Return an array of the dog names found in the array. hint: filter, includes

function findDogNames(sentence, dogNames) {
  return dogNames.filter(name => sentence.includes(name));
}

var dogNames = ["Max","Fido","Gizmo","Nala"]

//Test Cases
let testString1 = "Hello, my dog is Max, and they have purple eyes!"
//Expect ['Max']

let testString2 = "My Dog is fast, her name is Tippi"
//Expect []

let testString3 = "Come here Fido and Gizmo come here"
//Expect['Fido','Gizmo']

// Question 2: Write a Function using map to convert an array of number from inches to feet

1 foot = 12 inches

const heightsInInches = [66, 64, 60, 52, 72, 80, 51]

// Question 3: Using the Ternary Operator and map create an array that adds is eating pizza to every name from the array tmnt that ends with o and add is being rude to any other name. Expect output is:

const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]

const result = tmnt.map(name =>
    name.endsWith("o")
    ? `${name} is eating pizza`
    : `${name} is being rude`    
);

console.log(result);
                       

// Question 4: Write an arrow function or regular function to find the max number in a list. Do not use the Math.max Function. The List will be all positive numbers. Expect output is 234125
// function getMaxNumber() {}
let findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]

const getMaxNumber = (list) => list.reduce((max, num) => (num > max ? num : max), 0);
console.log(getMaxNumber(findAMax));

// Question 5: At the end of the third Iteration (the third time the loop has ran) of this for Loop define the state of all the variables used in the cell

var bingo = "B-I-N-G-O"
var ognib = ""
for(let i=bingo.length-1; i>=0; i--){
    ognib+=(bingo[i])
  // print the i value during each iteration.
  console.log("i value is", i);
}
//bingo value is
console.log("bingo value is", bingo);
//ognib value is
console.log("ognib value is", ognib);


// Question 6: Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python. Paste a link hear to the 3 questions you completed
// Note: This is coming from Time Complexity HW when doing Python.

1. function filterList(l) {
    return l.filter(i => typeof i === 'number');
}

2. function validateHello(greetings) {
    const validHello = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
    for (let i = 0; i < validHello.length; i++) {
        if (greetings.toLowerCase().includes(validHello[i])) {
            return true;
        }
    }
    return false;
}

3. function flattenAndSort(array) {
    let flatArr = [];
    for (let subArr of array) {
        for (let num of subArr) {
            flatArr.push(num);
        }
    }
    return flatArr.sort((a, b) => a-b);
}
