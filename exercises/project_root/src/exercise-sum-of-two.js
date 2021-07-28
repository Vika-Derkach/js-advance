// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

// Example 1
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

function main(nums, target) {

   // Change code below
   let sum = ''
   nums.forEach((e,index1) => {
    nums.forEach((el, index2) => {
     if ((e + el === target) && !sum && (index1 !== index2) ) {

     sum =  index1 + ',' + index2;
    //  console.log(index );

     }
   
    })
    
  })
  return sum
  // var l, r;
  // let newArr = []
  // var l, r;
  // nums.sort();
  // l = 0;
  //   r = nums.length - 1;
  //   while (l < r) {
  //     if (nums[l] + nums[r] == target)
  //         return 1;
  //     else if (nums[l] + nums[r] < target)
  //         l++;
  //     else // A[i] + A[j] > sum
  //         r--;
  // }
  // return 0;

 
//  const sum = nums.reduce((a, b) => a + b, 0)

  

}
module.exports = main;