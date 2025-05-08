"use strict";
const course = "Next Level Assingment";
console.log(course);
function concatenateArrays(...arrays) {
    return arrays.reduce((acc, array) => acc.concat(array), []);
}
console.log(concatenateArrays([{ name: "a" }], [{ name: "b" }]));
