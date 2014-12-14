Given Inorder and Preorder traversals of a binary tree, print Postorder traversal. Example:

Input:
Inorder traversal in[] = {4, 2, 5, 1, 3, 6}
Preorder traversal pre[] = {1, 2, 4, 5, 3, 6}

Output:
Postorder traversal is {4, 5, 2, 6, 3, 1}
Trversals in the above example represents following tree

         1
      /     \   
     2       3
   /   \      \
  4     5      6

A naive method is to first construct the tree, then use simple recursive method to print  postorder traversal of the constructed tree.We can print postorder traversal without constructing the tree.  The idea is, root is always the first item in preorder traversal and it must be the last item in postorder traversal.  We first recursively print left subtree, then recursively print right subtree. Finally, print root. To find boundaries of left and right subtrees in pre[] and in[], we search root in in[], all elements before root in in[] are elements of left subtree and all elements after root are elements of right subtree.  In pre[], all elements after index of root in in[] are elements of right subtree.  And elements before index (including the element at index and excluding the first element) are elements of left subtree.Output

Postorder traversal
4 5 2 6 3 1
Time Complexity:  The above function visits every node in array. For every visit, it calls search which takes O(n) time.  Therefore, overall time complexity of the function is O(n2)Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above