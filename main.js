// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
// sports = ['soccer', 'baseball', 'football', 'swimming']

//the push method will return the length of the object it is called on
//total = 4


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];
// A:
function longestString(strings) {
  var longestWord = strings[0];
  for (var i = 1; i < strings.length; i++) {
    if (strings[i].length > longestWord.length) {
      longestWord = strings[i];
    }
  }
  console.log(longestWord);
}

console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:
function smallestNumber(numbers) {
  var tinyNumber = numbers[0];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < tinyNumber) {
      tinyNumber = numbers[i];
    }
  }
  console.log(smallestNumber);
  return smallestNumber();
}


console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:
function getEvens(numbers) {
  var evenArray = [];
  for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenArray.push(numbers[i]);
      }

    }
  return evenArray;
  }


console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});


// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:

function arrayReverser(numbers) {
  var reverseArray = [];
  for(var i = numbers.length - 1; i <= 0; i-- ){
    reverseArray.push(numbers[i]);
  }
  return reverseArray;
}

console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});
var numbers = [1,12,4,18,9,7,11,3,101,5,6];

// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:
function sumArrayOfNumbers(numbers){
  var arraySum = 0;
  for (var i = 0; i < numbers.length; i++) {
    // arraySum = arraySum + numbers[i];
    arraySum += numbers[i];

  }
  return arraySum;
}

console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:
function numbersOver10(numbers){
  var over10 = [];
  for (var i = 0; i < numbers.length; i++) {
    if(numbers[i] > 10){
      over10.push(numbers[i]);
    }
  }
  return over10;
}
console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:

function numbersOverX(array, number){
  var numbersArray = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i] > number){
      numbersArray.push(array[i]);
    }
  }
  return numbersArray;
}


console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:
// [[],[]];
function joinArrays(array){
  var totalArray = [];
  for (var i = 0; i < array.length; i++) {
    // iterate twice if you have two array
    // array[i] is an array; you need to iterate over each item in the array
    for (var j = 0; j < array[i].length; j++) {
      // j represents the individual item inside array[i]
      // var thisArray = [[1,2,3], [4,5,6]];
      // how would you return 5? thisArray[1][1]
     totalArray.push(array[i][j])
    }
  }
  return totalArray;
}


console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = ['Will','JavaScript']

var instructorOne = instructors[4][0];
// instructorOne = 'Dan'

var instructorTwo = instructors[0][1];
// instructorTwo = 'JavaScript'

var instructorThree = instructors[2][0];
// instructorThree = 'Brit'
