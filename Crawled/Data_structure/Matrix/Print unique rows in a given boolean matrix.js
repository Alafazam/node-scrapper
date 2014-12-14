Given two arrays X[] and Y[] of positive integers, find number of pairs such that                                 x^y > y^x where x is an element from X[] and y is an element from Y[].Examples:The brute force solution is to consider each element of X[] and Y[], and check whether the given condition satisfies or not. Time Complexity of this solution is O(m*n) where m and n are sizes of given arrays.  Following is C++ code based on brute force solution.Efficient Solution: 
The problem can be solved in O(nLogn + mLogn) time. The trick here is, if y > x then x^y > y^x with some exceptions.  Following are simple steps based on this trick.1) Sort array Y[].
2) For every x in X[], find the index idx of smallest number greater than x (also called ceil of x) in Y[] using binary search or we can use the inbuilt function upper_bound() in algorithm library.
3)  All the numbers after idx satisfy the relation so just add (n-idx) to the count.Base Cases and Exceptions:
Following are exceptions for x from X[] and y from Y[]
If x = 0, then the count of pairs for this x is 0.
If x = 1, then the count of pairs for this x is equal to count of 0s in Y[].
The following cases must be handled separately as they don’t follow the general rule that x smaller than y means x^y is greater than y^x.
a) x = 2, y = 3 or 4
b) x = 3, y = 2
Note that the case where x = 4 and y = 2 is not thereFollowing diagram shows all exceptions in tabular form.  The value 1 indicates that the corresponding (x, y) form a valid pair.
Following is C++ implementation.  In the following implementation, we pre-process the Y array and count 0, 1, 2, 3 and 4 in it, so that we can handle all exceptions in constant time. The array NoOfY[] is used to store the counts.Output:
Total pairs = 3
Time Complexity : Let m and n be the sizes of arrays X[] and Y[] respectively. The sort step takes O(nLogn) time. Then every element of X[] is searched in Y[] using binary search. This step takes O(mLogn) time. Overall time complexity is O(nLogn + mLogn).This article is contributed by Shubham Mittal. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.