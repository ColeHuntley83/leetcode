let arr1 = [1, 2, 2, 2, 3, 4];
let arr2 = [1, 4, 4, 9, 16, 4];

function same(list1, list2) {
    if (list1.length !== list2.length) return false;
    let counter1 = {};
    let counter2 = {};
    for (let value of list1) {
        counter1[value] = ++counter1[value] || 1;
    }
    for (let value of list2) {
        counter2[value] = ++counter2[value] || 1;
    }
    for (let key in counter1) {
        if (!(key ** 2 in counter2)) return false;
        if (counter1[key] !== counter2[key ** 2]) return false;
    }

return true;
};

let result = same(arr1, arr2);
console.log(result);