/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered the same.
*/

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

console.log(isPalindrome("Nan"));      
console.log(isPalindrome("racecar"));  
console.log(isPalindrome("hello"));    
console.log(isPalindrome("Madam"));    
console.log(isPalindrome("12321"));    
console.log(isPalindrome("Test123"));  
