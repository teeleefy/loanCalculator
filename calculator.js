window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const exampleObject = { amount: 15000, years: 5, rate: 3.125 };
  const setAmount = document.getElementById("loan-amount");
  const setYears = document.getElementById("loan-years");
  const setRate = document.getElementById("loan-rate");
  setAmount.value = exampleObject.amount;
  setYears.value = exampleObject.years;
  setRate.value = exampleObject.rate;
}

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = values.rate / 100 / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow(1 + monthlyRate, -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.querySelector("#monthly-payment");
  monthlyPayment.innerText = `$${monthly}`;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const newlyEnteredValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(newlyEnteredValues));
}
