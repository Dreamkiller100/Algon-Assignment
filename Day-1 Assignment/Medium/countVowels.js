/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').
*/

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const input1 = "Hello World";
const input2 = "AEIOUaeiou";
const input3 = "xyz";

console.log(`Vowels in "${input1}":`, countVowels(input1)); // 3
console.log(`Vowels in "${input2}":`, countVowels(input2)); // 10
console.log(`Vowels in "${input3}":`, countVowels(input3)); // 0
