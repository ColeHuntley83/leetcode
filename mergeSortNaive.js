const {returnLargeArr} = require('./utils')

const merge = (arr1, arr2) => {
    let i = 0;
    let j = 0;

    let result = [];
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
};

const mergeSort = (arr) => {
    let start = new Date().getTime();
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    let mergedLeft = mergeSort(left);
    let mergedRight = mergeSort(right);
    var end = new Date().getTime();
    console.log(`Execution Time: ${end - start} ms`)
    return merge(mergedLeft, mergedRight);
};



console.log(mergeSort(returnLargeArr(100000)));
