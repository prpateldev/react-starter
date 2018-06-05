const x = 100;
const msg = "Hello";

function callme(msgToShow = "Welcome") {
  console.log(msgToShow);
  return x;
}

callme(msg);
