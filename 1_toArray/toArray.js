function toArray(obj) {
  // create an empty array to store values
  const collection = []

  // create for...in statement which iterates over all enumerable properties of an object 
  for (const key in obj) {
    // use push method to append new elements to the end of the array
    collection.push(
      [key, obj[key]] // transforms key-value pair {a: 1} into array => ["a", 1]
    )
  }
  return collection
}

module.exports = { toArray };
