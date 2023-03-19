/*
When an error is thrown, it stops execution and returns execution to the line where the error is caught.
The argument fn is a function that will throw an error when invoked. 
Catch the error that is thrown when invoking fn.
Modify catchError to return the error if one is thrown.
If no error is thrown, return false.
*/

function catchError(fn) {
    try{
        fn();
    }
    catch(err)
    {
       return err
    }
    return false;
}

module.exports = catchError;