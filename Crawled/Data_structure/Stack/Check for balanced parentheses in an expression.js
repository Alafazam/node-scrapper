Write a C function to reverse a given Doubly Linked ListSee below diagrams for example. 
     (a) Original Doubly Linked List  


     (b) Reversed Doubly Linked List  

Here is a simple method for reversing a Doubly Linked List.  All we need to do is swap prev and next pointers for all nodes, change prev of the head (or start) and change the head pointer in the end.Time Complexity: O(n)We can also swap data instead of pointers to reverse the Doubly Linked List. Method used for reversing array can be used to swap data.  Swapping data can be costly compared to pointers if size of data item(s) is more.Please write comments if you find any of the above codes/algorithms incorrect, or find better ways to solve the same problem.