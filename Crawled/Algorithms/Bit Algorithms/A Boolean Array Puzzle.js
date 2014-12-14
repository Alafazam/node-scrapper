Catalan numbers are a sequence of natural numbers that occurs in many interesting counting problems like following.1) Count the number of expressions containing n pairs of parentheses which are correctly matched. For n = 3, possible expressions are ((())), ()(()), ()()(),  (())(), (()()).2) Count the number of possible Binary Search Trees with n keys (See this)3) Count the number of full binary trees (A rooted binary tree is full if every vertex has either two children or no children)  with n+1 leaves.See this for more applications. The first few Catalan numbers for n = 0, 1, 2, 3, … are 1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, …Recursive Solution
Catalan numbers satisfy the following recursive formula.
Following is C++ implementation of above recursive formula.Output :
1 1 2 5 14 42 132 429 1430 4862
Time complexity of above implementation is equivalent to nth catalan number. The value of nth catalan number is exponential that makes the time complexity exponential.
Dynamic Programming Solution
We can observe that the above recursive implementation does a lot of repeated work (we can the same by drawing recursion tree).  Since there are overlapping subproblems, we can use dynamic programming for this.  Following is a Dynamic programming based implementation in C++.Output:
1 1 2 5 14 42 132 429 1430 4862 
Time Complexity: Time complexity of above implementation is O(n2)
Using Binomial Coefficient 
We can also use the below formula to find nth catalan number in O(n) time. We have discussed a O(n) approach to find binomial coefficient nCr.Output:
1 1 2 5 14 42 132 429 1430 4862
Time Complexity: Time complexity of above implementation is O(n).We can also use below formula to find nth catalan number in O(n) time..References:
http://en.wikipedia.org/wiki/Catalan_number

Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: Dynamic Programming, MathematicalAlgo