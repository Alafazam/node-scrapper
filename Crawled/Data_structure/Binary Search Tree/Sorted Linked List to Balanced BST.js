Given two arrays which represent a sequence of keys. Imagine we make a Binary Search Tree (BST) from each array. We need to tell whether two BSTs will be identical or not without actually constructing the tree.Examples
For example, the input arrays are {2, 4, 3, 1} and {2, 1, 4, 3} will construct the same tree Solution:
According to BST property, elements of left subtree must be smaller and elements of right subtree must be greater than root.
Two arrays represent sane BST if for every element x, the elements in left and right subtrees of x appear after it in both arrays.   And same is true for roots of left and right subtrees.
The idea is to check of if next smaller and greater elements are same in both arrays. Same properties are recursively checked for left and right subtrees.  The idea looks simple, but implementation requires checking all conditions for all elements. Following is an interesting recursive implementation of the idea.Output:
BSTs are same
This article is compiled by Amit Jain. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above