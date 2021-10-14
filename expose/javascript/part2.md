1. Line 12 will print out the final value of ```i``` at the end of the for loop, which is *3*. There isn't an error because we used ```var```, which is not block-scope. Also, the reason why ```i = 3``` is because the ```prices.length = 3```. By the 4th iteration of the for-loop (```i = 3```), ```i``` is no longer < ```prices.length```. So we will exit the for-loop with the final value of ```i``` being 3.
   
2. Line 13 will print out the final value of ```discountedPrice``` after the for-loop is done executing, which is *150*. There isn't any error because we also used ```var``` to declare ```discountedPrice```. Hence, we can use it even outside of the for-loop. The reason why ```discountedPrice = 150``` is because the last value of ```i``` that can still be used inside the for-loop is 2. We know that ```discountedPrice = prices[i] * (1 - discount)```. If we plug in all appropriate values, we will have ```discountedPrice = prices[2] * (1 - discount)```, which equals to ```300 * (1 - 0.5) = 150```.
   
3. Line 14 will print out the final value of ```finalPrice``` after the for-loop is done executing, which is *150*. There isn't any error because we also used ```var``` to declare ```finalPrice```. The reason why ```finalPrice = 150``` is because the final value of ```discountedPrice``` is 150. We know that ```finalPrice = Math.round(discountedPrice * 100)/100;```. If we plug in all appropriate values, we will have ```finalPrice = Math.round(150 * 100)/100 = 15000/100 = 150```.

4. ```discountPrices([100, 200, 300], .5)``` will return ```[50, 100, 150]``` because we are looping through the original array of prices, reducing the value of each item by half then add these new discounted prices into the new array call ```discounted```. This is what the function returns. Also, since we declared ```discounted``` with the ```var``` keyword, we can still access its final value even outside of the for-loop.

5. Line 12 gives me an error: ```ReferenceError: i is not defined```. This makes sense because we using the keyword ```let``` to declare ```i```. So ```i``` will only have the block-scope within the for-loop. Since line 12 is outside of the for-loop, using ```i``` will cause an error.

6. Line 13 will also give me an error: ```ReferenceError: discountedPrice is not defined```. The reason is similar to that in question 5: we are using the ```let``` keyword to declare ```discountedPrice``` inside the for-loop. Hence, using that variable in line 13, which is outside of the for-loop, will cause an error.

7. Line 14 will print out *150*, which is the final value of ```finalPrice```. The reason why this line doesn't throw an error despite using ```let``` is that we are declaring ```finalPrice``` outside of the for-loop and inside the general function. Thus, we can still access it before, inside and after the for-loop (which is inside the general function).

8. This function will return ```[50, 100, 150]``` because we are looping through the original array of prices, reducing the value of each item by half then add these new discounted prices into the new array call ```discounted```. This is what the function returns. Also, despite declaring ```discounted``` with the ```let``` keyword, we are declaring it outside of the for-loop and inside the general function. Thus, we can still access it before, inside and after the for-loop (which is inside the general function).

9. ```ReferenceError: i is not defined``` is thrown because ```i``` is declared using ```let``` inside the for-loop block. Thus, it's not visible outside of the for-loop block, which is line 11.

10. Line 12 will print out the length of the array ```prices```, which is 3 for the specific case of ```[100, 200, 300]```. The reason why this doesn't throw any errors despite declaring the ```length``` variable with a ```const``` keyword is that we are not trying to reassign a new value to ```length```. We just want to access and return its value.

11. This function will return ```[50, 100, 150]```. Despite declaring the ```discounted``` array with a ```const``` keyword, it does not define a constant array. It define a constant reference to the array. Thanks to this, we can still modify the elements of a constant array like pushing new elements to the array. Thus, we can still get a correct ```discounted``` array despite using ```const``` keyword. (Reference: https://www.w3schools.com/js/js_array_const.asp)

## Data Types
12. A. ```student.name```
    
    B. ```student['Grad Year']```

    C. ```student.greeting()```

    D. ```student['Favorite Teacher'].name```

    E. ```student.courseLoad[0]``` (Note: I am assuming "first index" is index 0 of the array. If I misunderstood and the question is asking for the item at index 1, the answer will be ```student.courseLoad[1]```)

## Basic Operators & Type Conversion 
13. Arithmetic\
    A. ```'32'```. This output is a string because '3' is a string; so the plus sign here acts to concatenate strings together. Thus, Javascript converts the number 2 into its string representation '2' and concatenate with '3'. Hence, the output is the string '32'.

    B. ```1```. This output is a number. Despite '3' is a string, the negative sign only has a mathematical meaning (which is subtracting). Thus, Javascript converts the string '3' into its number representation and subtract 2 from it. Hence, the output is the number 1.

    C. ```3```. This output is a number because ```null``` is equivalent to number 0 in Javascript. Thus, we can treat this expression as 3 + 0 = 3. Hence, the output is the number 3.

    D. ```0```. This putput is a number because ```false``` and ```null``` is equivalent to number 0 in Javascript. Thus, we can treat this expression as 0 + 0 = 0. Hence, the output is the number 0.

    E. ```'3undefined'```. This output is a string. This is similar to expression A. Since '3' is a string, the plus sign here acts to concatenate strings together. Thus, Javascript converts ```undefined``` into its string representation ```'undefined'``` and concatenate with '3'. Hence, the output is the string ```'3undefined'```.

    F. ```NaN```. This output is a number. Despite '3' is a string, the negative sign only has a mathematical meaning (which is subtracting). Thus, Javascript converts the string '3' into its number representation and subtract ```NaN``` (which s the equivalent value of ```undefined```) from it. Since ```3 - NaN = NaN```, the output is the number ```NaN```.

14. Comparison\
    A. ```true```. This expression evaluates to ```true``` because when comparing values of different types, JavaScript converts the values to numbers. Thus, the string '2' is converted to the number 2. Since 2 > 1 is true, the output is ```true```.
    
    B. ```false```. Since '2' and '12' are of the same type (i.e strings), Javascript will compare them character by character. Since '2' comes after '1' in the "lexicographical” order, '2' is greater than '1' and not less than. Thus, '2' < '12' is ```false```.

    C. ```true```. This expression evaluates to ```true``` because when comparing values of different types, JavaScript converts the values to numbers. Thus, the string '2' is converted to the number 2. Since 2 == 2 is true, the output is ```true```.

    D. ```false```. Since === is treated as a strict equality, there is no type conversion. Since 2 is a number and '2' is a string, they are not equal. Thus, the output is ```false```.

    E. ```false```. Since they are of different types, Javascript converts them both into their number representation: true is equivalent to 1. Since 1 == 2 is false, the output is ```false```.

    F. ```true```. Since 2 is not an intuitively “empty” value like 0/ null/ undefined/ etc, Boolean(2) will be evaluated to true. Since true === true is correct without needing any further conversion, the output is ```true```.

15. 
 
