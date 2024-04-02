// buyer/index.js

const seller = require('@shinhwa2021/teaprotocol');
const finance = require('./finance');
const buyerUtils = require('./buyerUtils');
const buyerActions = require('./buyerActions');

function buyHouse() {
    const buyerName = buyerUtils.generateRandomName();
    const housePrice = Math.floor(Math.random() * (1000000 - 100000) + 100000); // Randomly generate house price
    console.log(`${buyerName} wants to buy a house for ${housePrice} dollars.`);

    // Show buyer actions
    console.log(`${buyerName} starts the house purchase process:`);
    buyerActions.buyerActions.forEach((action, index) => {
        console.log(`${index + 1}. ${action}`);
    });

    // Call the sellHouse function from the seller module
    seller.sellHouse(buyerName, housePrice);

    // Simulate loan calculation
    finance.calculateLoan(housePrice, 5, 20); // Loan interest rate is 5%, loan term is 20 years

    // Simulate house acceptance
    setTimeout(() => {
        console.log(`${buyerName} has successfully purchased the house. Transaction completed.`);
    }, 2000);
}

module.exports = {
    buyHouse
};
