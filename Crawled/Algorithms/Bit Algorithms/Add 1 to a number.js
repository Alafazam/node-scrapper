Let 1 represent ‘A’, 2 represents ‘B’, etc.  Given a digit sequence, count the number of possible decodings of the given digit sequence.  Examples:

Input:  digits[] = "121"
Output: 3
// The possible decodings are "ABA", "AU", "LA"

Input: digits[] = "1234"
Output: 3
// The possible decodings are "ABCD", "LCD", "AWD"
An empty digit sequence is considered to have one decoding.  It may be assumed that the input contains valid digits from 0 to 9 and there are no leading 0’s, no extra trailing 0’s and no two or more consecutive 0’s.We strongly recommend to minimize the browser and try this yourself first.This problem is recursive and can be broken in sub-problems.  We start from end of the given digit sequence.  We initialize the total count of decodings as 0. We recur for two subproblems.
1) If the last digit is non-zero, recur for remaining (n-1) digits and add the result to total count.
2) If the last two digits form a valid character (or smaller than 27), recur for remaining (n-2) digits and add the result to total count.Following is C++ implementation of the above approach.Output:
Count is 3
The time complexity of above the code is exponential.  If we take a closer look at the above program, we can observe that the recursive solution is similar to Fibonacci Numbers.  Therefore, we can optimize the above solution to work in O(n) time using Dynamic Programming. Following is C++ implementation for the same.Output:
Count is 3
Time Complexity of the above solution is O(n) and it requires O(n) auxiliary space.  We can reduce auxiliary space to O(1) by using space optimized version discussed in the Fibonacci Number Post. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: Dynamic Programming, Fibonacci numbers, MathematicalAlgo