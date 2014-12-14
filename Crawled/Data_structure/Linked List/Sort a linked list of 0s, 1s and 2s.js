Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.Method 1 (Process 2k nodes and recursively call for rest of the list) 
This method is basically an extension of the method discussed in this post.Output:
Given linked list
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
Modified Linked list
3 2 1 4 5 6 9 8 7 10 11 12 15 14 13 16 17 18 20 19Time Complexity: O(n)
Method 2  (Process k nodes and recursively call for rest of the list) 
The method 1 reverses the first k node and then moves the pointer to k nodes ahead.  So method 1 uses two while loops and processes 2k nodes in one recursive call.
This method  processes only k nodes in a recursive call.  It uses a third bool parameter b which decides whether to reverse the k elements or simply move the pointer.Output:
Given linked list
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
Modified Linked list
3 2 1 4 5 6 9 8 7 10 11 12 15 14 13 16 17 18 20 19Time Complexity: O(n)Source:
http://geeksforgeeks.org/forum/topic/amazon-interview-question-2Please write comments if you find the above code/algorithm incorrect, or find other ways to solve the same problem.