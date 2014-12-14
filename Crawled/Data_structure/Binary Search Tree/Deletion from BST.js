Given inorder and level-order traversals of a Binary Tree, construct the Binary Tree. Following is an example to illustrate the problem.We strongly recommend to minimize the browser and try this yourself first.
The following post can be considered as a prerequisite for this. Construct Tree from given Inorder and Preorder traversalsLet us consider the above example.in[]    = {4, 8, 10, 12, 14, 20, 22};
level[] = {20, 8, 22, 4, 12, 10, 14};In a Levelorder sequence, the first element is the root of the tree. So we know ’20’ is root for given sequences. By searching ’20’ in Inorder sequence, we can find out all elements on left side of ‘20’ are in left subtree and elements on right are in right subtree. So we know below structure now.Let us call {4,8,10,12,14} as left subarray in Inorder traversal and {22} as right subarray in Inorder traversal.
In level order traversal, keys of left and right subtrees are not consecutive. So we extract all nodes from level order traversal which are in left subarray of Inorder traversal.  To construct the left subtree of root, we recur for the extracted elements from level order traversal and left subarray of inorder traversal.  In the above example, we recur for following two arrays.

// Recur for following arrays to construct the left subtree
In[]    = {4, 8, 10, 12, 14}
level[] = {8, 4, 12, 10, 14} 
Similarly, we recur for following two arrays and construct the right subtree.

// Recur for following arrays to construct the right subtree
In[]    = {22}
level[] = {22} 
Following is C++ implementation of the above approach. Output:
Inorder traversal of the constructed tree is
4 8 10 12 14 20 22
An upper bound on time complexity of above method is O(n3).  In the main recursive function, extractNodes() is called which takes O(n2) time.The code can be optimized in many ways and there may be better solutions.  Looking for improvements and other optimized approaches to solve this problem.This article is contributed by Abhay Rathi. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above