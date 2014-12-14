Given a BST, transform it into greater sum tree where each node contains sum of all nodes greater than that node.We strongly recommend to minimize the gbrowser and try this yourself first.Method 1 (Naive):
This method doesn’t require the tree to be a BST.  Following are steps.
1. Traverse node by node(Inorder, preorder, etc.)
2. For each node find all the nodes greater than that of the current node, sum the values. Store all these sums.
3. Replace each node value with their corresponding sum by traversing in the same order as in Step 1.
This takes O(n^2) Time Complexity.Method 2 (Using only one traversal)
By leveraging the fact that the tree is a BST, we can find an O(n) solution.  The idea is to traverse BST in reverse inorder.  Reverse inorder traversal of a BST gives us keys in decreasing order. Before visiting a node, we visit all greater nodes of that node. While traversing we keep track of sum of keys which is the sum of all the keys greater than the key of current node. Output:
Inorder Traversal of given tree
1 2 7 11 15 29 35 40

Inorder Traversal of transformed tree
139 137 130 119 104 75 40 0
Time complexity of this method is O(n) as it does a simple traversal of tree.This article is contributed by Bhavana. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above