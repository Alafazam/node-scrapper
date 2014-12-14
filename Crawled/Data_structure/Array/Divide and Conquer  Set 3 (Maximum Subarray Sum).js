This is an extension of median of two sorted arrays of equal size problem.  Here we handle arrays of unequal size also.The approach discussed in this post is similar to method 2 of equal size post.  The basic idea is same, we find the median of two arrays and compare the medians to discard almost half of the elements in both arrays. Since the number of elements may differ here, there are many base cases that need to be handled separately. Before we proceed to complete solution, let us first talk about all base cases.Let the two arrays be A[N] and B[M]. In the following explanation, it is assumed that N is smaller than or equal to M. Base cases:
The smaller array has only one element
Case 1: N = 1, M = 1.
Case 2: N = 1, M is odd
Case 3: N = 1, M is even
The smaller array has only two elements
Case 4: N = 2, M = 2
Case 5: N = 2, M is odd
Case 6: N = 2, M is evenCase 1: There is only one element in both arrays, so output the average of A[0] and B[0].Case 2: N = 1, M is odd
Let B[5] = {5, 10, 12, 15, 20}
First find the middle element of B[], which is 12 for above array.  There are following 4 sub-cases.
…2.1  If A[0] is smaller than 10, the median is average of 10 and 12.
…2.2  If A[0] lies between 10 and 12, the median is average of A[0] and 12.
…2.3  If A[0] lies between 12 and 15, the median is average of 12 and A[0].
…2.4  If A[0] is greater than 15, the median is average of 12 and 15.
In all the sub-cases, we find that 12 is fixed. So, we need to find the median of B[ M / 2 – 1 ], B[ M / 2 + 1], A[ 0 ] and take its average with B[ M / 2 ].Case 3:  N = 1, M is even
Let B[4] = {5, 10, 12, 15}
First find the middle items in B[], which are 10 and 12 in above example.  There are following 3 sub-cases.
…3.1  If A[0] is smaller than 10, the median is 10.
…3.2  If A[0] lies between 10 and 12, the median is A[0].
…3.3  If A[0] is greater than 10, the median is 12.
So, in this case, find the median of three elements B[ M / 2 – 1 ], B[ M / 2] and A[ 0 ].Case 4: N = 2, M = 2
There are four elements in total.  So we find the median of 4 elements.Case 5:  N = 2, M is odd
Let B[5] =  {5, 10, 12, 15, 20}
The median is given by median of following three elements: B[M/2], max(A[0], B[M/2 – 1]), min(A[1], B[M/2 + 1]).Case 6: N = 2, M is even
Let B[4] = {5, 10, 12, 15}
The median is given by median of following four elements: B[M/2], B[M/2 – 1], max(A[0], B[M/2 – 2]), min(A[1], B[M/2 + 1]) Remaining Cases:
Once we have handled the above base cases, following is the remaining process.
1) Find the middle item of A[] and middle item of B[].
…..1.1)  If the middle item of A[] is greater than middle item of B[], ignore the last half of A[], let length of ignored part is idx. Also, cut down  B[] by idx from the start.
…..1.2)  else, ignore the first half of A[], let length of ignored part is idx.  Also, cut down  B[] by idx from the last.Following is C implementation of the above approach.Output:
 10 
Time Complexity: O(LogM + LogN)Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Divide and Conquer