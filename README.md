# Impactful TypeScript Blog

## Type in TypeScript

The type system in TypeScript describes the various data types supported by the language. It is divided into three main categories: any type, built-in types, and user-defined types. The type system in TypeScript is responsible for ensuring that data types are correct before they are used in a program.

- **Does not support multiple merged declarations.**
- **Does not have implementation purposes.**
- **More flexible.**
- **Does not inherently support the use of an object.**
  

##  Interface in TypeScript

An interface in TypeScript is a syntactic contract that entities must adhere to. It can contain only declarations of properties, methods, and events, without any implementation. Interfaces define a standard structure that implementing classes must follow.

- **Supports multiple merged declarations.**
- **Used for implementation and extending in classes.**
- **Less flexible compared to type.**
- **Supports the use of an object.**

---

# TypeScript Type Inference and Union Types

## What is TypeScript Type Inference?

TypeScript type inference is a feature that allows the TypeScript compiler to automatically deduce the type of a variable or expression. This means that you do not have to explicitly specify the type of every variable and expression in your code.

For example,
```ts
const x = 10;
const y = x + 2;

console.log(y); // 12
```

##  How Does TypeScript Type Inference Work?

TypeScript type inference works by using a variety of techniques to deduce the type of a variable or expression. These techniques include:

- **Type checking **
- **Type inference rules  **
- **Type annotations **



##  How Does TypeScript Type Inference Work?

TypeScript type inference works by using a variety of techniques to deduce the type of a variable or expression. These techniques include:

- ** Type checking **
- ** Type inference rules  **
- ** Type annotations **


##   Benefits of TypeScript Type Inference

TypeScript type inference provides a number of benefits, including:

- ** Conciseness **
- ** Readability **
- ** Type safety **


##  Union types

Union types allow you to specify that a variable or expression can have one of a few different types. For example, the following code defines a variable x that can be either a string or a number:

For example,
```ts
const x: string | number;
```

