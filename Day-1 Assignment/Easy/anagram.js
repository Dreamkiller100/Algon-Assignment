/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  const normalize = str => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
  
  return normalize(str1) === normalize(str2);
}


console.log(isAnagram("listen", "silent"));   
console.log(isAnagram("Listen", "Silent"));   
console.log(isAnagram("hello", "world"));     
console.log(isAnagram("anagram", "nag a ram")); 


module.exports = isAnagram;
