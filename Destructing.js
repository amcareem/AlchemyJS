/* With destructuring we can "unpack" an object and assign its properties to new variables.

When learning JavaScript, you may often hear reference to ECMAScript,
which is a language specification that JavaScript adheres to.

The last several years ECMAScript has been releasing new editions,
adding features to the language specification. For example, in ES2015,
support was added for arrow functions () => {}, the class operator and the import syntax, among many other features.

Web browsers quickly adopt these features and add them to new versions.
However, these means older versions of the browser do not support these features.
For this reason, transpilers such as babeljs exist.
These transpilers will convert new language features into code that older browsers support.
You can configure transpilers for specific browser support and features you'd like to use. */


//deconstructing
/* With destructuring we can "unpack" an object and assign its properties to new variables.
 */
const obj = {
    a: 2,
    b: 3,
  }
  
  // destructure assignment
  const { a, b } = obj;
  
  console.log(a); // 2
  console.log(b); // 3



/* //deconstructing arrays
const arr = ["ahamed", "careem"];

const [a, b] = arr;

console.log(a); // ahamed
console.log(b); // careem */




