Given an array of integers and a number x, find the smallest subarray with sum greater than the given value.A simple solution is to use two nested loops. The outer loop picks a starting element, the inner loop considers all elements (on right side of current start) as ending element.  Whenever sum of elements between current start and end becomes more than the given number, update the result if current length is smaller than the smallest length so far.
Following is C++ implementation of simple approach.Output:
3
1
4 
Time Complexity: Time complexity of the above approach is clearly O(n2).Efficient Solution: This problem can be solved in O(n) time using the idea used in this post. Thanks to Ankit and Nitin for suggesting this optimized solution.Output:
3
1
4 
This article is contributed by Rahul Jain. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above