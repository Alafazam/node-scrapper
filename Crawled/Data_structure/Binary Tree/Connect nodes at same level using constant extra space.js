Let us consider the below traversals:Inorder sequence: D B E A F C
Preorder sequence: A B D E C FIn a Preorder sequence, leftmost element is the root of the tree. So we know ‘A’ is root for given sequences. By searching ‘A’ in Inorder sequence, we can find out all elements on left side of ‘A’ are in left subtree and elements on right are in right subtree.  So we know below structure now.We recursively follow above steps and get the following tree.Algorithm: buildTree()
1) Pick an element from Preorder. Increment a Preorder Index Variable (preIndex in below code) to pick next element in next recursive call.
2) Create a new tree node tNode with the data as picked element.
3) Find the picked element’s index in Inorder. Let the index be inIndex.
4) Call buildTree for elements before inIndex and make the built tree as left subtree of tNode.
5) Call buildTree for elements after inIndex and make the built tree as right subtree of tNode.
6) return tNode.Thanks to Rohini and Tushar  for suggesting the code.Time Complexity: O(n^2). Worst case occurs when tree is left skewed. Example Preorder and Inorder traversals for worst case are {A, B, C, D} and {D, C, B, A}.Please write comments if you find any bug in above codes/algorithms, or find other ways to solve the same problem.Tags: Inorder Traversal, Preorder Traversal, Tree Traveral