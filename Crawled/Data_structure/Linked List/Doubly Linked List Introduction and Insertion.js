Given a linked list where every node represents a linked list and contains two pointers of its type:
(i) Pointer to next node in the main list (we call it ‘right’ pointer in below code)
(ii) Pointer to a linked list where this node is head (we call it ‘down’ pointer in below code).
All linked lists are sorted.  See the following exampleWrite a function flatten() to flatten the lists into a single linked list.  The flattened linked list should also be sorted.  For example, for the above input list, output list should be 5->7->8->10->19->20->22->28->30->35->40->45->50.The idea is to use Merge() process of merge sort for linked lists.  We use merge() to merge lists one by one. We recursively merge() the current list with already flattened list.
The down pointer is used to link nodes of the flattened list.Following is C implementation.Output:
5 7 8 10 19 20 20 22 30 35 40 45 50
Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.We have discussed Circular Linked List Introduction and Applications,  in the previous post on Circular Linked List. In this post, traversal operation is discussed. In a conventional linked list, we traverse the list from the head node and stop the traversal when we reach NULL.  In a circular linked list, we stop traversal when we reach the first node again.   Following is C code for linked list traversal.Complete C program to demonstrate traversal. Following is complete C program to demonstrate traversal of circular linked list.Output:
Contents of Circular Linked List
 11 2 56 12
You may like to see following posts on Circular Linked List
Split a Circular Linked List into two halves
Sorted insert for circular linked listWe will soon be discussing implementation of insert delete operations for circular linked lists.Please write comments if you find any bug in above code/algorithm, or find other ways to solve the same problem