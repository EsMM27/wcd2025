# ES6 Exercise  1 - Fundamentals

> Complete ALL the exercises in this section.

## Functions

1.  In the file `funcs.html` below complete the code to provide a function called ``multiply()`` that multiples **two** numbers.
    If two numbers are not given when invoked then assume the default value to be 0 (ZERO).  Test your solution works.

    ```html
    <html>  
    <head>
    <script>   
        
        // your code here

        alert(multiply());     // should print 0
        alert(multiply(1,2));  // should print 2
        alert(multiply(2));    // should print 0
    
    </script>
    </head>
    </html>

    ```

1.  In the file `funcs.html` change the function declaration for ``multiply()`` to a *function expression*. Test you solution works.

1.  In the file `funcs.html` add a function expression for ``sqr()``.  Test it works with the following invocations:

    ```javascript
    alert(sqr(3));     // should print 9
    alert(sqr(3));     // should print 16

    ```

1.  In the file `funcs.html` add this function expression and method invocation:

    ```javascript 
    var add = function (x,y) { 
        return x+y;
    }
    alert(add(1,1));

    ```

1.  Change the ``add`` function expression to use an *arrow function* syntax.  Test it still works.

1.  Change the ``sqr`` function expression to use an arrow function syntax.  Test it still works.

1.  Execute the code in the file `maps.html` below:

    ```html
    <html>  
    <head>
    
    <script>   
        
        // (a)
        var numbers = [1,2,3,4,5];
        var sqr = function(num) {
            return num*num;
        }
        var values = numbers.map(sqr);
        console.log(values);

        // (b)
        // var doubles = ...
        // console.log(`doubles = ${doubles}`);

        // (c)
        // var names = ["Alice","Bob","Charlie"];
        // ...        

    </script>
    </head>
    </html>

    ```

1.  Update ``maps.html`` at the section labeled (b) to use the ``map`` function with an embedded arrow function that returns an array of doubled values 
    from the ``numbers`` array. i.e. the console output should be:
    
    ```
    doubles = [2,4,6,8,10]
    
    ```

1.  Update ``maps.html`` at the section labeled (c) to use the ``map`` function with an embedded arrow function that returns an array of UPPERCASE string values 
    from the ``names`` array.  i.e. the console output should be:

    ```
    ["ALICE","BOB","CHARLIE"]

    ```
