Unlike linear data structures (Array, Linked List, Queues, Stacks, etc) which have only one logical way to traverse them, trees can be traversed in different ways. Following are the generally used ways for traversing trees.
Example TreeDepth First Traversals:
(a) Inorder
(b) Preorder
(c) PostorderBreadth First or Level Order Traversal
Please see this post for Breadth First Traversal.Inorder Traversal: Uses of Inorder
In case of binary search trees (BST), Inorder traversal gives nodes in non-decreasing order. To get nodes of BST in non-increasing order, a variation of Inorder traversal where Inorder itraversal s reversed, can be used.
Example: Inorder traversal for the above given figure is 4 2 5 1 3.

Preorder Traversal: Uses of Preorder
Preorder traversal is used to create a copy of the tree.  Preorder traversal is also used to get prefix expression on of an expression tree.  Please see   http://en.wikipedia.org/wiki/Polish_notation to know why prefix expressions are useful.
Example: Preorder traversal for the above given figure is 1 2 4 5 3.

Postorder Traversal: Uses of Postorder
Postorder traversal is used to delete the tree. Please see the question for deletion of tree  for details.  Postorder traversal is also useful to get the postfix expression of an expression tree. Please see  http://en.wikipedia.org/wiki/Reverse_Polish_notation to for the usage of postfix expression.Example: Postorder traversal for the above given figure is 4 5 2 3 1.
Time Complexity: O(n)
Let us prove it:Complexity function T(n) — for all problem where tree traversal is involved — can be defined as:T(n) = T(k) + T(n – k – 1) + cWhere k is the number of nodes on one side of root and n-k-1 on the other side.Let’s do analysis of boundary conditionsCase 1: Skewed tree (One of the subtrees is empty and other subtree is non-empty )k is 0 in this case.
T(n) = T(0) + T(n-1) + c
T(n) = 2T(0) + T(n-2) + 2c
T(n) = 3T(0) + T(n-3) + 3c
T(n) = 4T(0) + T(n-4) + 4c…………………………………………
………………………………………….
T(n) = (n-1)T(0) + T(1) + (n-1)c
T(n) = nT(0) + (n)cValue of T(0) will be some constant say d. (traversing a empty tree will take some constants time)T(n) = n(c+d)
T(n) = (-)(n) (Theta of n)Case 2: Both left and right subtrees have equal number of nodes.T(n) = 2T(|_n/2_|) + cThis recursive function is in the standard form (T(n) = aT(n/b) + (-)(n) ) for master method http://en.wikipedia.org/wiki/Master_theorem.  If we solve it by master method we get (-)(n)Auxiliary Space :  If we don’t consider size of stack for function calls then O(1) otherwise O(n).Tags: Inorder Traversal, PostOrder Traversal, Preorder Traversal, Tree Traveral, Trees, Tutorial