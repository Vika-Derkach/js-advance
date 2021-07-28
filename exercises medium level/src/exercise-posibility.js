// There is an array numbers of distinct integers, return all the possible permutations.
// You can return the answer in any order.

// Example 1:
// Input: numbers = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: numbers = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: numbers = [1]
// Output: [[1]]


// var permArr = [];
// var usedChars = [];

function main(numbers) {
  let output = [];

  const permute = (array, massive = []) => {
    if (array.length === 0) {
      output.push(massive)
    } else {
      for (let i = 0; i < array.length; i++) {
        let current = array.slice();
        let next = current.splice(i, 1);
        permute(current.slice(), massive.concat(next))
     }
   }
 }

 permute(numbers)

 return output;

}

module.exports = main;