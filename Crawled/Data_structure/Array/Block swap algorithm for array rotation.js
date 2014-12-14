Write a C program that, given an array A[] of n numbers and another number x, determines whether or not there exist two elements in S whose sum is exactly x. METHOD 1 (Use Sorting)Algorithm:

hasArrayTwoCandidates (A[], ar_size, sum)
1) Sort the array in non-decreasing order.
2) Initialize two index variables to find the candidate 
   elements in the sorted array.
       (a) Initialize first to the leftmost index: l = 0
       (b) Initialize second  the rightmost index:  r = ar_size-1
3) Loop while l < r.
       (a) If (A[l] + A[r] == sum)  then return 1
       (b) Else if( A[l] + A[r] <  sum )  then l++
       (c) Else r--    
4) No candidates in whole array - return 0

Time Complexity: Depends on what sorting algorithm we use.  If we use Merge Sort or Heap Sort then (-)(nlogn) in worst case.  If we use Quick Sort then O(n^2) in worst case.
Auxiliary Space : Again, depends on sorting algorithm. For example auxiliary space is O(n) for merge sort and O(1) for Heap Sort.Example:
Let Array be  {1, 4, 45, 6, 10, -8} and sum to find be 16Sort the array
A = {-8, 1, 4, 6, 10, 45}Initialize l = 0,  r = 5
A[l] + A[r] ( -8 + 45)  >  16    => decrement r.  Now r = 10
A[l] + A[r] ( -8 + 10)  <  2      =>  increment l.  Now l = 1
A[l] + A[r] ( 1 + 10)   <  16    =>  increment l.  Now l = 2
A[l] + A[r] ( 4 + 10)   <  14    =>  increment l.  Now l = 3
A[l] + A[r] ( 6 + 10)  == 16    =>  Found candidates (return 1)Note: If there are more than one pair having the given sum then this algorithm reports only one. Can be easily extended for this though.Implementation:
METHOD 2 (Use Hash Map)
Thanks to Bindu for suggesting this method and thanks to Shekhu for providing code.
This method works in O(n) time if range of numbers is known.
Let sum be the given sum and A[] be the array in which we need to find pair.  Implementation:Time Complexity:  O(n)
Auxiliary Space: O(R) where R is range of integers.If range of numbers include negative numbers then also it works. All we have to do for negative numbers is to make everything positive by adding the absolute value of smallest negative integer to all numbers.Please write comments if you find any of the above codes/algorithms incorrect, or find other ways to solve the same problem.Tags: Hashing