// 🔐 Login and Access Control
let username = prompt("Enter your username (admin or user):");
let password = prompt("Enter your password:");

if ((username === "admin" || username === "user") && password === "1234") {
    let role = username;
    let securityLevel = (role === "admin") ? "high" : "low";
    alert("✅ Login successful!");
} else {
    alert("❌ Login failed! Incorrect username or password.");
    throw new Error("Login failed");
}

// ☕ Ask user details 
let name = prompt("What is your name?");
let age = parseInt(prompt("What is your age?"));
let coffeeType = prompt("Which coffee would you like? (espresso, cappuccino, latte)").toLowerCase();
let quantity = parseInt(prompt("How many cups would you like?"));

// ☕ Validate coffee type
let pricePerCup;
if (coffeeType === "espresso") {
    pricePerCup = 2.5;
} else if (coffeeType === "latte") {
    pricePerCup = 3.5;
} else if (coffeeType === "cappuccino") {
    pricePerCup = 4.0;
} else {
    alert("❌ Invalid coffee type selected.");
    throw new Error("Invalid coffee type");
}

let originalTotal = pricePerCup * quantity;
let discount = 0;
if (age < 18 || age > 60) {
    discount = originalTotal * 0.10;
}
let finalTotal = originalTotal - discount;

// 🧾 Display order summary
alert(
    `🧾 Order Summary for ${name}:\n` +
    `Coffee: ${coffeeType} x ${quantity}\n` +
    `Original Total: $${originalTotal.toFixed(2)}\n` +
    `Discount: $${discount.toFixed(2)}\n` +
    `Final Total: $${finalTotal.toFixed(2)}`
);

// 🧾 Bill Splitter with Tip
let numPeople = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
if (![1, 2, 3].includes(numPeople)) {
    alert("❌ Invalid number of people. Please enter 1, 2, or 3.");
    throw new Error("Invalid number of people");
}

let tipPercent = parseInt(prompt("What tip percentage would you like to add? (0, 5, 10, or 15)"));
if (![0, 5, 10, 15].includes(tipPercent)) {
    alert("❌ Invalid tip percentage. Please enter 0, 5, 10, or 15.");
    throw new Error("Invalid tip percentage");
}

let tipAmount = finalTotal * (tipPercent / 100);
let totalWithTip = finalTotal + tipAmount;
let amountPerPerson = totalWithTip / numPeople;

// 💸 Display bill summary
alert(
    `Hello ${name}!\n` +
    `You ordered ${quantity} ${coffeeType}(s).\n` +
    `Original total: $${originalTotal.toFixed(2)}\n` +
    `Discount: $${discount.toFixed(2)}\n` +
    `Tip: $${tipAmount.toFixed(2)}\n` +
    `Total with Tip: $${totalWithTip.toFixed(2)}\n` +
    `Split between ${numPeople} people: $${amountPerPerson.toFixed(2)} each`
);
alert( java2.js + " has been executed successfully!");
console.log("Order processed successfully for " + name + ".");