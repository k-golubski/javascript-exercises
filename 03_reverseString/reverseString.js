const reverseString = function (string) {
    const stringArray = string.split("");
    let revArray = stringArray.reverse();
    let revString = revArray.toString();
    let newString = revString.replace(/,/g,"");

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
