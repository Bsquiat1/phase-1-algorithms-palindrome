
function isPalindrome(word) {
  if (word.length <= 1) {
    // A string of length 0 or 1 is always a palindrome
    return true;
  }
  
  // Check if the first and last characters match
  if (word[0] !== word[word.length - 1]) {
    return false;
  }
  
  // Recursively check the substring between the first and last characters
  return isPalindrome(word.slice(1, word.length - 1));
}


/*
if first letter = last letter
   return "True"
else 
   return "false"
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
