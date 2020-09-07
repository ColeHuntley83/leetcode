const { returnLargeArr } = require("./utils.js");

const swap = (arr, indx1, indx2) => {
  ([arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]);
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIndx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndx++;
      swap(arr, swapIndx, i);
    }
  }
  swap(arr, start, swapIndx);
  return swapIndx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
      
    let pivotIndx = pivot(arr, left, right);
    quickSort(arr, left, pivotIndx - 1);
    quickSort(arr, pivotIndx + 1, right);
  }
  return arr;
};


console.log(quickSort(returnLargeArr(100000)))