//write a function called sumZero which accepts a sorted arroy of integers. The function
//should find the first pairs of integers that sum is equal to zero

let data = [, -3, -2, -1, 0, 0, 1, 2,  4, 5, 6, 7];

const sumZero = (arr) => {
    if (!Array.isArray(arr) || arr.length == 0) return null;
    let len = arr.length - 1;
    for (let i = 0; i < len; i++) {
        
        let front = arr[i];
        let back = arr[len];
        if (front + back == 0) return [front, back];
        if (front + back > 0) {
            i--;
            len--;
        } 
        
    }
    return false;
};


//commit test
let test = sumZero(data);
console.log(test);
