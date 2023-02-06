const removeFromArray = function (arr, ...removeArgs) {
    for (const arg of removeArgs) {
        for (let i = 0; i < arr.length;i++) {
            if (arg === arr[i]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
