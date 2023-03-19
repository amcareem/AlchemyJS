/* JavaScript Object Notation, or JSON, is a format for transferring JavaScript data.

The advantage of JSON is we can use it to send data across a network.JSON
We can get the same JSON as above by using JSON.stringify on an existing object */

function toJSON(obj) {
    return JSON.stringify(obj)
}

module.exports = toJSON;

