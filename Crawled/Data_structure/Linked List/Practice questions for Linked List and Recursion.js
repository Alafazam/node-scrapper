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
You may like to try Practice MCQ Questions on Linked ListWe will soon be publishing more posts on Linked Lists.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.There are two singly linked lists in a system. By some programming error the end node of one of the linked list got linked into the second list, forming a inverted Y shaped list. Write a program to get the point where two linked list merge. 
Above diagram shows an example with two linked list having 15 as intersection point.Method 1(Simply use two loops)
Use 2 nested for loops. Outer loop will be for each node of the 1st list and inner loop will be for 2nd list. In the inner loop, check if any of nodes of 2nd list is same as the current node of first linked list. Time complexity of this method will be O(mn) where m and n are the number of nodes in two lists.Method 2 (Mark Visited Nodes)
This solution requires modifications to basic linked list data structure.  Have a visited flag with each node.  Traverse the first linked list and keep marking visited nodes.  Now traverse second linked list, If you see a visited node again then there is an intersection point, return the intersecting node. This solution works in O(m+n) but requires additional information with each node. A variation of this solution that doesn’t require modification to basic data structure can be implemented using hash.  Traverse the first  linked list and  store the addresses of visited nodes in a hash. Now traverse the second linked list and if you see an address that already exists in hash then return the intersecting node.Method 3(Using difference of node counts)
1) Get count of the nodes in first list, let count be c1.
2) Get count of the nodes in second list, let count be c2.
3) Get the difference of counts d = abs(c1 – c2)
4) Now traverse the bigger list from the first node till d nodes so that from here onwards both the lists have equal no of nodes.
5) Then we can traverse both the lists in parallel till we come across a common node. (Note that getting a common node is done by comparing the address of the nodes)Time Complexity: O(m+n)
Auxiliary Space: O(1)Method 4(Make circle in first list)
Thanks to Saravanan Man for providing below solution.
1. Traverse the first linked list(count the elements) and make a circular linked list. (Remember last node so that we can break the circle later on).
2. Now view the problem as find the loop in the second linked list. So the problem is solved.
3. Since we already know the length of the loop(size of first linked list) we can traverse those many number of nodes in second list, and then start another pointer from the beginning of second list. we have to traverse until they are equal, and that is the required intersection point.
4. remove the circle from the linked list.

Time Complexity: O(m+n)
Auxiliary Space: O(1)Method 5 (Reverse the first list and make equations)
Thanks to Saravanan Mani for providing this method.Advantage:  No Comparison of pointers.
Disadvantage : Modifying linked list(Reversing list).

Time complexity: O(m+n)
Auxiliary Space: O(1)Method 6 (Traverse both lists and compare addresses of last nodes) This method is only to detect if there is an intersection point or not. (Thanks to NeoTheSaviour for suggesting this)Time complexity of this method is O(m+n) and used Auxiliary space is O(1)
Please write comments if you find any bug in the above algorithm or a better way to solve the same problem.