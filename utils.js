 function returnLargeArr(num) {
    let storage = [];
    for (let i = 0; i < num; i++) {
        let randonNum = Math.floor(Math.random() * 20000 - 200);
        storage.push(randonNum);
    };
    return storage
};

module.exports = {returnLargeArr}

