const {returnLargeArr} = require('./utils')


const swap = (arr, indx1, indx2) => {
    ([arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]);
}

function selection(arr) {
    let start = new Date().getTime();
    
    for (let i = 0; i< arr.length; i++) {
        let minNum = i;
        for (let j = i +1 ; j < arr.length; j++) {
            if ( arr[j] < arr[minNum] ) {
                minNum = j;
            }
        }
        if ( minNum !== i) {
            // let temp = arr[i];
            // arr[i] = arr[minNum];
            // arr[minNum] = temp;
            // new swap version with destrcuturing
            swap(arr, i, minNum)
        }
    }
    var end = new Date().getTime();
    console.log(`Execution Time: ${end - start} ms`)
    return arr;
};


let result = selection(returnLargeArr(100000));
