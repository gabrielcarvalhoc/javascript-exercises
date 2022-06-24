const fibonacci = function(num) {
    let sequence = [1, 1];
    
    for (let i = 2; i < num; i++) {
        let number = sequence[i - 1] + sequence[i - 2];
        sequence.push(number);
    }

    if (num > 0) {
        return sequence[num - 1];
    } else {
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;
