let motherFirstName = prompt("What is your mother's first name?");
let streetNameGrewUp = prompt("What is the name of the street you grew up on?");
let favoriteColorAsChild = prompt("What was your favorite color as a child?");
let currentAge = Number(prompt("What is your current age?"));
let number = Number(prompt("Please input a number between 1 and 10"));


if (number >= 1 && number <= 10) {
    console.log(`In ${number} years you are going to meet your best friend named ${motherFirstName + streetNameGrewUp}.
You will get married in ${currentAge + number} years and have ${currentAge % number} children.
In ${ Math.round(currentAge / number)} years you are going to dye your hair ${favoriteColorAsChild}.`);
}
else {
    console.log("Please input a number between 1 and 10");
}


