"use strict";

const name = "Sara Sheeran";
let age = 31;
const birthday = "October 29";
let pineapplePizza = true;
const lifeEvents = [
  "I lived in Brazil.",
  "I was on the ski team in HS.",
  "My 4th nephew was born today.",
  "This weekend I am going to a haunted house.",
];

if (pineapplePizza) {
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (counter >= 0) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log("randomNumber != 5");
  } else {
    counter++;
    console.log(
      `5===5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
