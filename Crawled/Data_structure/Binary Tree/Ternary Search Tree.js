Given a Binary Tree where each node has positive and negative values. Convert this to a tree where each node contains the sum of the left and right sub trees in the original tree.  The values of leaf nodes are changed to 0.For example, the following tree			should be changed toSolution:
Do a traversal of the given tree.  In the traversal, store the old value of the current node, recursively call for left and right subtrees and change the value of current node as sum of the values returned by the recursive calls.  Finally return the sum of new value and value (which is sum of values in the subtree rooted with this node).Output:

Inorder Traversal of the resultant tree is:
0 4 0 20 0 12 0

Time Complexity: The solution involves a simple traversal of the given tree. So the time complexity is O(n) where n is the number of nodes in the given Binary Tree.See this forum thread for the original question. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.