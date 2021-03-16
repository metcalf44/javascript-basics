const negate = a => {
  return (!a)
};

const both = (a, b) => {
  return (a && b)
};

const either = (a, b) => {
  return (a || b)
};

const none = (a, b) => {
  if (a || b === true) {
    return(false)
  } else {
    return(true)
  }
};

const one = (a, b) => {
  if (a && b === true) {
    return(false) 
  } else if (a || b === true) {
    return(true)
  } else {
    return(false)
  }
};

const truthiness = a => {
 if (a === true) {
   return true
 } else {
   return false
 }
};

const isEqual = (a, b) => {
  return (a === b)
};

const isGreaterThan = (a, b) => {
  return (a > b)
};

const isLessThanOrEqualTo = (a, b) => {
  return (a <= b)
};

const isOdd = a => {
  if (a % 2 === 1) {
    return(true) 
  } else {
    return(false)
  }
};

const isEven = a => {
  if (a % 2 === 0) {
    return(true)
  } else {
    return(false)
  }
};

const isSquare = a => {
  if (Math.sqrt(a) % 1 === 0) {
    return(true)
  } else {
    return(false)
  }
};

const startsWith = (char, string) => {
  if (string.charAt() === "a") {
    return(true)
  } else {
    return(false)
  }
};

const containsVowels = string => {
  const vowels = ('a','e','i','o','u')
  const lowerCase = (string.toLowerCase())
  const includes = (string.includes(vowels))
if (string.indexOf('c','D')) {
  return true;
} else {
  return false;
}

  // return vowels.indexOf(lowerCase) != true;
};

const isLowerCase = string => {
  if (string === string.toLowerCase()) {
    return(true)
  } else {
    return(false)
  }
};


module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
