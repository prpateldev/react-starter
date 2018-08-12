/* @flow */

const x = 100;
const msg = "Hello";
const Person = {
  first_name: "Piyush",
  last_name: "Patel"
};

function callme(msgToShow = "Welcome") {
  console.log(msgToShow);
  return x;
}

callme(msg);

function add(a: number, y: number) {
  return a + y;
}

console.log(add(1, 2), Person.first_name);
