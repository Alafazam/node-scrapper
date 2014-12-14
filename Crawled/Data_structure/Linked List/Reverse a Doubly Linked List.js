We strongly recommend to refer following post as a prerequisite of this post.Linked List Introduction
Inserting a node in Singly Linked ListA Doubly Linked List (DLL) contains an extra pointer, typically called previous pointer, together with next pointer and data which are there in singly linked list.Following is representation of a DLL node in C language.Following are advantages/disadvantages of doubly linked list over singly linked list.Advantages over singly linked list
1) A DLL can be traversed in both forward and backward direction.
2) The delete operation in DLL is more efficient if pointer to the node to be deleted is given.
In singly linked list, to delete a node, pointer to the previous node is needed. To get this previous node, sometimes the list is traversed. In DLL, we can get the previous node using previous pointer.Disadvantages over singly linked list
1) Every node of DLL Require extra space for an previous pointer. It is possible to implement DLL with single pointer though (See this and this).
2) All operations require an extra pointer previous to be maintained. For example, in insertion, we need to modify previous pointers together with next pointers.  For example in following functions for insertions at different positions, we need 1 or 2 extra steps to set previous pointer.Insertion
A node can be added in four ways
1) At the front of the DLL
2) After a given node.
3) At the end of the DLL
4) Before a given node.1) Add a node at the front: (A 5 steps process)
The new node is always added before the head of the given Linked List. And newly added node becomes the new head of DLL. For example if the given Linked List is 10152025 and we add an item 5 at the front, then the Linked List becomes 510152025. Let us call the function that adds at the front of the list is push(). The push() must receive a pointer to the head pointer, because push must change the head pointer to point to the new node (See this)Following are the 5 steps to add node at the front.Four steps of the above five steps are same as the 4 steps used for inserting at the front in singly linked list.  The only extra step is to change previous of head.2) Add a node after a given node.: (A 7 steps process)
We are given pointer to a node as prev_node, and the new node is inserted after the given node. Five of the above steps step process are same as the 5 steps used for inserting after a given node in singly linked list.  The two extra steps are needed to change previous pointer of new node and previous pointer of new node’s next node.3) Add a node at the end: (7 steps process)
The new node is always added after the last node of the given Linked List. For example if the given DLL is 510152025 and we add an item 30 at the end, then the DLL becomes 51015202530.
Since a Linked List is typically represented by the head of it, we have to traverse the list till end and then change the next of last node to new node.Following are the 7 steps to add node at the end. Six of the above 7 steps are same as the 6 steps used for inserting after a given node in singly linked list.  The one extra step is needed to change previous pointer of new node.4) Add a node before a given node
This is left as an exercise for the readers.A complete working program to test above functions.
Following is complete C program to test above functions.