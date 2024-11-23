# ALGOLIBA

**ALGOLIBA** is a simple and efficient JavaScript library for working with arrays. It provides an easy-to-use object `algo` that includes several helpful methods for array manipulation and mathematical operations.

### Repository

[GitHub Repository: ALGOLIBA](https://github.com/Mishulka/Algo-lib.git)

---

## Installation

You can install the library via npm:

```bash
npm install algoliba


Usage
After installation, you can easily use the available methods by importing the algo object from algoliba:


import algo from 'algoliba';
Here is an example usage:


Big O:

| **Big O Notation** | **Type**     | **10 Elements** | **100 Elements** | **1000 Elements** |
|--------------------|--------------|-----------------|------------------|-------------------|
| **O(1)**           | Constant     | 1               | 1                | 1                 |
| **O(log N)**       | Logarithmic  | 3               | 6                | 9                 |
| **O(N)**           | Linear       | 10              | 100              | 1000              |
| **O(N log N)**     | n log(n)     | 30              | 600              | 9000              |
| **O(N^2)**         | Quadratic    | 100             | 10000            | 1000000           |
| **O(2^N)**         | Exponential  | 1024            | 1.26e+29         | 1.07e+301         |
| **O(N!)**          | Factorial    | 3,628,800       | 9.3e+157         | 4.02e+2567        |



Example

// Define an array
let arr = [2, 4, 23, 5, 7, -10, 1];

// Sort the array using bubbleSort
console.log(algo.bubbleSort(arr));
// Output: [-10, 1, 2, 4, 5, 7, 23]
Available Methods
1. bubbleSort(arr)
Sorts the given array using the Bubble Sort algorithm.


let sortedArr = algo.bubbleSort([5, 2, 9, 1]);
// Output: [1, 2, 5, 9]
2. fastSort(arr)
Sorts the given array using the Quick Sort algorithm.


let sortedArr = algo.fastSort([5, 2, 9, 1]);
// Output: [1, 2, 5, 9]
3. factorial(n)
Calculates the factorial of the given number n.


let result = algo.factorial(5);
// Output: 120
