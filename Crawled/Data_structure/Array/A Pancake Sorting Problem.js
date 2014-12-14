Given n numbers (both +ve and -ve), arranged in a circle, fnd the maximum sum of consecutive number. Examples:

Input: a[] = {8, -8, 9, -9, 10, -11, 12}
Output: 22 (12 + 8 - 8 + 9 - 9 + 10)

Input: a[] = {10, -3, -4, 7, 6, 5, -4, -1} 
Output:  23 (7 + 6 + 5 - 4 -1 + 10) 

Input: a[] = {-1, 40, -14, 7, 6, 5, -4, -1}
Output: 52 (7 + 6 + 5 - 4 - 1 - 1 + 40)
There can be two cases for the maximum sum:Case 1: The elements that contribute to the maximum sum are arranged such that no wrapping is there.  Examples: {-10, 2, -1, 5}, {-2, 4, -1, 4, -1}. In this case, Kadane’s algorithm will produce the result.Case 2: The elements which contribute to the maximum sum are arranged such that wrapping is there. Examples: {10, -12, 11}, {12, -5, 4, -8, 11}. In this case, we change wrapping to non-wrapping. Let us see how. Wrapping of contributing elements implies non wrapping of non contributing elements, so find out the sum of non contributing elements and subtract this sum from the total sum. To find out the sum of non contributing, invert sign of each element and then run Kadane’s algorithm.
Our array is like a ring and we have to eliminate the maximum continuous negative that implies maximum continuous positive in the inverted arrays. Finally we compare the sum obtained by both cases, and return the maximum of the two sums.Thanks to ashishdey0 for suggesting this solution.  Following is C implementation of the above method.Output:
Maximum circular sum is 31
Time Complexity: O(n) where n is the number of elements in input array.Note that the above algorithm doesn’t work if all numbers are negative e.g., {-1, -2, -3}.  It returns 0 in this case. This case can be handled by adding a pre-check to see if all the numbers are negative before running the above algorithm.Please write comments if you find any of the above codes/algorithms incorrect, or find other ways to solve the same problem.