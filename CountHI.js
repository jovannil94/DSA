//Return the number of times that the string "hi" appears anywhere in the given string.
// ex: countHi('abc hi ho') → 1
//     countHi('ABChi hi') → 2
//     countHi('hihi') → 2

const countHI = (str) => {
    let sum = 0;
    for(i = 0; i < str.length; i ++) {
        if(str[i] === "h" && str[i+1] === "i") {
            sum ++;
        }
    }
    return sum
}

let string1 = 'abc hi ho';
let string2 = 'ABChi hi';
let string3 = 'hihi';

// console.log(countHI(string3));
//now solve recursively

const countHIRecursively = (str, i = 0) => {
    if(i === str.length) return 0;
    if(str.slice(i, i+2) === 'hi') {
        return 1 + countHIRecursively(str, i + 1);
    }
    return countHIRecursively(str, i +1);
}

console.log(countHIRecursively(string3))

//the base case for the recursion is the length of the string as we increment upwards, once the variable becomes equivalent to the length it returns 0, thus returning an count that was withheld in memory
//the slice checks every possible two spaces for a hi and if so holds a sum of 1 in memory and recalls the function with a higher index
//else it recalls the function and also checks the next index of the string without adding to the total sum