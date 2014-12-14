Question:
An element in a sorted array can be found in O(log n) time via binary search. But suppose I rotate the sorted array at some pivot unknown to you beforehand.  So for instance, 1 2 3 4 5 might become 3 4 5 1 2. Devise a way to find an element in the rotated array in O(log n) time.Solution:
Thanks to Ajay Mishra for initial solution.Algorithm:
Find the pivot point, divide the array in two sub-arrays and call binary search.
The main idea for finding pivot is – for a sorted (in increasing order) and pivoted array, pivot element is the only only element for which next element to it is smaller than it.
Using above criteria and binary search methodology we can get pivot element in O(logn) timeImplementation:Output:
Index of the element is 8
Index of the element is 0
Index of the element is 1
Index of the element is 3
Index of the element is 1
Index of the element is 0
Index of the element is 2
Please note that the solution may not work for cases where the input array has duplicates. Time Complexity O(logn)Please write comments if you find any bug in above codes/algorithms, or find other ways to solve the same problem.Tags: array