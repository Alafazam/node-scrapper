Given a Binary Tree (Bt), convert it to a Doubly Linked List(DLL).  The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL.  The order of nodes in DLL must be same as Inorder of the given Binary Tree.  The first node of Inorder traversal (left most node in BT) must be head node of the DLL.I came across this interview during one of my interviews.  A similar problem is discussed in this post.  The problem here is simpler as we don’t need to create circular DLL, but a simple DLL.  The idea behind its solution is quite simple and straight.1.  If left subtree exists, process the left subtree
…..1.a) Recursively convert the left subtree to DLL.
…..1.b) Then find inorder predecessor of root in left subtree (inorder predecessor is rightmost node in left subtree).
…..1.c) Make inorder predecessor as previous of root and root as next of inorder predecessor.
2.  If right subtree exists, process the right subtree (Below 3 steps are similar to left subtree).
…..2.a) Recursively convert the right subtree to DLL.
…..2.b) Then find inorder successor of root in right subtree (inorder successor is leftmost node in right subtree).
…..2.c) Make inorder successor as next of root and root as previous of inorder successor.
3. Find the leftmost node and return it (the leftmost node is always head of converted DLL).Below is the source code for above algorithm.Output:
25 12 30 10 36 15
This article is compiled by Ashish Mangla and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.You may also like to see Convert a given Binary Tree to Doubly Linked List | Set 2 for another simple and efficient solution.