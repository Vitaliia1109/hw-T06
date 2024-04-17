// Prompt the user to enter their mother's first name.
let motherFirstName = prompt("What is your mother's first name?");

// Prompt the user to enter the name of the street they grew up on.
let streetNameGrewUp = prompt("What is the name of the street you grew up on?");

// Prompt the user to enter their favorite color as a child.
let favoriteColorAsChild = prompt("What was your favorite color as a child?");

// Prompt the user to enter their current age and convert it to a number.
let currentAge = Number(prompt("What is your current age?"));

// Prompt the user to enter a number between 1 and 10 and convert it to a number.
let number = Number(prompt("Please input a number between 1 and 10"));

// Check if the entered number is between 1 and 10.
if (number >= 1 && number <= 10) {
    // Display a message predicting future events based on the entered data.
    console.log(`In ${number} years you are going to meet your best friend named ${motherFirstName + streetNameGrewUp}.
You will get married in ${currentAge + number} years and have ${currentAge % number} children.
In ${Math.round(currentAge / number)} years you are going to dye your hair ${favoriteColorAsChild}.`);
}
else {
    // Display an error message if the entered number is not between 1 and 10.
    console.log("Please input a number between 1 and 10");
}


