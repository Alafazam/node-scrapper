Write a function to detect if two trees are isomorphic. Two trees are called isomorphic if one of them can be obtained from other by a series of flips, i.e. by swapping left and right children of a number of nodes. Any number of nodes at any level can have their children swapped.  Two empty trees are isomorphic.For example, following two trees are isomorphic with following sub-trees flipped: 2 and 3, NULL and 6, 7 and 8.
We simultaneously traverse both trees. Let the current internal nodes of two trees being traversed be n1 and n2 respectively. There are following two conditions for subtrees rooted with n1 and n2 to be isomorphic.
1) Data of n1 and n2 is same.
2) One of the following two is true for children of n1 and n2
……a) Left child of n1 is isomorphic to left child of n2 and right child of n1 is isomorphic to right child of n2.
……b) Left child of n1 is isomorphic to right child of n2 and right child of n1 is isomorphic to left child of n2.Output:
Yes
Time Complexity: The above solution does a traversal of both trees.  So time complexity is O(m + n) where m and n are number of nodes in given trees.This article is contributed by Ciphe.  Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.
If you like GeeksforGeeks and would like to contribute, you can also write an article and mail your article to contribute@geeksforgeeks.org. See your article appearing on the GeeksforGeeks main page and help other Geeks.