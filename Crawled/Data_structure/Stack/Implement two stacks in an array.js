Write a function to delete a given node in a doubly linked list. 
     (a) Original Doubly Linked List  


     (a) After deletion of head node  


     (a) After deletion of middle node  


     (a) After deletion of last node  


Algorithm
Let the node to be deleted is del.
1) If node to be deleted is head node, then change the head pointer to next current head.
2) Set next of previous to del, if previous to del exixts.
3) Set prev of next to del, if next to del exixts.Time Complexity: O(1)
Time Complexity: O(1)Please write comments if you find any of the above codes/algorithms incorrect, or find better ways to solve the same problem.