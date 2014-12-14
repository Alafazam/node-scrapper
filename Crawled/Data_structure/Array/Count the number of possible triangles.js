Given an array that contains both positive and negative integers, find the product of the maximum product subarray. Expected Time complexity is O(n) and only O(1) extra space can be used.Examples:

Input: arr[] = {6, -3, -10, 0, 2}
Output:   180  // The subarray is {6, -3, -10}

Input: arr[] = {-1, -3, -10, 0, 60}
Output:   60  // The subarray is {60}

Input: arr[] = {-2, -3, 0, -2, -40}
Output:   80  // The subarray is {-2, -40}

The following solution assumes that the given input array always has a positive ouput.  The solution works for all cases mentioned above.  It doesn’t work for arrays like {0, 0, -20, 0}, {0, 0, 0}.. etc.  The solution can be easily modified to handle this case.
It is similar to Largest Sum Contiguous Subarray problem.  The only thing to note here is, maximum product can also be obtained by minimum (negative) product ending with the previous element multiplied by this element.  For example, in array {12, 2, -3, -5, -6, -2}, when we are at element -2, the maximum product is multiplication of, minimum product ending with -6 and -2.Output:
Maximum Sub array product is 112
Time Complexity: O(n)
Auxiliary Space: O(1)This article is compiled by Dheeraj Jain and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above