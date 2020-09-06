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
        arr[j] = currentVal;

    }
    var end = new Date().getTime();
    console.log(`Execution Time: ${end - start} ms`)
    return arr;
};


let result = insertion(returnLargeArr(100000));
console.log(result)