/* =========================================================
   Expense Tracker - script.js
   Week's Assignment: Variables, Conditionals, Loops
   ========================================================= */

/* ---------------------------------------------------------
   PART 1: Store Sample Expenses
   Six variables representing different expense categories.
   Each expense holds a numeric value.
--------------------------------------------------------- */
let rent = 150;
let food = 90;
let transport = 60;
let internet = 45;
let entertainment = 110;
let utilities = 190;

console.log("===== PART 1: Sample Expenses =====");
console.log("Rent: $" + rent);
console.log("Food: $" + food);
console.log("Transport: $" + transport);
console.log("Internet: $" + internet);
console.log("Entertainment: $" + entertainment);
console.log("Utilities: $" + utilities);


/* ---------------------------------------------------------
   PART 2: Flag High Spending
   If an expense exceeds $100, flag it as "High Spending".
   Otherwise, flag it as "Normal Spending".
--------------------------------------------------------- */
console.log("\n===== PART 2: Spending Check =====");

// Rent
if (rent > 100) {
  console.log("Rent: High Spending");
} else {
  console.log("Rent: Normal Spending");
}

// Food
if (food > 100) {
  console.log("Food: High Spending");
} else {
  console.log("Food: Normal Spending");
}

// Transport
if (transport > 100) {
  console.log("Transport: High Spending");
} else {
  console.log("Transport: Normal Spending");
}

// Internet
if (internet > 100) {
  console.log("Internet: High Spending");
} else {
  console.log("Internet: Normal Spending");
}

// Entertainment
if (entertainment > 100) {
  console.log("Entertainment: High Spending");
} else {
  console.log("Entertainment: Normal Spending");
}

// Utilities
if (utilities > 100) {
  console.log("Utilities: High Spending");
} else {
  console.log("Utilities: Normal Spending");
}


/* ---------------------------------------------------------
   PART 3: Calculate Total Expenses
   Store all expense values in an array and use a loop
   (not manual addition) to calculate the total.
--------------------------------------------------------- */
console.log("\n===== PART 3: Total Expenses =====");

let expenses = [rent, food, transport, internet, entertainment, utilities];

let totalExpenses = 0;

for (let i = 0; i < expenses.length; i++) {
  totalExpenses += expenses[i];
}

console.log("Total Expenses: $" + totalExpenses);


/* ---------------------------------------------------------
   PART 4: Budget Check
   Compare total expenses to monthly income and display
   whether the user is within budget or over budget.
--------------------------------------------------------- */
console.log("\n===== PART 4: Budget Check =====");

let monthlyIncome = 800;

console.log("Monthly Income: $" + monthlyIncome);
console.log("Total Expenses: $" + totalExpenses);

if (totalExpenses <= monthlyIncome) {
  console.log("Status: Within Budget");
} else {
  console.log("Status: Over Budget");
}
