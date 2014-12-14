Given a positive integer N, count all possible distinct binary strings of length N such that there are no consecutive 1’s.Examples:This problem can be solved using Dynamic Programming. Let a[i] be the number of binary strings of length i which do not contain any two consecutive 1’s and which end in 0. Similarly, let b[i] be the number of such strings which end in 1. We can append either 0 or 1 to a string ending in 0, but we can only append 0 to a string ending in 1. This yields the recurrence relation:

a[i] = a[i - 1] + b[i - 1]
b[i] = a[i - 1] 
The base cases of above recurrence are a[1] = b[1] = 1. The total number of strings of length i is just a[i] + b[i].Following is C++ implementation of above solution. In the following implementation, indexes start from 0. So a[i] represents the number of binary strings  for input length i+1. Similarly, b[i] represents binary strings for input length i+1.Output:
5
Source:
courses.csail.mit.edu/6.006/oldquizzes/solutions/q2-f2009-sol.pdfThis article is contributed by Rahul Jain. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: Dynamic Programming