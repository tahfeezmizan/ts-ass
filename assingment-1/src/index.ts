

function formatString(input: string, toUpper?: boolean): string {
  return toUpper !== false ? input.toUpperCase() : input.toLowerCase();
}

formatString("Hello");          // Output: "HELLO"
formatString("Hello", true);   // Output: "HELLO"
formatString("Hello", false);  // Output: "hello"





type T = {
  name: string;
};

function concatenateArrays(...arrays: T[][]): T[] {
  return arrays.reduce((acc, array) => acc.concat(array), []);
}

console.log(concatenateArrays([{ name: "a" }], [{ name: "b" }]));
