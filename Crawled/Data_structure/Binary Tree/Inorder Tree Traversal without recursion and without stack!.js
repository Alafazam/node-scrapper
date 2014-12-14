A node is a leaf node if both left and right child nodes of it are NULL. Here is an algorithm to get the leaf node count.
Example TreeExample TreeLeaf count for the above tree is 3.Implementation:Time & Space Complexities:  Since this program is similar to traversal of tree, time and space complexities will be same as Tree traversal (Please see our Tree Traversal post for details)Please write comments if you find any bug in the above programs/algorithms or other ways to solve the same problem. Deque or Double Ended Queue is a generalized version of Queue data structure that allows insert and delete at both ends.Operations on Deque:
Mainly the following four basic operations are performed on queue:insetFront(): Adds an item at the front of Deque.
insertLast(): Adds an item at the rear of Deque.
 deleteFront(): Deletes an item from front of Deque.
 deleteLast(): Deletes an item from rear of Deque.In addition to above operations, following operations are also supported
 getFront(): Gets the front item from queue.
 getRear(): Gets the last item from queue.
 isEmpty(): Checks whether Deque is empty or not.
 isFull(): Checks whether Deque is full or not.Applications of Deque:
Since Deque supports both stack and queue operations, it can be used as both.  The Deque data structure supports clockwise and anticlockwise rotations in O(1) time which can be useful in certain applications.
Also, the problems where elements need to be removed and or added both ends can be efficiently solved using Deque.  For example see Maximum of all subarrays of size k problem..
See wiki page for another example of A-Steal job scheduling algorithm where Deque is used as deletions operation is required at both ends.Language Support:
C++ STL provides implementation of Deque as std::deque and Java provides Deque interface.  See this for more details.Implementation:
A Deque can be implemented either using a doubly linked list or circular array.   In both implementation, we can implement all operations in O(1) time.  We will soon be discussing C/C++ implementation of Deque Data structure.Please write comments if you find the above codes/algorithms incorrect, or find other ways to solve the same problem.