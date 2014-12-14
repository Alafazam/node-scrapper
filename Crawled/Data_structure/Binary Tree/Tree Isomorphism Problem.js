Given a Binary Tree, write an iterative function to print Preorder traversal of the given binary tree.Refer this for recursive preorder traversal of Binary Tree.  To convert an inherently recursive procedures to iterative, we need an explicit stack.  Following is a simple stack based iterative process to print Preorder traversal.
1) Create an empty stack nodeStack and push root node to stack.
2) Do following while nodeStack is not empty.
….a) Pop an item from stack and print it.
….b) Push right child of popped item to stack
….c) Push left child of popped item to stackRight child is pushed before left child to make sure that left subtree is processed first.Output:
10 8 3 5 2 2
This article is compiled by Saurabh Sharma and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above