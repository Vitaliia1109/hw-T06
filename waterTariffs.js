let waterLiters = Number(prompt("Please input how many liters of water have you used?"));
let waterStep1 = 15.73;
let waterStep2 = 22.38;
let waterStep3 = 31.77;
let waterStep4 = 69.76;
let waterBill;

if (waterLiters <= 6000) {
    waterBill = waterLiters * waterStep1;
}
else if (waterLiters > 6000 && waterLiters <= 10500) {
    waterBill = (waterLiters * waterStep1 + (waterLiters - 6000) * waterStep2);
}
else if (waterLiters > 10500 && waterLiters <= 35000) {
    waterBill = (6000 * waterStep1 + (10500-6000) * waterStep2 + (waterLiters - 10500) * waterStep3);
}
else {
    waterBill = (6000 * waterStep1 + (10500-6000) * waterStep2 + (35000-10500) * waterStep3 + (waterLiters - 35000) * waterStep4);
}

console.log(`Your water bill is ${waterBill}.`);


