Like Stack, Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO).  A good example of queue is any queue of consumers for a resource where the consumer that came first is served first.
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
Time Complexity:  Time complexity of all operations like enqueue(), dequeue(), isFull(), isEmpty(), front() and rear() is O(1). There is no loop in any of the operations.Linked list implementation is easier, we will soon be discussing linked list implementation in next article.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveIt depends on what traversals are given.  If one of the traversal methods is Inorder then the tree can be  constructed, otherwise not.


Therefore, following combination can uniquely identify a tree.Inorder and Preorder.
Inorder and Postorder.
Inorder and Level-order.

And following do not.
Postorder and Preorder.
Preorder and Level-order.
Postorder and Level-order.For example,  Preorder, Level-order and Postorder traversals are same for the trees given in above diagram. Preorder Traversal      = AB
Postorder Traversal     = BA
Level-Order Traversal  = ABSo, even if three of them (Pre, Post and Level) are given,  the tree can not be constructed.Tags: Binary Tree, Tree Traveral