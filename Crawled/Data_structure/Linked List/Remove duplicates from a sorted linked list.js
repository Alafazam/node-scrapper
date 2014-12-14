Like arrays, Linked List is a linear data structure.  Unlike arrays, linked list elements are not stored at contiguous location; the elements are linked using pointers.Why Linked List?
Arrays can be used to store linear data of similar types, but arrays have following limitations.
1) The size of the arrays is fixed:  So we must know the upper limit on the number of elements in advance.  Also, generally, the allocated memory is equal to the upper limit irrespective of the usage.
2) Inserting a new element in an array of elements is expensive, because room has to be created for the new elements and to create room existing elements have to shifted. For example, in a system if we maintain a sorted list of IDs in an array id[].  id[] = [1000,  1010,  1050,  2000,  2040]. And if we want to insert a new ID 1005, then to maintain the sorted order, we have to move all the elements after 1000 (excluding 1000).
Deletion is also expensive with arrays until unless some special techniques are used. For example, to delete 1010 in id[], everything after 1010 has to be moved.Advantages over arrays
1) Dynamic size
2) Ease of insertion/deletionDrawbacks:
1) Random access is not allowed.  We have to access elements sequentially starting from the first node.  So we cannot do binary search with linked lists.
2) Extra memory space for a pointer is required with each element of the list.Representation in C:
A linked list is represented by a pointer to the first node of the linked list.  The first node is called head.  If the linked list is empty, then value of head is NULL.
Each node in a list consists of at least two parts:
1) data
2) pointer to the next node
In C, we can represent a node using structures.  Below is an example of a linked list node with an integer data.First Simple Linked List in C Let us create a simple linked list with 3 nodes.Linked List Traversal
In the previous program, we have created a simple linked list with three nodes.  Let us traverse the created list and print the data of each node.  For traversal, let us write a general purpose function printList() that prints any given list.Output:
 1  2  3
You may like to try Practice MCQ Questions on Linked ListWe will soon be publishing more posts on Linked Lists.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Given a singly linked list of characters, write a function that returns true if the given list is palindrome, else false.METHOD 1 (Use a Stack)
A simple solution is to use a stack of list nodes.  This mainly involves three steps.
1) Traverse the given list from head to tail and push every visited node to stack.
2) Traverse the list again. For every visited node, pop a node from stack and compare data of popped node with currently visited node.
3) If all nodes matched, then return true, else false.Time complexity of above method is O(n), but it requires O(n) extra space.  Following methods solve this with constant extra space.
METHOD 2 (By reversing the list)
This method takes O(n) time and O(1) extra space.
1)  Get the middle of the linked list.
2)  Reverse the second half of the linked list.
3)  Check if the first half and second half are identical.
4)  Construct the original linked list by reversing the second half again and attaching it back to the first halfTo divide the list in two halves, method 2 of this post is used.
When number of nodes are even, the first and second half contain exactly half nodes. The challenging thing in this method is to handle the case when number of nodes are odd.  We don’t want the middle node as part of any of the lists as we are going to compare them for equality.  For odd case, we use a separate variable ‘midnode’.  Output:
a->NULL
Palindrome

b->a->NULL
Not Palindrome

a->b->a->NULL
Is Palindrome

c->a->b->a->NULL
Not Palindrome

a->c->a->b->a->NULL
Not Palindrome

b->a->c->a->b->a->NULL
Not Palindrome

a->b->a->c->a->b->a->NULL
Is Palindrome
Time Complexity O(n)
Auxiliary Space: O(1)
METHOD 3 (Using Recursion)
Use two pointers left and right. Move right and left using recursion and check for following in each recursive call.
1) Sub-list is palindrome.
2) Value at current left and right are matching.If both above conditions are true then return true.The idea is to use function call stack as container. Recursively traverse till the end of list. When we return from last NULL, we will be at last node. The last node to be compared with first node of list.In order to access first node of list, we need list head to be available in the last call of recursion. Hence we pass head also to the recursive function. If they both match we need to compare (2, n-2) nodes. Again when recursion falls back to (n-2)nd node, we need reference to 2nd node from head. We advance the head pointer in previous call, to refer to next node in the list.However, the trick in identifying double pointer. Passing single pointer is as good as pass-by-value, and we will pass the same pointer again and again. We need to pass the address of head pointer for reflecting the changes in parent recursive calls.Thanks to Sharad Chandra for suggesting this approach.Output:
a->NULL
Not Palindrome

b->a->NULL
Not Palindrome

a->b->a->NULL
Is Palindrome

c->a->b->a->NULL
Not Palindrome

a->c->a->b->a->NULL
Not Palindrome

b->a->c->a->b->a->NULL
Not Palindrome

a->b->a->c->a->b->a->NULL
Is Palindrome
Time Complexity: O(n)
Auxiliary Space: O(n) if Function Call Stack size is considered, otherwise O(1).Please comment if you find any bug in the programs/algorithms or a better way to do the same. 