//write a fucntion that takes in a sorted array and a number n. 
//function should return the index at where the value is stored in the array


let data = [1, 2, 3, 7, 10, 12, 14, 15, 16];

const search = (arr, num) => {
    let min = 0;
    let max = arr.length -1;
    while (min <= max) {
        let middleNum = Math.floor((max + min) /2);
        if (arr[middleNum] < num) {
            min = middleNum + 1;
        } else if(arr[middleNum] > num) {
            max = middleNum -1;
        } else {
            return middleNum;
        }
    }
};
let result = search(data, 7);
console.log(result);