Given an array which is sorted, but after sorting some elements are moved to either of the adjacent positions, i.e., arr[i] may be present at arr[i+1] or arr[i-1]. Write an efficient function to search an element in this array. Basically the element arr[i] can only be swapped with either arr[i+1] or arr[i-1].For example consider the array {2, 3, 10, 4, 40}, 4 is moved to next position and 10 is moved to previous position.Example:

Input: arr[] =  {10, 3, 40, 20, 50, 80, 70}, key = 40
Output: 2 
Output is index of 40 in given array

Input: arr[] =  {10, 3, 40, 20, 50, 80, 70}, key = 90
Output: -1
-1 is returned to indicate element is not present
A simple solution is to linearly search the given key in given array. Time complexity of this solution is O(n). We cab modify binary search to do it in O(Logn) time.  The idea is to compare the key with middle 3 elements, if present then return the index.  If not present, then compare the key with middle element to decide whether to go in left half or right half.  Comparing with middle element is enough as all the elements after mid+2 must be greater than element mid and all elements before mid-2 must be smaller than mid element.Following is C++ implementation of this approach.