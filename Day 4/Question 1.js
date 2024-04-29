// anonymous function to print the odd number in the array.
const isOdd = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
  };
  
  let saw = [1,2,3,4,5,5,6,7,7] 
  const odd = isOdd(saw)
  
  // anonymous function to convert all the strings to title caps in a string array
  
  const toTitleCaps = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return arr;
  };
  let Array = ["hello", "world", "javascript"];
  const titleCapsArray = toTitleCaps(Array);
  console.log(titleCapsArray)
  
  // anonymous function to Sum of all numbers in an array
  
  const sumOfArray = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
  };
  
  let array = [1,2,3,4,5,5,6,7,7]
  const sum = sumOfArray(array)
  console.log(sum)
  
  // anonymous function Return all the prime numbers in an array
  
  const PrimeNumbers = function(arr) {
    const primes = [];
  
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
            primes.push(arr[i]);
        }
    }
  
    return primes;
  };
  
  
  const int = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(PrimeNumbers(int));
  
  // an anonymous function return all the palindromes in an array
  
  
  const Palindromes = function(arr) {
    const palindromes = [];
  
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i].toLowerCase();
        const reversedWord = word.split('').reverse().join('');
  
        if (word === reversedWord) {
            palindromes.push(arr[i]);
        }
    }
  
    return palindromes;
  };
  
  const str = ["level", "hello", "radar", "world", "civic", "racecar"];
  console.log(Palindromes(str));
  
  // an anonymous function return median of two sorted arrays of the same size
  
  const returnMedian = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    mergedArray.sort((a, b) => a - b);   //sorts the elements of the mergedArray in ascending order based on their numeric values. found this on MDN website.
  
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
  
    if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
  };
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  console.log(returnMedian(array1, array2));
  
  
  // an anonymous function remove duplicates from an array
  
  const removeDuplicates = function(arr) {
    const uniqueArray = [];
  
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }
  
    return uniqueArray;
  };
  

//   Rotate an array by k times


  const inArray = [1, 2, 2, 3, 4, 4, 5];
  console.log(removeDuplicates(inArray));
  
  const rotateArray = function(arr, k) {
    const n = arr.length;
    
    for (let i = 0; i < k; i++) {
        const temp = arr.pop();
        arr.unshift(temp);
    }
  
    return arr;
  };
  
  const rotArray = [1, 2, 3, 4, 5];
  const rotations = 3;
  console.log(rotateArray(rotArray, rotations));
  