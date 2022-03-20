// Code your solutions in this file

// trying the for loop
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}


// Now trying another for loop
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);

// Using while loop to fill out an array and return it to the caller
function writeCards(names, event) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you ${names[i]} for the wonderful ${event} gift`);
        console.log(cards[i]);
    }

    return cards;
}

writeCards(["Mary", "Susan", "John"], "wedding");

// Countdown using for loop
console.log("Countdown using FOR loop:");
for (let i = 9; i >= 0; i--) {
    console.log(i);
}

// Countdown using while loop
console.log("Countdown using WHILE loop:");
let i = 9;
while (i >= 0) {
    console.log(i--);
}
