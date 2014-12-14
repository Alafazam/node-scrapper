Given a Binary Search Tree (BST), modify it so that all greater values in the given BST are added to every node.  For example, consider the following BST.

              50
           /      \
         30        70
        /   \      /  \
      20    40    60   80 

The above tree should be modified to following 

              260
           /      \
         330        150
        /   \       /  \
      350   300    210   80
We strongly recommend you to minimize the browser and try this yourself first.A simple method for solving this is to find sum of all greater values for every node.  This method would take O(n^2) time.
We can do it using a single traversal. The idea is to use following BST property.  If we do reverse Inorder traversal of BST, we get all nodes in decreasing order.  We do reverse Inorder traversal and keep track of the sum of all nodes visited so far, we add this sum to every node.Output
350 330 300 260 210 150 80
Time Complexity: O(n) where n is number of nodes in the given BST.As a side note, we can also use reverse Inorder traversal to find kth largest element in a BST.This article is contributed by Chandra Prakash. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.