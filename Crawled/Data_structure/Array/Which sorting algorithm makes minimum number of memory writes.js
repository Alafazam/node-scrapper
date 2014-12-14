Given an array arr[] of integers, find out the difference between any two elements such that larger element appears after the smaller number in arr[]. Examples: If array is [2, 3, 10, 6, 4, 8, 1] then returned value should be 8 (Diff between 10 and 2).  If array is [ 7, 9, 5, 6, 3, 2 ] then returned value should be 2 (Diff between 7 and 9)Method 1 (Simple)
Use two loops.  In the outer loop, pick elements one by one and in the inner loop calculate the difference of the picked element with every other element in the array and compare the difference with the maximum difference calculated so far. Time Complexity: O(n^2)
Auxiliary Space: O(1)Method 2 (Tricky and Efficient)
In this method, instead of taking difference of the picked element with every other element, we take the difference with the minimum element found so far. So we need to keep track of 2 things:
1) Maximum difference found so far (max_diff).
2) Minimum number visited so far (min_element).Time Complexity: O(n)
Auxiliary Space: O(1)Method 3 (Another Tricky Solution)
First find the difference between the adjacent elements of the array and store all differences in an auxiliary array diff[] of size n-1. Now this problems turns into finding the maximum sum subarray of this difference array.
Thanks to Shubham Mittal for suggesting this solution.Output:
98
This method is also O(n) time complexity solution, but it requires O(n) extra spaceTime Complexity: O(n)
Auxiliary Space: O(n)We can modify the above method to work in O(1) extra space. Instead of creating an auxiliary array, we can calculate diff and max sum in same loop. Following is the space optimized version.Time Complexity: O(n)
Auxiliary Space: O(1)Please write comments if you find any bug in above codes/algorithms, or find other ways to solve the same problem