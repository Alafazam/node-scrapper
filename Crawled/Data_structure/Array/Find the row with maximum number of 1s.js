Given an array of n integers, find the 3 elements such that a[i] < a[j] < a[k] and i < j < k in 0(n) time.  If there are multiple such triplets, then print any one of them.Examples:Source: Amazon Interview QuestionHint: Use Auxiliary SpaceSolution:
1) Create an auxiliary array smaller[0..n-1]. smaller[i] should store the index of a number which is smaller than arr[i] and is on left side of arr[i]. smaller[i] should contain -1 if there is no such element.
2) Create another auxiliary array greater[0..n-1]. greater[i] should store the index of a number which is greater than arr[i] and is on right side of arr[i]. greater[i] should contain -1 if there is no such element.
3) Finally traverse both smaller[] and greater[] and find the index i for which both smaller[i] and greater[i] are not -1.Output:

5 6 30 
Time Complexity: O(n)
Auxliary Space: O(n)Source: How to find 3 numbers in increasing order and increasing indices in an array in linear timeExercise:
1. Find a subsequence of size 3 such that arr[i] < arr[j] > arr[k].
2.  Find a sorted subsequence of size 4 in linear time Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above