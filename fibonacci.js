const fibonacci = function (n) {
    if (typeof n === 'string') {
        n = Number(n);
    }

    if (n < 0) {
        return "OOPS";
    } else if (isFinite(n)) {
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else {
            total = fibonacci(n - 1) + fibonacci(n - 2);
            return total;
        }
    }

}

module.exports = fibonacci

// console.log(fibonacci("1"));