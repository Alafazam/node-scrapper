There are two conventions to define height of Binary Tree
1) Number of nodes on longest path from root to the deepest node.
2) Number of edges on longest path from root to the deepest node.In this post, the first convention is followed. For example, height of the below tree is 3.

Example TreeExample TreeRecursive method to find height of Binary Tree is discussed here. How to find height without recursion? We can use level order traversal to find height without recursion.  The idea is to traverse level by level. Whenever move down to a level, increment height by 1 (height is initialized as 0).  Count number of nodes at each level, stop traversing when count of nodes at next level is 0.
Following is detailed algorithm to find level order traversal using queue.Following is C++ implementation of above algorithm. Output:
Height of tree is 3
Time Complexity: O(n) where n is number of nodes in given binary tree.This article is contributed by Rahul Kumar. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above