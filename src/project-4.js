const getFirstItem = (collection, cb) => cb(collection[0]);
  // invoke the callback function and pass the first item from the collection in as an argument

const getLength = (collection, cb) => cb(collection.length);
  // Write a function called getLength that passes the length of the array into the callback

const getLastItem = (collection, cb) => cb(collection[collection.length - 1]);
  // Write a function called getLastItem which passes the getLastItem item of the array into the callback

const sumNums = (x, y, cb) => cb(x + y);
  // Write a function called sumNums that adds two numbers and passes the result to the callback

const multiplyNums = (x, y, cb) => cb(x * y);
<<<<<<< HEAD
  // Write a function called multiplyNums that adds two numbers and passes the result to the callback
=======
  // Write a function called multiplyNums that multiplies two numbers and passes the result to the callback
>>>>>>> fad3ef4647588003d30d9646a65c0601b230ef7e

const contains = (collection, item, cb) => cb(collection.indexOf(item) > -1);
  // Write a function called contains that checks if an item is present inside of the given array.
  // Pass true to the callback if it is, otherwise pass false

const removeDuplicates = (collection, cb) => cb(Array.from(new Set(collection)));
  // Set object lets you store *unique* values of any type
  // Array.from() creates a new Array instance from an array-like or iterable object

  // cb(collection.filter((item, pos) => collection.indexOf(item) === pos));

  // Write a function called removeDuplicates that removes all duplicate values from the given array.
  // Pass the array to the callback function.  Do not mutate the original array.
<<<<<<< HEAD
  const noDuplicates = [];
  for (let i = 0; i < collection.length; i++) {
    if (!(noDuplicates.includes(collection[i]))) {
      noDuplicates.push(collection[i]);
    }
  }
  cb(noDuplicates);
};
=======
>>>>>>> fad3ef4647588003d30d9646a65c0601b230ef7e

module.exports = {
  getFirstItem,
  getLength,
  getLastItem,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates
};
