Given a Binary Search Tree (BST) and a range [min, max], remove all keys which are outside the given range. The modified tree should also be BST. For example, consider the following BST and range [-10, 13]. 
The given tree should be changed to following. Note that all keys outside the range [-10, 13] are removed and modified tree is BST.
There are two possible cases for every node.
1) Node’s key is outside the given range.  This case has two sub-cases.
…….a) Node’s key is smaller than the min value.
…….b) Node’s key is greater that the max value.
2) Node’s key is in range.We don’t need to do anything for case 2.  In case 1, we need to remove the node and change root of sub-tree rooted with this node.
The idea is to fix the tree in Postorder fashion. When we visit a node, we make sure that its left and right sub-trees are already fixed. In case 1.a), we simply remove root and return right sub-tree as new root.  In case 1.b), we remove root and return left sub-tree as new root.Following is C++ implementation of the above approach.Output:
Inorder traversal of the given tree is: -13 -8 6 7 13 14 15
Inorder traversal of the modified tree is: -8 6 7 13
Time Complexity: O(n) where n is the number of nodes in given BST.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.