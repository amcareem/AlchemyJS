/* You can also convert strings to numbers with parseInt and parseFloat.
Best practice is to use explicit conversion in most cases. Explicit conversion will make your
intentions obvious to your fellow programmers when they review/maintain your code */


/* Given a string, convert it to a number.
If the string is not a number, return 0. */

function toNumber(string) {
    string = +string;
    if( isNaN(string))
    {
        return 0;
    }
    return string;
}

module.exports = toNumber;

/* Alternative Way

function toNumber(string) {
    string = +string;
    return string || 0;
}

module.exports = toNumber; */