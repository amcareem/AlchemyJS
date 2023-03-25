// Replace an array of numbers with the words fizz and buzz

/* Write a function fizzBuzz that takes an array of numbers and replaces any number divisible
 by three with the word "fizz" and any number divisible by five with the word "buzz". 
 If a number is divisible by both three and five, replace it with "fizzbuzz" */



 function fizzBuzz(numbers) {
    let str =[];
    for(let i=0;i<numbers.length;i++)
    {
        if(numbers[i]%3===0)
            str+="fizz";
        if(numbers[i]%5===0)
        str+="buzz";
    }
    return str;
}

module.exports = fizzBuzz;

