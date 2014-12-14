Given an array ‘pre[]’ that represents Preorder traversal of a spacial binary tree where every node has either 0 or 2 children.  One more array ‘preLN[]’ is given which has only two possible values ‘L’ and ‘N’.  The value ‘L’ in ‘preLN[]’ indicates that the corresponding node in Binary Tree is a leaf node and value ‘N’ indicates that the corresponding node is non-leaf node.  Write a function to construct the tree from the given two arrays.Source: Amazon Interview QuestionExample:

Input:  pre[] = {10, 30, 20, 5, 15},  preLN[] = {'N', 'N', 'L', 'L', 'L'}
Output: Root of following tree
          10
         /  \
        30   15
       /  \
      20   5

The first element in pre[] will always be root.  So we can easily figure out root. If left subtree is empty, the right subtree must also be empty and preLN[] entry for root must be ‘L’.  We can simply create a node and return it. If left and right subtrees are not empty, then recursively call for left and right subtrees and link the returned nodes to root. Output:
Following is Inorder Traversal of the Constructed Binary Tree:
20 30 5 10 15

Time Complexity: O(n)Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above