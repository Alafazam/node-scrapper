Given a binary tree, print boundary nodes of the binary tree Anti-Clockwise starting from the root. For example, boundary traversal of the following tree is “20 8 4 10 14 25 22″
We break the problem in 3 parts:
1. Print the left boundary in top-down manner.
2. Print all leaf nodes from left to right, which can again be sub-divided into two sub-parts:
…..2.1  Print all leaf nodes of left sub-tree from left to right.
…..2.2 Print all leaf nodes of right subtree from left to right.
3. Print the right boundary in bottom-up manner.We need to take care of one thing that nodes are not printed again. e.g. The left most node is also the leaf node of the tree.Based on the above cases, below is the implementation:Output:
20 8 4 10 14 25 22
Time Complexity: O(n) where n is the number of nodes in binary tree.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above