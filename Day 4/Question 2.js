// arrow functions to print odd numbers in an array

const printOddNumbers = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
      }
    }
  };
  const inputArray = [1, 7, 3, 4, 5, 6, 9];
  printOddNumbers(inputArray);
  
  // Convert all the strings to title caps in a string array
  
  const convertToTitleCaps = (arr) => {
    const titleCapsArray = [];
    for (let i = 0; i < arr.length; i++) {
      const words = arr[i].split(" ");
      const titleCapsWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
      titleCapsArray.push(titleCapsWords.join(" "));
    }
    return titleCapsArray;
  };
  const inputString = ["hello world", "good morning", "have a nice day"];
  const resultArray = convertToTitleCaps(inputArray);
  console.log(resultArray);
  
  // Sum of all numbers in an array
  
  const sumOfNumbers = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };
  const inSum = [1, 2, 3, 4, 5];
  console.log(sumOfNumbers(inSum));
  
  // print the prime number in the array
  const returnPrimeNumbers = (arr) => {
    const primeNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      let isPrime = true;
      if (arr[i] <= 1) {
        isPrime = false;
      } else {
        for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
          if (arr[i] % j === 0) {
            isPrime = false;
            break;
          }
        }
      }
      if (isPrime) {
        primeNumbers.push(arr[i]);
      }
    }
    return primeNumbers;
  };
  const inPrime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(returnPrimeNumbers(inPrime));
  
  // Return all the palindromes in an array
  const returnPalindromes = (arr) => {
    const palindromeArray = [];
    for (let i = 0; i < arr.length; i++) {
      const word = arr[i].toLowerCase();
      const reversedWord = word.split("").reverse().join("");
  
      if (word === reversedWord) {
        palindromeArray.push(arr[i]);
      }
    }
    return palindromeArray;
  };
  const inpString = ["level", "hello", "radar", "world", "deified"];
  console.log(returnPalindromes(inpString));