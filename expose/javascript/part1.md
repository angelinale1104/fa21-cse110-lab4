1. ```'values added: 20'``` will be printed by line 9. There isn't any error because we are using ```var``` (not ```let```), which has no block scope.

2. ```'final result: 20'``` will be printed by line 13. Again, there isn't any error because we are using ```var``` to declare and initialize ```result```. Thus, ```result``` will still be visible and usable even outside of the block that it was declared in, as long as that variable is still within its function scope.
   
3. ```'values added: 20'``` will be printed by line 9. There isn't any error because line 9 is still within the block scope of the variable ```result```.
   
4. Line 13 gives me an error: ```ReferenceError: result is not defined```. This makes sense because ```result``` was declared in the if-block. Thus, it will only be accessed within that block. So when we used ```result``` again in line 13, which is outside of the if-block, it will give us an error.
   
5. Line 9 gives me an error: ```TypeError: Assignment to constant variable```. This makes sense because we are using the ```const``` keyword to declare ```result```. As we have assigned its value to be 0 on line 5, we can no longer reassign a new value to it on line 6. Thus, line 9 will not print anything but just gives us an error.
   
6. Line 13 will also not print anything and just gives me an error: ```TypeError: Assignment to constant variable```. Once again, the explanation is similar to the one in question 5. Despite using the ```const``` keyword, we are trying to reassign a new value to a constant variable, which is not allowed.
