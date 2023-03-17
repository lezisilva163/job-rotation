function fibonacci(n) {
    if (n <= 1) {
      return n
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2)
    }
  }
  
  // Número a ser validado
  let num = 34
  
  // Calcula a sequência Fibonacci até o número informado
  let i = 0
  let fib = fibonacci(i)
  while (fib <= num) {
    if (fib === num) {
      console.log(num + " pertence à sequência Fibonacci!")
      break
    }
    i++
    fib = fibonacci(i)
  }
  
  if (fib > num) {
    console.log(num + " não pertence à sequência Fibonacci.")
  }
  