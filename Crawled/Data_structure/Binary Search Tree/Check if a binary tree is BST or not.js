Given the binary Tree and the two nodes say ‘a’ and ‘b’, determine whether the two nodes are cousins of each other or not.Two nodes are cousins of each other if they are at same level and have different parents.Example

     6
   /   \
  3     5
 / \   / \
7   8 1   3
Say two node be 7 and 1, result is TRUE.
Say two nodes are 3 and 5, result is FALSE.
Say two nodes are 7 and 5, result is FALSE.
We strongly recommend to minimize the browser and try this yourself first.The idea is to find level of one of the nodes. Using the found level, check if ‘a’ and ‘b’ are at this level.  If ‘a’ and ‘b’ are at given level, then finally check if they are not children of same parent.Following is C implementation of the above approach.Ouput:
 Yes 
Time Complexity of the above solution is O(n) as it does at most three traversals of binary tree.This article is contributed by Ayush Srivastava. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above