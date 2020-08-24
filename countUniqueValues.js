//write a function called countUniqueValues thats that takes in a sorted array and returns the total number of unique numbers

let data = [1, 2, 3, 3,3, 3, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9, 10, 50];

const countUniqueValues = (arr) => {
    var left = 0;
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
       if (arr[left] !== arr[i]) {
           left++;
           arr[left] = arr[i];
           console.log(arr[left])
       }
    }
    console.log(arr)
    return left + 1;
};

let result = countUniqueValues(data);
console.log(result)