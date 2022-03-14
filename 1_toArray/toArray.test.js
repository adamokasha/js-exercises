const { expect, test } = require("@jest/globals");
const { toArray } = require("./toArray");

test('toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]', () => {
  expect(toArray({ a: 1, b: 2 })).toEqual([
    ["a", 1],
    ["b", 2],
  ]);
});

test('toArray({ cola: 12, pepsi: 9 }) ➞ [["cola", 12], ["pepsi", 9]]', () => {
  expect(toArray({ cola: 12, pepsi: 9 })).toEqual([
    ["cola", 12],
    ["pepsi", 9],
  ]);
});

test("toArray({}) ➞ []", () => {
  expect(toArray({})).toEqual([]);
});
