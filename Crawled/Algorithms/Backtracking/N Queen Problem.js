There are n stairs, a person standing at the bottom wants to reach the top. The person can climb either 1 stair or 2 stairs at a time. Count the number of ways, the person can reach the top.Consider the example shown in diagram.   The value of n is 3. There are 3 ways to reach the top. The diagram is taken from Easier Fibonacci puzzles 
 
 
 
 
 
 More Examples: 

Input: n = 1
Output: 1
There is only one way to climb 1 stair

Input: n = 2
Output: 2
There are two ways: (1, 1) and (2)

Input: n = 4
Output: 5
(1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (1, 2, 1), (2, 2)

We can easily find recursive nature in above problem. The person can reach n’th stair from either (n-1)’th stair or from (n-2)’th stair.  Let the total number of ways to reach n’t stair be ‘ways(n)’.  The value of ‘ways(n)’ can be written as following.

    ways(n) = ways(n-1) + ways(n-2)

The above expression is actually the expression for Fibonacci numbers, but there is one thing to notice, the value of ways(n) is equal to fibonacci(n+1).ways(1) = fib(2) = 1
ways(2) = fib(3) = 2
ways(3) = fib(4) = 3So we can use function for fibonacci numbers to find the value of ways(n). Following is C++ implementation of the above idea. Output:
Number of ways = 5
The time complexity of the above implementation is exponential (golden ratio raised to power n).  It can be optimized to work in O(Logn) time using the previously discussed Fibonacci function optimizations. Generalization of the above problem
How to count number of ways if the person can climb up to m stairs for a given value m? For example if m is 4, the person can climb 1 stair or 2 stairs or 3 stairs or 4 stairs at a time.We can write the recurrence as following.

   ways(n, m) = ways(n-1, m) + ways(n-2, m) + ... ways(n-m, m) 
Following is C++ implementation of above recurrence.Output:
Number of ways = 5
The time complexity of above solution is exponential.  It can be optimized to O(mn) by using dynamic programming.  Following is dynamic programming based solution.  We build a table res[] in bottom up manner.Output:
Number of ways = 5
This article is contributed by Abhishek. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above