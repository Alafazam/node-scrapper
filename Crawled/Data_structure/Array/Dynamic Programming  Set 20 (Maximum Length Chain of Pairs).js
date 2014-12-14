Given an array and a value, find if there is a triplet in array whose sum is equal to the given value. If there is such a triplet present in array, then print the triplet and return true. Else return false.  For example, if the given array is {12, 3, 4, 1, 6, 9} and given sum is 24, then there is a triplet (12, 3 and 9) present in array whose sum is 24. Method 1 (Naive) 
A simple method is to generate all possible triplets and compare the sum of every triplet with the given value. The following code implements this simple method using three nested loops.Output:

Triplet is 4, 10, 8

Time Complexity: O(n^3)
Method 2 (Use Sorting)
Time complexity of the method 1 is O(n^3). The complexity can be reduced to O(n^2) by sorting the array first, and then using method 1 of this post in a loop.
1) Sort the input array.
2) Fix the first element as A[i] where i is from 0 to array size – 2.  After fixing the first element of triplet, find the other two elements using method 1 of this post.Output:

Triplet is 4, 8, 10

Time Complexity: O(n^2)Note that there can be more than one triplet with the given sum. We can easily modify the above methods to print all triplets.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.