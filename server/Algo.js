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
on each pass can store entire execution context into queue. So passed in function can be passed into a function
that says something like queue.push

react renders each return value in the queue

Add a conditional to function that a value equals the basecase
    if (basecase exists) create new execution context
        execute that function in that object
        containing the value of object stored at 
            add variable to be updated with current evaluated result for each 
            if 
            0 : store evaluated result of that recursive call
            1 : store evaluated result of that recursive call
            0 : 

const

function factorial (x) {
  if (x === 1) return 1;
  return x * factorial(x-1)
}


console.log(factorial(4))
//output--24
//basecase -- if (x === 1) return 1

    //return answer to function AKA output


*/



// function recursionBabie (input) {
//     //if 
//   }

// do not use any native array methods
// function Queue() {
//     this.storage = {};
//     this.index = 0;
// }

// Queue.prototype.add = function (value) {
//    this.storage[this.index] = value;
//    this.index++
// }

// Queue.prototype.remove = function (value) {
//     for (let index in this.storage) {
//         let removed = this.storage[0];
//         console.log(removed)
//         delete removed;
//         console.log(index)
//         console.log(this.storage[index])
//         console.log(this.storage[index++])

//         this.storage[index] = this.storage[index]
//     }

// }

// const line = new Queue();

// line.add(7);
// line.add(8);
// line.add(9);
// console.log(line.storage);
// line.remove()
// console.log(line.storage);

// function Stack() {
//     this.storage = {};
//     this.index = 0;
//   }
  
//   Stack.prototype.push = function (value) {
//     this.storage[this.index] = value;
//     this.index++;
//   }
  
//   Stack.prototype.pop = function () {
//     let popVar = this.storage[this.index - 1];
//     delete this.storage[this.index - 1]
//     this.index--
//     return popVar;
//   }
  
//   const collection = new Stack()
  
//   collection.push(6);
//   collection.push(9);
//   collection.push(8);
//   console.log(collection.storage)
//   console.log(collection.pop());