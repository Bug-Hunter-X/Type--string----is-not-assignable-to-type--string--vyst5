function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Modify the function signature
function greeterArray(persons: string[]) {
  return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user));

// Solution 2: Access the array element
console.log(greeter(user[0]));