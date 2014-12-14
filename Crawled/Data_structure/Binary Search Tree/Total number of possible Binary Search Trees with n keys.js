Given Preorder traversal of a BST, check if each non-leaf node has only one child. Assume that the BST contains unique entries.ExamplesIn Preorder traversal, descendants (or Preorder successors) of every node appear after the node.  In the above example, 20 is the first node in preorder and all descendants of 20 appear after it.  All descendants of 20 are smaller than it.  For 10, all descendants are greater than it. In general, we can say, if all internal nodes have only one child in a BST, then all the descendants of every node are either smaller or larger than the node. The reason is simple, since the tree is BST and every node has only one child, all descendants of a node will either be on left side or right side, means all descendants will either be smaller or greater.Approach 1 (Naive) 
This approach simply follows the above idea that all values on right side are either smaller or larger. Use two loops, the outer loop picks an element one by one, starting from the leftmost element. The inner loop checks if all elements on the right side of the picked element are either smaller or greater. The time complexity of this method will be O(n^2).Approach 2
Since all the descendants of a node must either be larger or smaller than the node. We can do following for every node in a loop.
1. Find the next preorder successor (or descendant) of the node.
2. Find the last preorder successor (last element in pre[]) of the node.
3. If both successors are less than the current node, or both successors are greater than the current node, then continue. Else, return false.Output:
 Yes 
Approach 3
1. Scan the last two nodes of preorder & mark them as min & max.
2. Scan every node down the preorder array. Each node must be either smaller than the min node or larger than the max node.  Update min & max accordingly. Output:
Yes
Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above