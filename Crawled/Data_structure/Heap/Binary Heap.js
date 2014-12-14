Given a Binary Search Tree (BST), convert it to a Binary Tree such that every key of the original BST is changed to key plus sum of all greater keys in BST.  Examples:Source: Convert a BSTSolution: Do reverse Inoorder traversal. Keep track of the sum of nodes visited so far. Let this sum be sum. For every node currently being visited, first add the key of this node to sum, i.e. sum = sum + node->key. Then change the key of current node to sum, i.e., node->key = sum.
When a BST is being traversed in reverse Inorder, for every key currently being visited, all keys that are already visited are all greater keys.Output:
 Inorder traversal of the given tree
2 5 13
 Inorder traversal of the modified tree
20 18 13
Time Complexity: O(n) where n is the number of nodes in given Binary Search Tree.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: Amazon, BST