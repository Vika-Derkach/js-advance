// Make code working using binding.
// Function main sould return information about person(attribute of main function).

// Example of input
// const person =  {
//   name: "Ivan",
//   age: 10
// }

function getInfo() {
  return `Name: ${this.name}, age: ${this.age}`;
}

function main(person) {
  // Change code below
  // let funcUser = getInfo.bind(person);
  return getInfo.bind(person)();

  // funcUser(person)
}

module.exports = main;