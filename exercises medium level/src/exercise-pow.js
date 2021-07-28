// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
// The result should be formated (5 digits after dot)

// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

function main(x, n) {
  // Change code below. 

  if (n == 0 ) {
    return 1;
  }
  else if (n % 2 == 0){
    return main(x, parseInt(n / 2, 10)) *
    main(x, parseInt(n / 2, 10));
  }
 else if (n <= 0) {
  return 1 /(x * main(x, parseInt(n / 2, 10)) *
  main(x, parseInt(n / 2, 10)) );
 }
 
  else { 
    return x * main(x, parseInt(n / 2, 10)) *
  main(x, parseInt(n / 2, 10));
}

}

module.exports = main; 