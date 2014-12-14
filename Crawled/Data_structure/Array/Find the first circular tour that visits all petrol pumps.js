Given an array of integers, find all combination of four elements in the array whose sum is equal to a given value X.
For example, if the given array is {10, 2, 3, 4, 5, 9, 7, 8} and X = 23, then your function should print “3 5 7 8″ (3 + 5 + 7 + 8 = 23).Sources: Find Specific Sum and Amazon Interview QuestionA Naive Solution  is to generate all possible quadruples and compare the sum of every quadruple with X. The following code implements this simple method using four nested loopsOutput:
20, 30, 40, 1
Time Complexity: O(n^4)The time complexity can be improved to O(n^3) with the use of sorting as a preprocessing step, and then using method 1 of this  post to reduce a loop.Following are the detailed steps.
1) Sort the input array.
2) Fix the first element as A[i] where i is from 0 to n–3. After fixing the first element of quadruple, fix the second element as A[j] where j varies from i+1 to n-2.  Find remaining two elements in O(n) time, using the method 1 of this  post Following is C implementation of O(n^3) solution.Output:
1, 4, 6, 10
Time Complexity: O(n^3)This problem can also be solved in O(n^2Logn) complexity.  We will soon be publishing the O(n^2Logn) solution as a separate post. Please write comments if you find any of the above codes/algorithms incorrect, or find other ways to solve the same problem.