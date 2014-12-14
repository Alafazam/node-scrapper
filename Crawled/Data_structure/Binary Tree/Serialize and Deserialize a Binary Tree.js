Given a binary tree (not a binary search tree) and two values say n1 and n2, write a program to find the least common ancestor.Following is definition of LCA from Wikipedia:
Let T be a rooted tree. The lowest common ancestor between two nodes n1 and n2 is defined as the lowest node in T that has both n1 and n2 as descendants (where we allow a node to be a descendant of itself).The LCA of n1 and n2 in T is the shared ancestor of n1 and n2 that is located farthest from the root. Computation of lowest common ancestors may be useful, for instance, as part of a procedure for determining the distance between pairs of nodes in a tree: the distance from n1 to n2 can be computed as the distance from the root to n1, plus the distance from the root to n2, minus twice the distance from the root to their lowest common ancestor. (Source Wiki)We have discussed an efficient solution to find LCA in Binary Search Tree.  In Binary Search Tree, using BST properties, we can find LCA in O(h) time where h is height of tree.  Such an implementation is not possible in Binary Tree as keys Binary Tree nodes don’t follow any order. Following are different approaches to find LCA in Binary Tree.Method 1 (By Storing root to n1 and root to n2 paths):
Following is simple O(n) algorithm to find LCA of n1 and n2.
1) Find path from root to n1 and store it in a vector or array.
2) Find path from root to n2 and store it in another vector or array.
3) Traverse both paths till the values in arrays are same. Return the common element just before the mismatch.  Following is C++ implementation of above algorithm.Output:
LCA(4, 5) = 2
LCA(4, 6) = 1
LCA(3, 4) = 1
LCA(2, 4) = 2 
Time Complexity: Time complexity of the above solution is O(n). The tree is traversed twice, and then path arrays are compared.
Thanks to Ravi Chandra Enaganti for suggesting the initial solution based on this method. 
Method 2 (Using Single Traversal)
The method 1 finds LCA in O(n) time, but requires three tree traversals plus extra spaces for path arrays. If we assume that the keys n1 and n2 are present in Binary Tree, we can find LCA using single traversal of Binary Tree and without extra storage for path arrays.
The idea is to traverse the tree starting from root.  If any of the given keys (n1 and n2) matches with root, then root is LCA (assuming that both keys are present).  If root doesn’t match with any of the keys, we recur for left and right subtree.   The node which has one key present in its left subtree and the other key present in right subtree is the LCA.  If both keys lie in left subtree, then left subtree has LCA also, otherwise LCA lies in right subtree.Output:
LCA(4, 5) = 2
LCA(4, 6) = 1
LCA(3, 4) = 1
LCA(2, 4) = 2 
Thanks to Atul Singh for suggesting this solution. Time Complexity: Time complexity of the above solution is O(n) as the method does a simple tree traversal in bottom up fashion.
Note that the above method assumes that keys are present in Binary Tree.  If one key is present and other is absent, then it returns the present key as LCA (Ideally should have returned NULL).
We can extend this method to handle all cases by passing two boolean variables v1 and v2.  v1 is set as true when n1 is present in tree and v2 is set as true if n2 is present in tree.Output:
LCA(4, 5) = 2
Keys are not present 
Thanks to Dhruv for suggesting this extended solution.  We will soon be discussing more solutions to this problem.  Solutions considering the following.
1) If there are many LCA queries and we can take some extra preprocessing time to reduce the time taken to find LCA.
2) If parent pointer is given with every node.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above