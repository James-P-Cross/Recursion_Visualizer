/*
Interpreting the code
One form for just the basecase. . . ?
If a function is invoked, create new execution context
Cache values in some sort of object--Van said maybe a queue
“Maybe pass values into the queue instead of the function itself”
Queue of nested objects 
Each object a new form of the function
Running and returning new function
Hold data not in return value in separate property of that object
Must run entire function to know what values to display
Return
pulls out any data not being passed in the recursive call
    each recursive call stored in a queue database
Only needs to return the correct answer on its own like regular js would
    //Update data
    can compare data from previous q and if changed then display
    if 

store function definition in a variable for later use
store base case in variable for later use

Add a conditional to function that a value equals the basecase
    if (basecase exists) create new execution context
        execute that function in that object
        containing the value of object stored at 
            add variable to be updated with current evaluated result for each 
            if 
            0 : store evaluated result of that recursive call
            1 : store evaluated result of that recursive call

const

function factorial (x) {
  if (x === 1) return 1;
  return x * factorial(x-1)
}


console.log(factorial(4))
//output--24
//basecase -- if (x === 1) return 1


*/



// function recursionBabie (input) {
//     //if 
//   }