## Solution : 

```js
var fizzBuzz = function(n) {
    let newArray=[]
    for(let i=1 ;i<=n ;i++){
        if(i%5===0 && i%3===0){
            newArray.push("FizzBuzz")
            continue;
        }
        if(i%5===0){
            newArray.push("Buzz")
            continue;
        }
         if(i%3===0){
            newArray.push("Fizz")
             continue;
        }else{
            newArray.push(i.toString())
            continue;
        }
        
        
        
        
    }
    return newArray
};
```
Here's the unit test code for the `isHappy` function:  [test file here](./fizzBuzz.test.js)
