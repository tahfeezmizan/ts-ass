function formatString(input: string, toUpper?: boolean): string {
  return toUpper !== false ? input.toUpperCase() : input.toLowerCase();
}

formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);

// -------------

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
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


// ---------------------------

type T = string | number;

function concatenateArrays(...arrays: T[][]): T[] {
  // return arrays.reduce((acc, array) => acc.concat(array), []);
  // arrays.forEach((array: T[]) => {console.log(array)}
}


concatenateArrays(["a", "b"], ["c"]); 
concatenateArrays([1, 2], [3, 4], [5]); 
