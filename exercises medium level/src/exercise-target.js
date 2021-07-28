// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

function main(nums, target) {
  
  let first = 0; 
  let last = nums.length - 1;   
  let position = -1;
  let found = false;
  let middle;
  if (target > nums[nums.length - 1]) {
    position = nums.length;
  } else if (target < nums[0]) {
    position = 0;
  } else {
    while (found === false && first <= last) {
      middle = Math.floor((first + last)/2);
      if (nums[middle] == target) {
          found = true;
          position = middle;
      } else if (nums[middle] > target) { 
          last = middle - 1;
          position = middle;
      } else {  
          first = middle + 1;
          position = middle + 1;
      } 
    }
  }

  return position;

}

module.exports = main;