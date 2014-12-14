For the below example tree, all root-to-leaf paths are: 
10 –> 8 –> 3
10 –> 8 –> 5
10 –> 2 –> 2Algorithm:
Use a path array path[] to store current root to leaf path. Traverse from root to all leaves in top-down fashion. While traversing, store data of all nodes in current path in array path[].  When we reach a leaf node, print the path array.Time Complexity: O(n)References:
http://cslibrary.stanford.edu/110/BinaryTrees.htmlPlease write comments if you find any bug in above codes/algorithms, or find other ways to solve the same problem.