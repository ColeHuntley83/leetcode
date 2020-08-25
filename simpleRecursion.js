
const recursiveSum = (num) => {
    if (num === 1) return 1;
    return num + recursiveSum(num -1);
};

let result = recursiveSum(4);
console.log(result)