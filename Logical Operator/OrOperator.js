/* There are cases in code where we want to say "this condition" or "this other condition".
If either of the conditions are true, let's do something!

It would be quite ugly to write this with if statements every time.
We can accomplish the same functionality with the Logical OR (||) operator: */


function willEat(hasPizza, hasDonuts, hasCookies) {
    return hasPizza || hasDonuts || hasCookies;
}

module.exports = willEat;