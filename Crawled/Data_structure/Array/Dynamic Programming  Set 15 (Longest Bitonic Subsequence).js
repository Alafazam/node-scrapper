Given an array of integers which is initially increasing and then decreasing, find the maximum value in the array.Method 1 (Linear Search)
We can traverse the array and keep track of maximum and element.  And finally return the maximum element.  Time Complexity:  O(n)
Method 2 (Binary Search)
We can modify the standard Binary Search algorithm for the given type of arrays.
i) If the mid element is greater than both of its adjacent elements, then mid is the maximum.
ii) If mid element is greater than its next element and smaller than the previous element then maximum lies on left side of mid.  Example array: {3, 50, 10, 9, 7, 6}
iii) If mid element is smaller than its next element and greater than the previous element then maximum lies on right side of mid.  Example array: {2, 4, 6, 8, 10, 3, 1}Time Complexity:  O(Logn)This method works only for distinct numbers.  For example, it will not work for an array like {0, 1, 1, 2, 2, 2, 2, 2, 3, 4, 4, 5, 3, 3, 2, 2, 1, 1}. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Divide and Conquer