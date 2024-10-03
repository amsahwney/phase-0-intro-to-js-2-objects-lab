// Write your solution in this file!

// creating employee object
const employee = {
    A : 123,
    B : 456,
    C : 789, 
}

// creating function 1
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
      }; 
}
// okay 2 tests passing now

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj 
}
// on to the 4th test yay

function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj}
    delete newObj[key]
    return newObj
}
// passing 5 tests!

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj
}

// DONE :) 