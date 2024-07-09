function genfibo(n) {
    if (n <= 0) return [0];
   
    if (n === 1) return [0,1]; // Return [0] if n is 1

    let fibo = [0, 1]; // Initial two terms of Fibonacci sequence
    
   for (let i = 2; i < n; i++) {
       let fibonext = fibo[i - 1] + fibo[i - 2];
       fibo.push(fibonext);
   }
   
   return fibo;
}

// Example usage:
console.log(genfibo(3)); // Output: [0, 1, 1, 2, 3]

