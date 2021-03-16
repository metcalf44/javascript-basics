const getNthElement = (index, array) => {
  // your code here
   

};

const arrayToCSVString = array => {
  
  return array.toString()
};

const csvStringToArray = string => {
  
  return string.split(',');
};

const addToArray = (element, array) => {

  array.push(element)
};

const addToArray2 = (element, array) => {
   
  return array.concat([element]);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1)
};

const numbersToStrings = numbers => {
  return numbers.toString().split(',');
};

const uppercaseWordsInArray = strings => {
  const upperCase = strings.map(strings => strings.toUpperCase());
  return upperCase
};

const reverseWordsInArray = strings => {
    const reverse = strings.map(string => string.split('').reverse().join(''));
    return reverse
};

const onlyEven = numbers => {
    return numbers.filter(numbers => numbers % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // const lowerCase = strings.toLowerCase();
  const vowels = ('a', 'e', 'i', 'o', 'u');
  const startsWith = strings.;
  return startsWith

  
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((a, b) => a + b, 0)
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
