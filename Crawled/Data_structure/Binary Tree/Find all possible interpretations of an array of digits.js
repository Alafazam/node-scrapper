Using Morris Traversal, we can traverse the tree without using stack and recursion. The algorithm for Preorder is almost similar to Morris traversal for Inorder.1...If left child is null, print the current node data. Move to right child.
….Else, Make the right child of the inorder predecessor point to the current node. Two cases arise:
………a)  The right child of the inorder predecessor already points to the current node. Set right child to NULL. Move to right child of   current   node.
………b)   The right child is NULL. Set it to current node. Print current node’s data and move to left child of current node.
2...Iterate until current node is not NULL.Following is C implementation of the above algorithm.Output:
1 2 4 8 9 5 10 11 3 6 7
1 2 4 8 9 5 10 11 3 6 7
Limitations:
Morris traversal modifies the tree during the process. It establishes the right links while moving down the tree and resets the right links while moving up the tree. So the algorithm cannot be applied if write operations are not allowed.This article is compiled by Aashish Barnwal and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.