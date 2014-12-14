Write a function detectAndRemoveLoop() that checks whether a given Linked List contains loop and if loop is present then removes the loop and returns true. And if the list doesn’t contain loop then returns false. Below diagram shows a linked list with a loop. detectAndRemoveLoop() must change the below list to 1->2->3->4->5->NULL.We recommend to read following post as a prerequisite.

Write a C function to detect loop in a linked listBefore trying to remove the loop, we must detect it. Techniques discussed in the above post can be used to detect loop.  To remove loop, all we need to do is to get pointer to the last node of the loop.  For example, node with value 5 in the above diagram. Once we have pointer to the last node, we can make the next of this node as NULL and loop is gone.
We can easily use Hashing or Visited node techniques (discussed in the aobve mentioned post) to get the pointer to the last node.  Idea is simple: the very first node whose next is already visited (or hashed) is the last node.
We can also use Floyd Cycle Detection algorithm to detect and remove the loop. In the Floyd’s algo, the slow and fast pointers meet at a loop node.  We can use this loop node to remove cycle. There are following two different ways of removing loop when Floyd’s algorithm is used for Loop detection.Method 1 (Check one by one)  
We know that Floyd’s Cycle detection algorithm terminates when fast and slow pointers meet at a common point.  We also know that this common point is one of the loop nodes (2 or 3 or 4 or 5 in the above diagram). We store the address of this in a pointer variable say ptr2.  Then we start from the head of the Linked List and check for nodes one by one if they are reachable from ptr2.  When we find a node that is reachable, we know that this node is the starting node of the loop in Linked List and we can get pointer to the previous of this node.Method 2 (Efficient Solution)
This method is also dependent on Floyd’s Cycle detection algorithm.
1)   Detect Loop using Floyd’s Cycle detection algo and get the pointer to a loop node.
2)   Count the number of nodes in loop. Let the count be k.
3)   Fix one pointer to the head and another to kth node from head.
4)   Move both pointers at the same pace, they will meet at loop starting node.
5)   Get pointer to the last node of loop and make next of it as NULL.Thanks to WgpShashank for suggesting this method.Please write comments if you find the above codes/algorithms incorrect, or find other ways to solve the same problem.