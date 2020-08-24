//write a function that acceps and array and a number called n and calculate
//the maximum sum of n consecutive elements in the array


let data = [2, 3, 3, 5, 6, 1, 1];

const maxSubArray = (arr, num) => {
    if (arr.length < num || arr.length === 0) return null;

    let max = -Infinity;
    for (let i = 0; i <= arr.length - num ; i++) {
        let sum = 0;
        for (let j = 0; j < num; j++) {
            sum += arr[i + j];
        };
        max = Math.max(sum, max);
    }
    return max;
};

let result = maxSubArray(data, 4);
console.log(result)