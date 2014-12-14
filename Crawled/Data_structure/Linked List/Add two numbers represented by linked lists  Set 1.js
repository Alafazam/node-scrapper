We have discussed Linked List Introduction and Linked List Insertion in previous posts on singly linked list.Let us formulate the problem statement to understand the deletion process. Given a ‘key’, delete the first occurrence of this key in linked list.
To delete a node from linked list, we need to do following steps.
1) Find previous node of the node to be deleted.
2) Changed next of previous node.
3) Free memory for the node to be deleted.
Since every node of linked list is dynamically allocated using malloc() in C, we need to call free() for freeing memory allocated for the node to be deleted.Output:
Created Linked List:
 2  3  1  7
Linked List after Deletion of 1:
 2  3  7
Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.