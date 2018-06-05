/* @flow */

const x = 100;
const msg = "Hello";

function callme(msgToShow = "Welcome") {
  console.log(msgToShow);
  return x;
}

callme(msg);

function add(a: number, y: number) {
  return a + y;
}

console.log(add(1, 2));
