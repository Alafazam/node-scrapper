Given a sorted array arr[] of n elements, write a function to search a given element x in arr[].A simple approach is to do linear search, i.e., start from the leftmost element of arr[] and one by one compare x with each element of arr[], if x matches with an element, return the index. If x doesn’t match with any of elements, return -1.The time complexity of above algorithm is O(n).  The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Logn). We basically ignore half of the elements just after one comparison.
1) Compare x with the middle element.
2) If x matches with middle element, we return the mid index.
3) Else If x is greater than the mid element, then x can only lie in right half subarray after the mid element.  So we recur for right half.
4) Else (x is smaller) recur for the left half.Following is Recursive C implementation of Binary Search.Output:
Element is present at index 3
Following is Iterative C implementation of Binary Search.Output:
Element is present at index 3
Time Complexity:
The time complexity of Binary Search can be written as

T(n) = T(n/2) + c 
The above recurrence can be solved either using Recurrence T ree method or Master method. It falls in case II of Master Method and solution of the recurrence is .Auxiliary Space: O(1) in case of iterative implementation. In case of recursive implementation, O(Logn) recursion call stack space.Algorithmic Paradigm: Divide and ConquerFollowing are some interesting articles based on Binary Search.
The Ubiquitous Binary Search
Interpolation search vs Binary search
Find the minimum element in a sorted and rotated array
Find a peak element
Find a Fixed Point in a given array
Count the number of occurrences in a sorted array
Median of two sorted arrays
Floor and Ceiling in a sorted array
Find the maximum element in an array which is first increasing and then decreasingPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.