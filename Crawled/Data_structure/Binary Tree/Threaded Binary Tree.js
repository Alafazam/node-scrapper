Given a number n, write a function that generates and prints all binary numbers with decimal values from 1 to n.  Examples:

Input: n = 2
Output: 1, 10

Input: n = 5
Output: 1, 10, 11, 100, 101

A simple method is to run a loop from 1 to n, call decimal to binary inside the loop. Following is an interesting method that uses queue data structure to print binary numbers. Thanks to Vivek for suggesting this approach.
1) Create an empty queue of strings
2) Enqueue the first binary number “1” to queue.
3) Now run a loop for generating and printing n binary numbers.
……a) Dequeue and Print the front of queue.
……b) Append “0” at the end of front item and enqueue it.
……c) Append “1” at the end of front item and enqueue it.Following is C++ implementation of above algorithm.Output:
1
10
11
100
101
110
111
1000
1001
1010
This article is contributed by Abhishek. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above