const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    }
    else if (num1<0 || num2<0) {
        return "ERROR";
    } else {
        const lower = Math.min(num1, num2);
        const higher = Math.max(num1, num2);
        let total = 0;
        for (let i = higher; i >= lower; i--) {
            total += i;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
