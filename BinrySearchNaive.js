//this functin accepts a sorted array anda value to search for
// return the index at which the value exists otherwise return -1


function binarySearch(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let left = 0;
    let right = arr.length -1;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == num) {
            return mid;
        } else if(arr[mid] < num) {
            left = mid +1;
        } else if (arr[mid]> num) {
            right = mid -1;
        }
    }
    return -1;

  }


  console.log(binarySearch([1, 2, 3, 4,5], 6));