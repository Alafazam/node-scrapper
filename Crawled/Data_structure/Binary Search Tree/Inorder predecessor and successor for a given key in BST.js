Given preorder traversal of a binary search tree, construct the BST.For example, if the given traversal is {10, 5, 1, 7, 40, 50}, then the output should be root of following tree.Method 1 ( O(n^2) time complexity )
The first element of preorder traversal is always root. We first construct the root. Then we find the index of first element which is greater than root. Let the index be ‘i’.  The values between root and ‘i’ will be part of left subtree, and the values between ‘i+1′ and ‘n-1′ will be part of right subtree. Divide given pre[] at index “i” and recur for left and right sub-trees.
For example in {10, 5, 1, 7, 40, 50}, 10 is the first element, so we make it root. Now we look for the first element greater than 10,  we find 40.  So we know the structure of BST is as following.

             10
           /    \
          /      \
  {5, 1, 7}       {40, 50}
We recursively follow above steps for subarrays {5, 1, 7} and {40, 50}, and get the complete tree.Output:
 1 5 7 10 40 50
Time Complexity: O(n^2)
Method 2 ( O(n) time complexity )
The idea used here is inspired from method 3 of this post. The trick is to set a range {min .. max} for every node. Initialize the range as {INT_MIN .. INT_MAX}.  The first node will definitely be in range, so create root node.  To construct the left subtree, set the range as {INT_MIN …root->data}. If a values is in the range {INT_MIN .. root->data}, the values is part part of left subtree.  To construct the right subtree, set the range as {root->data..max .. INT_MAX}.Output:
 1 5 7 10 40 50
Time Complexity: O(n)We will soon publish a O(n) iterative solution as a separate post.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.