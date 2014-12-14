Given an array A[0 … n-1] containing n positive integers, a subarray A[i … j] is bitonic if there is a k with i = A[k + 1] >= .. A[j – 1] > = A[j].  Write a function that takes an array as argument and returns the length of the maximum length bitonic subarray.
Expected time complexity of the solution is O(n)Simple Examples
1) A[] = {12, 4, 78, 90, 45, 23}, the maximum length bitonic subarray is {4, 78, 90, 45, 23} which is of length 5.2) A[] = {20, 4, 1, 2, 3, 4, 2, 10}, the maximum length bitonic subarray is {1, 2, 3, 4, 2} which is of length 5.Extreme Examples
1) A[] = {10}, the single element is bitnoic, so output is 1.2) A[] = {10, 20, 30, 40}, the complete array itself is bitonic, so output is 4.3) A[] = {40, 30, 20, 10}, the complete array itself is bitonic, so output is 4.Solution
Let us consider the array {12, 4, 78, 90, 45, 23} to understand the soultion.
1) Construct an auxiliary array inc[] from left to right such that inc[i] contains length of the nondecreaing subarray ending at arr[i].
For for A[] = {12, 4, 78, 90, 45, 23}, inc[] is {1, 1, 2, 3, 1, 1} 2) Construct another array dec[] from right to left such that dec[i] contains length of nonincreasing subarray starting at arr[i].
For A[] = {12, 4, 78, 90, 45, 23}, dec[] is {2, 1, 1, 3, 2, 1}.3) Once we have the inc[] and dec[] arrays, all we need to do is find the maximum value of (inc[i] + dec[i] – 1).
For {12, 4, 78, 90, 45, 23}, the max value of (inc[i] + dec[i] – 1) is 5 for i = 3.Time Complexity: O(n)
Auxiliary Space: O(n)As an exercise, extend the above implementation to print the longest bitonic subarray also.  The above implementation only returns the length of such subarray. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.