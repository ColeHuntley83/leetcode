const {returnLargeArr} = require('./utils')
console.log(returnLargeArr)

const insertion = (arr) => {
    debugger
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i -1; j >=0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;

    }
    return arr;
};


let result = insertion(returnLargeArr(1000));
console.log(result)