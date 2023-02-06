const repeatString = function (string,num) {
    let newString = '';
    let i = num;
    if (i < 0) {
        newString = "ERROR";
    }
    while (i > 0) {
        newString += string;
        i--;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
