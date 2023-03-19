/* Write a function reverse that takes a string as an argument and
returns a string with all the letters reversed. */

function reverse(string) {
    let str = [];
    for (let j = string.length - 1; j >= 0; j--) {
        str = str + string[j]
    }
    return str;
}

module.exports = reverse;