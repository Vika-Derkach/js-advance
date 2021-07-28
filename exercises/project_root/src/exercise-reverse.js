// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231,  2^31 - 1],
// then return 0.

// Example 1
// Input: x = 123
// Output: 321

// Example 2
// Input: x = -123
// Output: -321

// Example 2
// Input: x = 1534236469
// Output = 0

function main(x) {
  // Change code below
  
  
  let xString = x.toString();
  let xArray = xString.split('');
  let isMinus = false;
  
  if (xString[0] === '-') {
    xArray.shift()
    isMinus = true;
  }

  const reversNumber = +(xArray.reverse().join(''));

  if (reversNumber >= 1534236469) {
    return 0;
  }

  if (isMinus) {
    return reversNumber * -1
  }

  return reversNumber;
  // oursV = x.toString().split('').join('')
  // if (reverseV === oursV.toString().split('').reverse().join('') && Number(reverseV) < 4236469) {
  //   return Number(reverseV)
  // }
  // else if (oursV.toString().split('').reverse().join('').includes('-')) {
  //   let deleteMinus = reverseV.replace('-', '')
  //   let deleted = Math.abs(Number(deleteMinus)) * -1
  //   if (deleted.toString().length < 9) {
  //     return deleted
  //   } else {
  //     return 0
  //   }

  // }
  // else {
  //   return 0
  // }



}

module.exports = main;