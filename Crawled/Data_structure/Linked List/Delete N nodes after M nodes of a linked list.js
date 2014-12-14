Given a Linked List of integers, write a function to modify the linked list such that all even numbers appear before all the odd numbers in the modified linked list.  Also, keep the order of even and odd numbers same.Examples:
Input: 17->15->8->12->10->5->4->1->7->6->NULL
Output: 8->12->10->4->6->17->15->5->1->7->NULLInput: 8->12->10->5->4->1->6->NULL
Output: 8->12->10->4->6->5->1->NULL// If all numbers are even then do not change the list
Input: 8->12->10->NULL
Output: 8->12->10->NULL// If all numbers are odd then do not change the list
Input: 1->3->5->7->NULL
Output: 1->3->5->7->NULLMethod 1
The idea is to get pointer to the last node of list.  And then traverse the list starting from the head node and move the odd valued nodes from their current position to end of the list.Thanks to blunderboy for suggesting this method.Algorithm:
…1) Get pointer to the last node.
…2) Move all the odd nodes to the end.
……..a) Consider all odd nodes before the first even node and move them to end.
……..b) Change the head pointer to point to the first even node.
……..b) Consider all odd nodes after the first even node and move them to the end.Output:Time complexity:  O(n)Method 2
The idea is to split the linked list into two: one containing all even nodes and other containing all odd nodes. And finally attach the odd node linked list after the even node linked list.
To split the Linked List, traverse the original Linked List and move all odd nodes to a separate Linked List of all odd nodes. At the end of loop, the original list will have all the even nodes and the odd node list will have all the odd nodes. To keep the ordering of all nodes same, we must insert all the odd nodes at the end of the odd node list. And to do that in constant time, we must keep track of last pointer in the odd node list.Time complexity: O(n)Please write comments if you find the above code/algorithm incorrect, or find other ways to solve the same problem.