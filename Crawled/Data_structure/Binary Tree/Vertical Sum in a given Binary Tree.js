Given a binary tree, write a function to get the maximum width of the given tree. Width of a tree is maximum of widths of all levels.  Let us consider the below example tree.For the above tree,
width of level 1 is 1,
width of level 2 is 2,
width of level 3 is 3
width of level 4 is 2.  So the maximum width of the tree is 3.
Method 1 (Using Level Order Traversal)
This method mainly involves two functions. One is to count nodes at a given level (getWidth), and other is to get the maximum width of the tree(getMaxWidth). getMaxWidth() makes use of getWidth() to get the width of all levels starting from root.Time Complexity: O(n^2) in the worst case.We can use Queue based level order traversal to optimize the time complexity of this method. The Queue based level order traversal will take O(n) time in worst case. Thanks to Nitish, DivyaC and tech.login.id2  for suggesting this optimization.  See their comments for implementation using queue based traversal.
Method 2 (Using Preorder Traversal)
In this method we create a temporary array count[] of size equal to the height of tree. We initialize all values in count as 0.  We traverse the tree using preorder traversal and fill the entries in count so that the count array contains count of nodes at each level in Binary Tree.Thanks to Raja and jagdish for suggesting this method.Time Complexity: O(n)Please write comments if you find the above code/algorithm incorrect, or find better ways to solve the same problem.