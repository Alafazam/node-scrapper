Given a binary tree in which each node element contains a number. Find the maximum possible sum from one leaf node to another.
The maximum sum path may or may not go through root. For example, in the following binary tree, the maximum sum is 27(3 + 6 + 9 + 0 – 1 + 10). Expected time complexity is O(n).A simple solution is to traverse the tree and do following for every traversed node X.
1) Find maximum sum from leaf to root in left subtree of X (we can use this post for this and next steps)
2) Find maximum sum from leaf to root in right subtree of X.
3) Add the above two calculated values and X->data and compare the sum with the maximum value obtained so far and update the maximum value.
4) Return the maximum value.The time complexity of above solution is O(n2)We can find the maximum sum using single traversal of binary tree.  The idea is to maintain two values in recursive calls
1) Maximum root to leaf path sum for the subtree rooted under current node.
2) The maximum path sum between leaves (desired output).For every visited node X, we find the maximum root to leaf sum in left and right subtrees of X.  We add the two values with X->data, and compare the sum with maximum path sum found so far.Following is C++ implementation of the above O(n) solution.Output:
Max pathSum of the given binary tree is 27.
This article is contributed by Kripal Gaurav. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above