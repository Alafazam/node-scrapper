Given an array and an integer k, find the maximum for each and every contiguous subarray of size k.Examples:Input :
arr[] = {1, 2, 3, 1, 4, 5, 2, 3, 6}
k = 3
Output :
3 3 4 5 5 5 6Input :
arr[] = {8, 5, 10, 7, 9, 4, 15, 12, 90, 13}
k = 4
Output :
10 10 10 15 15 90 90Method 1 (Simple)
Run two loops. In the outer loop, take all subarrays of size k.  In the inner loop, get the maximum of the current subarray.Time Complexity: The outer loop runs n-k+1 times and the inner loop runs k times for every iteration of outer loop. So time complexity is O((n-k+1)*k) which can also be written as O(nk).
Method 2 (Use Self-Balancing BST)
1) Pick first k elements and create a Self-Balancing Binary Search Tree (BST) of size k.
2) Run a loop for i = 0 to n – k
…..a) Get the maximum element from the BST, and print it.
…..b) Search for arr[i] in the BST and delete it from the BST.
…..c) Insert arr[i+k] into the BST.Time Complexity: Time Complexity of step 1 is O(kLogk). Time Complexity of steps 2(a), 2(b) and 2(c) is O(Logk). Since steps 2(a), 2(b) and 2(c) are in a loop that runs n-k+1 times, time complexity of the complete algorithm is O(kLogk + (n-k+1)*Logk) which can also be written as O(nLogk).
Method 3 (A O(n) method: use Dequeue)
We create a Dequeue, Qi of capacity k, that stores only useful elements of current window of k elements. An element is useful if it is in current window and is greater than all other elements on left side of it in current window.  We process all array elements one by one and maintain Qi to contain useful elements of current window and these useful elements are maintained in sorted order. The element at front of the Qi is the largest and element at rear of Qi is the smallest of current window.  Thanks to Aashish for suggesting this method.Following is C++ implementation of this method.Output:
78 90 90 90 89
Time Complexity: O(n). It seems more than O(n) at first look.  If we take a closer look, we can observe that every element of array is added and removed at most once. So there are total 2n operations.
Auxiliary Space: O(k)Please write comments if you find the above codes/algorithms incorrect, or find other ways to solve the same problem.Tags: Queue, Stack-Queue, StackAndQueueGiven a string, reverse it using stack.  For example “GeeksQuiz” should be converted to “ziuQskeeG”.Following is simple algorithm to reverse a string using stack.Following is C program that implements above algorithm.Output:
Reversed string is ziuQskeeG

Time Complexity: O(n) where n is number of characters in stack.
Auxiliary Space: O(n) for stack.A string can also be reversed without using any auxiliary space. Following is a simple C program to implement reverse without using stack.Output:
Reversed string is ziuQskeeG
Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.