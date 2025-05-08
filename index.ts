function formatString(input: string, toUpper?: boolean): string {
  const result = toUpper !== false ? input.toUpperCase() : input.toLowerCase();
  return result;
}

formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);

// -------------

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const result = items.filter((item) => item.rating >= 4);

  if (result < 4) {
    console.log("Less than 4");
  }
  return result;
}

const books = [
  { title: "Book A", rating: 3.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book D", rating: 4.8 },
  { title: "Book X", rating: 4.9 },
];

filterByRating(books);

// ---------------------------

type T = string | number;

function concatenateArrays(...arrays: T[][]): T[] {
  const result = arrays.reduce((acc, array) => acc.concat(array), []);
  return result;
}

concatenateArrays(["a", "b"], ["c"], ["rohim", "korim"]);
concatenateArrays([1, 2], [3, 4], [5]);
concatenateArrays([9, 8], [3, 4], [5]);

// -----------------------

{
  class Vechicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo() {
      return `Make ${this.make}, Year ${this.year}`;
    }
  }

  class Car extends Vechicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    getModel() {
      return `Model ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2022, "Camry");
}

// ---------------------------

function processValue(value: string | number): number {
  const result = typeof value === "string" ? value.length : value * 2;
  console.log(result);
  return result;
}

processValue("Programmgin Hero");
processValue(10);

// ---------------------
{
  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]) {
    if (products.length === 0) return console.log(null);

    const result = products.reduce((prev, curr) =>
      curr.price > prev.price ? curr : prev
    );
    return result;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  getMostExpensiveProduct(products);
  // Output: { name: "Bag", price: 50 }
}

// -------------------

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day) {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}


// ----------------------

{
  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject("Negative number not allowed");
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }

  squareAsync(4) 
  squareAsync(-3)
}
