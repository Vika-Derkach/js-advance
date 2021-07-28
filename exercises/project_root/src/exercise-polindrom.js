// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is palindrome while 123 is not.

// Example 1:
// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
// Therefore it is not a palindrome.

function main(x) {
  // Change code below
  let newP = []
  let old = []
  if (x > 0) {
    newP = x.toString().split('').reverse().join('');
    old = x.toString().split('').join('')
    return newP === old;
    //  if (newP === old) {
    //   return true;
    // }
    // else {
    //   return false
    // }
  }
  else {
    return false
  }


}

module.exports = main;