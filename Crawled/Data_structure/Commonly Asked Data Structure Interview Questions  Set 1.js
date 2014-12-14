Graph is a data structure that consists of following two components:
1. A finite set of vertices also called as nodes.
2. A finite set of ordered pair of the form (u, v) called as edge. The pair is ordered because (u, v) is not same as (v, u) in case of directed graph(di-graph). The pair of form (u, v) indicates that there is an edge from vertex u to vertex v. The edges may contain weight/value/cost.Graphs are used to represent many real life applications: Graphs are used to represent networks. The networks may include paths in a city or telephone network or circuit network. Graphs are also used in social networks like linkedIn, facebook. For example, in facebook, each person is represented with a vertex(or node). Each node is a structure and contains information like person id, name, gender and locale. This can be easily viewed by http://graph.facebook.com/barnwal.aashish where barnwal.aashish is the profile name.  See this for more applications of graph. Following is an example undirected graph with 5 vertices.
Following two are the most commonly used representations of graph.
1. Adjacency Matrix
2. Adjacency List
There are other representations also like, Incidence Matrix and Incidence List. The choice of the graph representation is situation specific. It totally depends on the type of operations to be performed and ease of use. Adjacency Matrix:
Adjacency Matrix is a 2D array of size V x V where V is the number of vertices in a graph. Let the 2D array be adj[][], a slot adj[i][j] = 1 indicates that there is an edge from vertex i to vertex j. Adjacency matrix for undirected graph is always symmetric. Adjacency Matrix is also used to represent weighted graphs. If adj[i][j] = w, then there is an edge from vertex i to vertex j with weight w.The adjacency matrix for the above example graph is:
Adjacency Matrix Representation of the above graphAdjacency Matrix Representation of the above graphPros: Representation is easier to implement and follow. Removing an edge takes O(1) time. Queries like whether there is an edge from vertex ‘u’ to vertex ‘v’ are efficient and can be done O(1).Cons: Consumes more space O(V^2). Even if the graph is sparse(contains less number of edges), it consumes the same space. Adding a vertex is O(V^2) time.
Adjacency List:
An array of linked lists is used. Size of the array is equal to number of vertices. Let the array be array[]. An entry array[i] represents the linked list of vertices adjacent to the ith vertex. This representation can also be used to represent a weighted graph. The weights of edges can be stored in nodes of linked lists. Following is adjacency list representation of the above graph. Adjacency List Representation of the above GraphBelow is C code for adjacency list representation of an undirected graph:Output:Pros: Saves space  O(|V|+|E|) . In the worst case, there can be C(V, 2) number of edges in a graph thus consuming O(V^2) space. Adding a vertex is easier.Cons: Queries like whether there is an edge from vertex u to vertex v are not efficient and can be done O(V).Reference:
http://en.wikipedia.org/wiki/Graph_%28abstract_data_type%29This article is compiled by Aashish Barnwal and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: GraphAsked by Varun Bhatia.Question:
Write a code for implementation of doubly linked list with use of single pointer in each node.

Solution:
This question is solved and very well explained at http://www.linuxjournal.com/article/6828.We also recommend to read http://en.wikipedia.org/wiki/XOR_linked_listLike arrays, Linked List is a linear data structure.  Unlike arrays, linked list elements are not stored at contiguous location; the elements are linked using pointers.Why Linked List?
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
You may like to try Practice MCQ Questions on Linked ListWe will soon be publishing more posts on Linked Lists.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Write a C program that, given an array A[] of n numbers and another number x, determines whether or not there exist two elements in S whose sum is exactly x. METHOD 1 (Use Sorting)Algorithm:

hasArrayTwoCandidates (A[], ar_size, sum)
1) Sort the array in non-decreasing order.
2) Initialize two index variables to find the candidate 
   elements in the sorted array.
       (a) Initialize first to the leftmost index: l = 0
       (b) Initialize second  the rightmost index:  r = ar_size-1
3) Loop while l < r.
       (a) If (A[l] + A[r] == sum)  then return 1
       (b) Else if( A[l] + A[r] <  sum )  then l++
       (c) Else r--    
4) No candidates in whole array - return 0

Time Complexity: Depends on what sorting algorithm we use.  If we use Merge Sort or Heap Sort then (-)(nlogn) in worst case.  If we use Quick Sort then O(n^2) in worst case.
Auxiliary Space : Again, depends on sorting algorithm. For example auxiliary space is O(n) for merge sort and O(1) for Heap Sort.Example:
Let Array be  {1, 4, 45, 6, 10, -8} and sum to find be 16Sort the array
A = {-8, 1, 4, 6, 10, 45}Initialize l = 0,  r = 5
A[l] + A[r] ( -8 + 45)  >  16    => decrement r.  Now r = 10
A[l] + A[r] ( -8 + 10)  <  2      =>  increment l.  Now l = 1
A[l] + A[r] ( 1 + 10)   <  16    =>  increment l.  Now l = 2
A[l] + A[r] ( 4 + 10)   <  14    =>  increment l.  Now l = 3
A[l] + A[r] ( 6 + 10)  == 16    =>  Found candidates (return 1)Note: If there are more than one pair having the given sum then this algorithm reports only one. Can be easily extended for this though.Implementation:
METHOD 2 (Use Hash Map)
Thanks to Bindu for suggesting this method and thanks to Shekhu for providing code.
This method works in O(n) time if range of numbers is known.
Let sum be the given sum and A[] be the array in which we need to find pair.  Implementation:Time Complexity:  O(n)
Auxiliary Space: O(R) where R is range of integers.If range of numbers include negative numbers then also it works. All we have to do for negative numbers is to make everything positive by adding the absolute value of smallest negative integer to all numbers.Please write comments if you find any of the above codes/algorithms incorrect, or find other ways to solve the same problem.Tags: HashingGiven an n x n matrix, where every row and column is sorted in increasing order. Given a number x, how to decide whether this x is in the matrix. The designed algorithm should have linear time complexity.  Thanks to devendraiiit for suggesting below approach.1) Start with top right element
2) Loop: compare this element e with x
….i) if they are equal then return its position
…ii) e < x then move it to down (if out of bound of matrix then break return false)
..iii) e > x then move it to left (if out of bound of matrix then break return false)
3) repeat the i), ii) and iii) till you find element or returned falseImplementation:Time Complexity: O(n)The above approach will also work for m x n matrix (not only for n x n). Complexity would be O(m + n).Please write comments if you find the above codes/algorithms incorrect, or find other ways to solve the same problem.Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). Mainly the following three basic operations are performed in the stack:Push:  Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
Pop:  Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.
Peek:   Get the topmost item.How to understand a stack practically?
There are many real life examples of stack. Consider the simple example of plates stacked over one another in canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO/FILO order.Implementation:
There are two ways to implement a stack:
Using array
Using linked listUsing array: Pros: Easy to implement. Memory is saved as pointers are not involved.
Cons: It is not dynamic. It doesn’t grow and shrink depending on needs at runtime.
Linked List Implementation: Output:

10 pushed to stack
20 pushed to stack
30 pushed to stack
30 popped from stack
Top element is 20
Pros: The linked list implementation of stack can grow and shrink according to the needs at runtime.
Cons: Requires extra memory due to involvement of pointers.Applications of stack:
Balancing of symbols:
Infix to Postfix/Prefix conversion
Redo-undo features at many places like editors, photoshop.
Forward and backward feature in web browsers
Used in many algorithms like Tower of Hanoi, tree traversals, stock span problem, histogram problem.
Other applications can be Backtracking, Knight tour problem, rat in a maze, N queen problem and sudoku solverWe will cover the implementation of applications of stack in separate posts.Quiz: Stack QuestionsReferences:
http://en.wikipedia.org/wiki/Stack_%28abstract_data_type%29#Problem_DescriptionPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Like Stack, Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO).  A good example of queue is any queue of consumers for a resource where the consumer that came first is served first.
The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.Operations on Queue:
Mainly the following four basic operations are performed on queue:Enqueue: Adds an item to the queue. If the queue is full, then it is said to be an Overflow condition.
Dequeue: Removes an item from the queue. The items are popped in the same order in which they are pushed. If the queue is empty, then it is said to be an Underflow condition.
Front: Get the front item from queue.
Rear: Get the last item from queue.  Applications of Queue:
Queue is used when things don’t have to be processed immediatly, but have to be processed in First InFirst Out order like Breadth First Search. This property of Queue makes it also useful in following kind of scenarios.1) When a resource is shared among multiple consumers. Examples include CPU scheduling, Disk Scheduling.
2) When data is transferred asynchronously (data not necessarily received at same rate as sent) between two processes. Examples include IO Buffers, pipes, file IO, etc.See this for more detailed applications of Queue and Stack.Array implementation Of Queue
For implementing queue, we need to keep track of two indices, front and rear.  We enqueue an item at the rear and dequeue an item from front. If we simply increment front and rear indices, then there may be problems, front may reach end of the array. The solution to this problem is to increase front and rear in circular manner (See this for details)Output:
10 enqueued to queue
20 enqueued to queue
30 enqueued to queue
40 enqueued to queue
10 dequeued from queue
Front item is 20
Rear item is 40
Time Complexity:  Time complexity of all operations like enqueue(), dequeue(), isFull(), isEmpty(), front() and rear() is O(1). There is no loop in any of the operations.Linked list implementation is easier, we will soon be discussing linked list implementation in next article.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTrees: Unlike Arrays, Linked Lists, Stack and queues, which are linear data structures, trees are hierarchical data structures.Tree Vocabulary: The topmost node is called root of the tree.  The elements that are directly under an element are called its children. The element directly above something is called its parent. For example, a is a child of f and f is the parent of a. Finally, elements with no children are called leaves.Why Trees?
1. One reason to use trees might be because you want to store information that naturally forms a hierarchy. For example, the file system on a computer: 2. Trees (with some ordering e.g., BST) provide moderate access/search (quicker than Linked List and slower than arrays).
3. Trees provide moderate insertion/deletion (quicker than Arrays and slower than Unordered Linked Lists).
4. Like Linked Lists and unlike Arrays, Trees don’t have an upper limit on number of nodes as nodes are linked using pointers.Main applications of trees include:
1. Manipulate hierarchical data.
2. Make information easy to search (see tree traversal).
3. Manipulate sorted lists of data.
4. As a workflow for compositing digital images for visual effects.
5. Router algorithms
6. Form of a multi-stage decision-making (see business chess).  Binary Tree:  A tree whose elements have at most 2 children is called a binary tree.  Since each element in a binary tree can have only 2 children, we typically name them the left and right child. Binary Tree Representation in C:  A tree is represented by a pointer to the topmost node in tree.  If the tree is empty, then value of root is NULL.
A Tree node contains following parts.
1. Data
2. Pointer to left child
3. Pointer to right childIn C, we can represent a tree node using structures.  Below is an example of a tree node with an integer data.First Simple Tree in C
Let us create a simple tree with 4 nodes in C.  The created tree would be as following.Summary: Tree is a hierarchical data structure.  Main uses of trees include maintaining hierarchical data, providing moderate access and insert/delete operations. Binary trees are special cases of tree where every node has at most two children.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.The following is definition of Binary Search Tree(BST) according to WikiPediaBinary Search Tree, is a node-based binary tree data structure which has the following properties:The above properties of Binary Search Tree provide an ordering among keys so that the operations like search, minimum and maximum can be done fast.  If there is no ordering, then we may have to compare every key to search a given key.Searching a key
To search a given key in Bianry Search Tree, we first compare it with root, if the key is present at root, we return root.  If key is greater than root’s key, we recur for right subtree of root node.  Otherwise we recur for left subtree.Insertion of a key
A new key is always inserted at leaf.  We start searching a key from root till we hit a leaf node.  Once a leaf node is found, the new node is added as a child of the leaf node.Output:
20 30 40 50 60 70 80
Time Complexity: The worst case time complexity of search and insert operations is O(h) where h is height of Binary Search Tree.  In worst case, we may have to travel from root to the deepest leaf node.  The height of a skewed tree may become n and the time complexity of search and insert operation may become O(n).Quiz on Binary Search TreePlease write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveA Binary Heap is a Binary Tree with following properties.
1) It’s a complete tree (All levels are completely filled except possibly the last level and the last level has all keys as left as possible). This property of Binary Heap makes them suitable to be stored in an array.2) A Binary Heap is either Min Heap or Max Heap. In a Min Binary Heap, the key at root must be minimum among all keys present in Binary Heap. The same property must be recursively true for all nodes in Binary Tree. Max Binary Heap is similar to Min Heap.Examples of Min Heap:Applications of Heaps:
1) Heap Sort: Heap Sort uses Binary Heap to sort an array in O(nLong) time.2) Priority Queue: Priority queues can be efficiently implemented using Binary Heap because it supports insert(), delete() and extractmax(), decreaseKey() operations in O(logn) time. Binomoial Heap and Fibonacci Heap are variations of Binary Heap. These variations perform union also efficiently.3) Graph Algorithms: The priority queues are especially used in Graph Algorithms like Dijkstra’s Shortest Path and Prim’s Minimum Spanning Tree.4) Many problems can be efficiently solved using Heaps.  See following for example.
a) K’th Largest Element in an array.
b) Sort an almost sorted array/
c) Merge K Sorted Arrays.Operations on Min Heap:
1) getMini():  It returns the root element of Min Heap.  Time Complexity of this operation is O(1).2) extractMin(): Removes the minimum element from Min Heap. Time Complexity of this Operation is O(Logn) as this operation needs to maintain the heap property (by calling heapify()) after removing root.3) decreaseKey():  Decreases value of key. Time complexity of this operation is O(Logn). If the decreases key value of a node is greater than parent of the node, then we don’t need to do anything. Otherwise, we need to traverse up to fix the violated heap property.4) insert(): Inserting a new key takes O(Logn) time.  We add a new key at the end of the tree. IF new key is greater than its parent, then we don’t need to do anything. Otherwise, we need to traverse up to fix the violated heap property.5) delete(): Deleting a key also takes O(Logn) time. We replace the key to be deleted with minum infinite by calling decreaseKey().  After decreaseKey(), the minus infinite value must reach root, so we call extractMin() to remove key. Following is C++ implementation of basic heap operations.Output:
2 4 1
Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Suppose we want to design a system for storing employee records keyed using phone numbers. And we want following queries to be performed efficiently:We can think of using the following data structures to maintain information about different phone numbers.For arrays and linked lists, we need to search in a linear fashion, which can be costly in practice. If we use arrays and keep the data sorted, then a phone number can be searched in O(Logn) time using Binary Search, but insert and delete operations become costly as we have to maintain sorted order.With balanced binary search tree, we get moderate search, insert and delete times. All of these operations can be guaranteed to be in O(Logn) time.Another solution that one can think of is to use a direct access table where we make a big array and use phone numbers as index in the array. An entry in array is NIL if phone number is not present, else the array entry stores pointer to records corresponding to phone number. Time complexity wise this solution is the best among all, we can do all operations in O(1) time. For example to insert a phone number, we create a record with details of given phone number, use phone number as index and store the pointer to the created record in table.
This solution has many practical limitations. First problem with this solution is extra space required is huge. For example if phone number is n digits, we need O(m * 10n) space for table where m is size of a pointer to record. Another problem is an integer in a programming language may not store n digits.Due to above limitations Direct Access Table cannot always be used. Hashing is the solution that can be used in almost all such situations and performs extremely well compared to above data structures like Array, Linked List, Balanced BST in practice. With hashing we get O(1) search time on average (under reasonable assumptions) and O(n) in worst case.Hashing is an improvement over Direct Access Table. The idea is to use hash function that converts a given phone number or any other key to a smaller number and uses the small number as index in a table called hash table.Hash Function: A function that converts a given big phone number to a small practical integer value. The mapped integer value is used as an index in hash table. In simple terms, a hash function maps a big number or string to a small integer that can be used as index in hash table.
A good hash function should have following properties
1) Efficiently computable.
2) Should uniformly distribute the keys (Each table position equally likely for each key)For example for phone numbers a bad hash function is to take first three igits. A better function is consider last three digits. Please note that this may not be the best hash function. There may be better ways.Hash Table: An array that stores pointers to records corresponding to a given phone number. An entry in hash table is NIL if no existing phone number has hash function value equal to the index for the entry.Collision Handling: Since a hash function gets us a small number for a key which is a big integer or string, there is possibility that two keys result in same value. The situation where a newly inserted key maps to an already occupied slot in hash table is called collision and must be handled using some collision handling technique. Following are the ways to handle collisions:We will soon be covering more details of Open Addressing and other topics of hashing.References:
MIT Video LectureIITD Video Lecture“Introduction to Algorithms”, Second Edition by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest and Clifford Stein.http://www.cs.princeton.edu/~rs/AlgsDS07/10Hashing.pdfhttp://www.martinbroadhurst.com/articles/hash-table.htmlPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.What is a Data Structure?
A data structure is a way of organizing the data so that the data can be used efficiently. Different kinds of data structures are suited to different kinds of applications, and some are highly specialized to specific tasks. For example, B-trees are particularly well-suited for implementation of databases, while compiler implementations usually use hash tables to look up identifiers. (Source: Wiki Page)Which data structures are used for BFS and DFS of a graph?
Queue is used for BFS and Stack is used for DFS. DFS can also be implemented using recursion (Note that recursion also uses function call stack).Can doubly linked be implemented using a single pointer variable in every node?
Doubly linked list can be implemented using a single pointer. See XOR Linked List – A Memory Efficient Doubly Linked ListHow to implement a stack using queue?
See Implement Stack using QueuesHow to implement a queue using stack?
See Implement Queue using StacksLinked List Questions
Linked List Insertion, Linked List Deletion, middle of a given linked list, Nth node from the end of a Linked List,Tree Traversal Questions
Inorder, Preorder and Postoder Traversals, Level order traversal, Height of Binary Tree.How to check if a given Binary Tree is BST or not?
If inorder traversal of a binary tree is sorted, then the binary tree is BST. The idea is to simply do inorder traversal and while traversing keep track of previous key value. If current key value is greater, then continue, else return false. See A program to check if a binary tree is BST or not for more details.Convert a DLL to Binary Tree in-place
See In-place conversion of Sorted DLL to Balanced BSTConvert Binary Tree to DLL in-place
See Convert a given Binary Tree to Doubly Linked List | Set 1, Convert a given Binary Tree to Doubly Linked List | Set 2Delete a given node in a singly linked list
Given only a pointer to a node to be deleted in a singly linked list, how do you delete it?Reverse a Linked List
Write a function to reverse a linked listDetect Loop in a Lined List
Write a C function to detect loop in a linked list.Which data structure is used for dictionary and spell checker?
Data Structure for Dictionary and Spell Checker?Which Data Structure Should be used for LRU cache?
How to implement LRU caching scheme? What data structures should be used?We will soon be adding more questions.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above