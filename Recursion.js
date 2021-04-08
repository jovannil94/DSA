//Recursion factorial

//constraints 2 <= n <= 12

const factorial = (n) => {
    if(n === 1 || n === 0) {
        return 1
    } else if (n >= 2 && n <= 12) {
        return n * factorial(n-1)
    }
}

console.log(factorial(12))