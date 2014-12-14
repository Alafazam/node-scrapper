In Binary Tree, Inorder successor of a node is the next node in Inorder traversal of the Binary Tree. Inorder Successor is NULL for the last node in Inoorder traversal.
In Binary Search Tree, Inorder Successor of an input node can also be defined as the node with the smallest key greater than the key of input node.  So, it is sometimes important to find next node in sorted order.In the above diagram, inorder successor of 8 is 10, inorder successor of 10 is 12 and inorder successor of 14 is 20.Method 1 (Uses Parent Pointer) 
In this method, we assume that every node has parent pointer. The Algorithm is divided into two cases on the basis of right subtree of the input node being empty or not.Input: node, root // node  is the node whose Inorder successor is needed.
output: succ // succ is Inorder successor of node.1) If right subtree of node  is not NULL, then succ lies in right subtree. Do following.
Go to right subtree and return the node with minimum key value in right subtree.
2) If right sbtree of node is NULL, then succ is one of the ancestors. Do following.
Travel up using the parent pointer until you see a node which is left child of it’s parent. The parent of such a node is the succ.Implementation
Note that the function to find InOrder Successor is highlighted (with gray background) in below code.Output of the above program:
Inorder Successor of 14 is 20Time Complexity: O(h) where h is height of tree.
Method 2 (Search from root) 
Parent pointer is NOT needed in this algorithm.  The Algorithm is divided into two cases on the basis of right subtree of the input node being empty or not.Input: node, root // node  is the node whose Inorder successor is needed.
output: succ // succ is Inorder successor of node.1) If right subtree of node  is not NULL, then succ lies in right subtree. Do following.
Go to right subtree and return the node with minimum key value in right subtree.
2) If right sbtree of node is NULL, then start from root and us search like technique. Do following.
Travel down the tree, if a node’s data is greater than root’s data then go right side, otherwise go to left side.Thanks to R.Srinivasan for suggesting this method.Time Complexity: O(h) where h is height of tree.References:
http://net.pku.edu.cn/~course/cs101/2007/resource/Intro2Algorithm/book6/chap13.htmPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.