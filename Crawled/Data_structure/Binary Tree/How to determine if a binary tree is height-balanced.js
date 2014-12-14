Level order traversal of a tree is breadth first traversal for the tree. Example TreeLevel order traversal of the above tree is 1 2 3 4 5 METHOD 1 (Use function to print a given level)Algorithm:
There are basically two functions in this method.  One is to print all nodes at a given level (printGivenLevel), and other is to print level order traversal of the tree (printLevelorder). printLevelorder makes use of printGivenLevel to print nodes at all levels one by one starting from root.Implementation:Time Complexity: O(n^2) in worst case.  For a skewed tree, printGivenLevel() takes O(n) time where n is the number of nodes in the skewed tree. So time complexity of printLevelOrder() is O(n) + O(n-1) + O(n-2) + .. + O(1) which is O(n^2).

METHOD 2 (Use Queue)Algorithm:
For each node, first the node is visited and then it’s child nodes are put in a FIFO queue.Implementation:
Here is a simple implementation of the above algorithm. Queue is implemented using an array with maximum size of 500. We can implement queue as linked list also.Time Complexity: O(n) where n is number of nodes in the binary treeReferences:
http://en.wikipedia.org/wiki/Breadth-first_traversalPlease write comments if you find any bug in the above programs/algorithms or other ways to solve the same problem. Priority Queue is an extension of queue with following properties.
1) Every item has a priority associated with it.
2) An element with high priority is dequeued before an element with low priority.
3) If two elements have the same priority, they are served according to their order in the queue.A typical priority queue supports following operations.
insert(item, priority):  Inserts an item with given priority.
getHighestPriority():  Returns the highest priority item.
deleteHighestPriority():  Removes the highest priority item.How to implement priority queue?
Using Array: A simple implementation is to use array of following structure.insert() operation can be implemented by adding an item at end of array in O(1) time.getHighestPriority() operation can be implemented by linearly searching the highest priority item in array. This operation takes O(n) time.deleteHighestPriority() operation can be implemented by first linearly searching an item, then removing the item by moving all subsequent items one position back.We can also use Linked List, time complexity of all operations with linked list remains same as array.  The advantage with linked listUsing Heaps:
Heap is generally preferred for priority queue implementation because heaps provide better performance compared arrays or linked list. In a Binary Heap, getHighestPriority() can be implemented in O(1) time, insert() can be implemented in O(Logn) time and deleteHighestPriority() can also be implemented in O(Logn) time.
With Fibonacci heap, insert() and getHighestPriority() can be implemented in O(1) amortized time and deleteHighestPriority() can be implemented in O(Logn) amortized time.Applications of Priority Queue:
1) CPU Scheduling
2) Graph algorithms like Dijkstra’s shortest path algorithm, Prim’s Minimum Spanning Tree, etc
3) All queue applications where priority is involved. We will soon be discussing array and heap implementations of priority queue.References:
http://en.wikipedia.org/wiki/Priority_queuePlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.