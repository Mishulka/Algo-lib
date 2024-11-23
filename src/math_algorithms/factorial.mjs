export function factorial(n) {
    if (n < 0) {
      return "Factorial for negative numbers is not defined.";
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorial(5)); // Вывод: 120
  