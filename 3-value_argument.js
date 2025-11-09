#!/usr/bin/node


// get the first argument
const firstArg = process.argv[2];

// check if the argument exists
if (firstArg === undefined) {
  console.log("No argument");
} else {
  console.log(firstArg);
}
