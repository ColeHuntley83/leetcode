//just a thought i was having about linear time searching
// two pointer solution to half the number of iteratins in a loop lsearch


function twoSearch(arr, val) {

let left = 0;
const midl = Math.floor((arr.length ) /2)
let mid = Math.floor((arr.length -1) /2)

for (; left <= midl; left++) {
    console.log(mid)
    if (arr[left] == val) return left;
    if (arr[mid] == val) return mid;
    mid++;
}
return -1;

};

//this is a stupid solution


let data = [3, 6, 4, 1, 7, 8, 2, 3,  5, 20, 40 , 22, 34, 43, 4, 33, 31];
let result = twoSearch(data, 4);
console.log(result);