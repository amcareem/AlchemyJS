/*
Create JSON that can be parsed to a person object with 3 properties:
name: with any string value
age: with any number value
isReal: with any boolean value
*/

/* You'll notice that that the keys  are all within double-quotes.
This is required in JSON. Without it, this would not be valid JSON. */

const personJSON = `
    {
        "name" : "Happy",
        "age"  : 19,
        "isReal" : true 
    } 
`;

module.exports = personJSON;