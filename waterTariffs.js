// Prompting the user to input the amount of water used in liters
let waterLiters = Number(prompt("Please input how many liters of water have you used?"));

// Defining the different billing rates per liter for various usage tiers
let waterStep1 = 15.73;
let waterStep2 = 22.38;
let waterStep3 = 31.77;
let waterStep4 = 69.76;

// Initializing the variable to hold the water bill
let waterBill;

// Calculating the water bill based on the usage tier
if (waterLiters <= 6000) {
    waterBill = waterLiters * waterStep1; // For usage up to 6000 liters
}
else if (waterLiters > 6000 && waterLiters <= 10500) {
    waterBill = (waterLiters * waterStep1 + (waterLiters - 6000) * waterStep2); // For usage between 6001 to 10500 liters
}
else if (waterLiters > 10500 && waterLiters <= 35000) {
    waterBill = (6000 * waterStep1 + (10500-6000) * waterStep2 + (waterLiters - 10500) * waterStep3); // For usage between 10501 to 35000 liters
}
else {
    waterBill = (6000 * waterStep1 + (10500-6000) * waterStep2 + (35000-10500) * waterStep3 + (waterLiters - 35000) * waterStep4); // For usage above 35000 liters
}


