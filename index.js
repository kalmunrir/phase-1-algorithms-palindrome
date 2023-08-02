function isPalindrome(word) {
  // Write your algorithm here
  for(let i = 0; i < word.length / 2; i++){
    if(word.charAt(i) !== word.charAt(word.length - 1 - i)){
      return false;
    }
  }

  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  The function loops through the first half of the word and checks if
  the second half of the word is in the opposite order. If the second half
  of word in not in the opposite order it returns fals and if it is then 
  it returns true.
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
