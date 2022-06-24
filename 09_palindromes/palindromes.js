const palindromes = function (string) {
    let modifiedString = string.replace(/\s|[.,!]/g, '').toLowerCase()
    let reverseString = modifiedString.split('').reverse().join('');

    return modifiedString === reverseString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
