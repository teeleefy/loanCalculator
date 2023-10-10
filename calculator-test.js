it("should calculate the monthly rate correctly", function () {
  // ...
  const exampleA = { rate: 5.75, amount: 321000, years: 30 };
  const exampleB = { rate: 3.5, amount: 14000, years: 3 };
  expect(+calculateMonthlyPayment(exampleA)).toEqual(1873.27);
  // expect(calculateMonthlyPayment(20000)).toEqual(3000);
  expect(+calculateMonthlyPayment(exampleB)).toEqual(410.23);
});

it("should return a result with 2 decimal places", function () {
  // ..
  const exampleC = { rate: 10, amount: 1000, years: 1 };
  expect(+calculateMonthlyPayment(exampleC)).toEqual(87.92);
});

/// etc
