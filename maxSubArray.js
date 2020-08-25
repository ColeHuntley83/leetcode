//write a function that acceps and array and a number called n and calculate
//the maximum sum of n consecutive elements in the array


let data = [2, 3, 3, 5, 6, 1, 1];

// const maxSubArray = (arr, num) => {
//     if (arr.length < num || arr.length === 0) return null;

//     let max = -Infinity;
//     for (let i = 0; i <= arr.length - num ; i++) {
//         let sum = 0;
//         for (let j = 0; j < num; j++) {
//             sum += arr[i + j];
//         };
//         max = Math.max(sum, max);
//     }
//     return max;
// };

const maxSubArray= (arr, num) => {
    if (arr.length === 0 || arr.length< num) return null;
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
        

    };
    for (let i = num; i < arr.length; i++) {
        tempSum = maxSum + arr[i] - arr[i-num];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
    

}


let result = maxSubArray(data, 2);
console.log(result)