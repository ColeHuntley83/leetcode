const {returnLargeArr} = require('./utils')


const insertion = (arr) => {
    let start = new Date().getTime();
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i -1;
        while( j>= 0 && arr[j] > currentVal) {
            arr[j+1] = arr[j]
            j--;
        }
        arr[j +1] = currentVal;

    }
    var end = new Date().getTime();
    console.log(`Execution Time: ${end - start} ms`)
    return arr;
};


let result = insertion([9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(result)