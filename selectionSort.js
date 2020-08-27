
function returnLargeArr(num) {
    let storage = [];
    for (let i = 0; i < num; i++) {
        let randonNum = Math.floor(Math.random() * 20000 - 200);
        storage.push(randonNum);
    };
    return storage
};


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
            let temp = arr[i];
            arr[i] = arr[minNum];
            arr[minNum] = temp;
        }
    }
    var end = new Date().getTime();
    console.log(`Execution Time: ${end - start} ms`)
    return arr;
};


let result = selection(returnLargeArr(100000));
