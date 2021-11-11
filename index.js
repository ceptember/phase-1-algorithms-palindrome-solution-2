function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}

/* 
  Add your pseudocode here
  get the length of the word and split it in half
  iterate through the word and first letter to the last letter,
  second letter to second from last, and so on until the middle letter 
  return false if any of the letters don't match
  return true if it makes it to the end 
*/

/*
  Add written explanation of your solution here

  This is like what I did for my original solution. 
  I'm writing it the way it is provided in this lesson because it's cleaner. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("noon"));
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("moon"));
}

module.exports = isPalindrome;
