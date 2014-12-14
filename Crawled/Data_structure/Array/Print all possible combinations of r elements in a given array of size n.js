Given an an unsorted array, sort the given array. You are allowed to do only following operation on array.

flip(arr, i): Reverse array from 0 to i 
Unlike a traditional sorting algorithm, which attempts to sort with the fewest comparisons possible, the goal is to sort the sequence in as few reversals as possible. The idea is to do something similar to Selection Sort.  We one by one place maximum element at the end and reduce the size of current array by one. Following are the detailed steps. Let given array be arr[] and size of array be n.
1) Start from current size equal to n and reduce current size by one while it’s greater than 1. Let the current size be curr_size. Do following for every curr_size
……a) Find index of the maximum element in arr[0..curr_szie-1]. Let the index be ‘mi’
……b) Call flip(arr, mi)
……c) Call flip(arr, curr_size-1)See following video for visualization of the above algorithm.Output:
Sorted Array
6 7 10 11 12 20 23
Total O(n) flip operations are performed in above code.  The overall time complexity is O(n^2).References:
http://en.wikipedia.org/wiki/Pancake_sortingPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.