// TODO: write a function that takes an array of integers and returns an array of the integers squared using map
function squared(arr) {
  return arr.map((n) => {
    if (typeof n !== 'number') {
      throw Error("Can't square because element is not a number")
    }
    return n * n
  })

}
// TODO: write a function that takes an array of integers and filters out all the odd numbers
function filterOdds(arr) {
  return arr.filter((n) => n % 2 === 0)
}
// TODO: write a function that takes an array of strings and uppercases all the strings using forEach
function upperCase(arr) {
  arr.forEach((str, i) => {
    arr[i] = str.toUpperCase()
  })
  return arr
}

module.exports = { squared, filterOdds, upperCase };
