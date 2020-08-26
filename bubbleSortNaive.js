//implement simple sort algo

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};


function bubbleSort(arr) {
    for (let j = arr.length -1; j >=0; j--) {
        let done = false;
        for (let i = 0; i < j; i++) {
            
            if (arr[i] > arr[i +1]) {
                done = false;
                count = 1;
                swap(arr, i, i +1);
                debugger;
            }
        }
        if (done) return arr;
    }
    return arr;
};


let data = [3, 30, 40 , 50, 33, 3, 2, 4, 5, 1111, 200, 4343, 233];
let result = bubbleSort(data);
console.log(result);