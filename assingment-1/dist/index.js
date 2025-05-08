"use strict";
function formatString(input, toUpper) {
    return toUpper !== false ? input.toUpperCase() : input.toLowerCase();
}
formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);
// -------------
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 4.8 },
    { title: "Book X", rating: 3.9 },
];
filterByRating(books);
function concatenateArrays(...arrays) {
    return arrays.reduce((acc, array) => acc.concat(array), []);
}
concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
