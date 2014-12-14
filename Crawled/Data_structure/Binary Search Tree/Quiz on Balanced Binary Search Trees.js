There are numerous applications we need to find floor (ceil) value of a key in a binary search tree or sorted array. For example, consider designing memory management system in which free nodes are arranged in BST. Find best fit for the input request.Ceil Value Node: Node with smallest data larger than or equal to key value.Imagine we are moving down the tree, and assume we are root node. The comparison yields three possibilities,A) Root data is equal to key. We are done, root data is ceil value.B) Root data < key value, certainly the ceil value can’t be in left subtree. Proceed to search on right subtree as reduced problem instance.C) Root data > key value, the ceil value may be in left subtree. We may find a node with is larger data than key value in left subtree, if not the root itself will be ceil node.Here is code in C for ceil value.Output:
0  2
1  2
2  2
3  4
4  4
5  6
6  6
7  8
8  8
9  10
10  10
11  12
12  12
13  14
14  14
15  -1
Exercise:1. Modify above code to find floor value of input key in a binary search tree.2. Write neat algorithm to find floor and ceil values in a sorted array. Ensure to handle all possible boundary conditions.— Venki. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.