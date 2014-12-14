Write a function to print spiral order traversal of a tree. For below tree, function should print 1, 2, 3, 4, 5, 6, 7. Method 1 (Recursive)
This problem can bee seen as an extension of the level order traversal post.
To print the nodes in spiral order, nodes at different levels should be printed in alternating order. An additional Boolean variable ltr is used to change printing order of levels.   If ltr is 1 then printGivenLevel() prints nodes from left to right else from right to left. Value of ltr is flipped in each iteration to change the order.Function to print level order traversal of treeFunction to print all nodes at a given levelFollowing is C implementation of above algorithm.Output:
Spiral Order traversal of binary tree is
1 2 3 4 5 6 7
Time Complexity: Worst case time complexity of the above method is O(n^2). Worst case occurs in case of skewed trees.
Method 2 (Iterative)
We can print spiral order traversal in O(n) time and O(n) extra space. The idea is to use two stacks. We can use one stack for printing from left to right and other stack for printing from right to left. In every iteration, we have nodes of one level in one of the stacks.  We print the nodes, and push nodes of next level in other stack.Output:
Spiral Order traversal of binary tree is
1 2 3 4 5 6 7

Please write comments if you find any bug in the above program/algorithm; or if you want to share more information about spiral traversal.