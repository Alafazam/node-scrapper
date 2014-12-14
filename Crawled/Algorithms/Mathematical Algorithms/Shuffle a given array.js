The Fibonacci numbers are the numbers in the following integer sequence.0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 141, ……..In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation  with seed values Write a function int fib(int n) that returns . For example, if n = 0, then fib() should return 0. If n = 1, then it should return 1.  For n > 1, it should return  Following are different methods to get the nth Fibonacci number.Method 1 ( Use recursion ) 
A simple method that is a direct recusrive implementation mathematical recurance relation given above.Time Complexity: T(n) = T(n-1) + T(n-2) which is exponential.
We can observe that this implementation does a lot of repeated work (see the following recursion tree).  So this is a bad implementation for nth Fibonacci number.Extra Space: O(n) if we consider the fuinction call stack size, otherwise O(1).Method 2 ( Use Dynamic Programming )
We can avoid the repeated work done is the method 1 by storing the Fibonacci numbers calculated so far.  Time Complexity: O(n)
Extra Space: O(n)Method 3 ( Space Otimized Method 2 )
We can optimize the space used in method 2 by storing the previous two numbers only because that is all we need to get the next Fibannaci number in series.Time Complexity: O(n)
Extra Space: O(1)Method 4 ( Using power of the matrix {{1,1},{1,0}} )
This another O(n) which relies on the fact that if we n times multiply the matrix M = {{1,1},{1,0}} to itself (in other words calculate power(M, n )), then we get the (n+1)th Fibonacci number as the element at row and column (0, 0) in the resultant matrix.The matrix representation gives the following closed expression for the Fibonacci numbers:

Time Complexity: O(n)
Extra Space: O(1)Method 5 ( Optimized Method 4 )
The method  4 can be optimized to work in O(Logn) time complexity.  We can do recursive multiplication to get power(M, n) in the prevous method (Similar to the optimization done in this post)Time Complexity:  O(Logn)
Extra Space: O(Logn) if we consider the function call stack size, otherwise O(1).Please write comments if you find the above codes/algorithms incorrect, or find other ways to solve the same problem.References:
http://en.wikipedia.org/wiki/Fibonacci_number
http://www.ics.uci.edu/~eppstein/161/960109.htmlTags: Dynamic Programming, MathematicalAlgo