const { expect, test } = require("@jest/globals");
const {squared, filterOdds, upperCase} = require("./hocs");

test("squared returns an array of integers squared", () => {
  const arr = [1, 2, 3, 4, 5];
  expect(squared(arr)).toEqual([1, 4, 9, 16, 25]);
})

test("filter odds returns an array without odd numbers", () => {
  const arr = [1, 2, 3, 4, 5];
  expect(filterOdds(arr)).toEqual([2, 4]);
});

test("uppercase modified an array of strings to uppercase", () => {
  const arr = ["apple", "bike", "cards", "deck", "elevator"];
  upperCase(arr);
  expect(arr).toEqual(["APPLE", "BIKE", "CARDS", "DECK", "ELEVATOR"]);
})