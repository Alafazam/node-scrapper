Write a function to count number of smaller elements on right of each element in an array. Given an unsorted array arr[] of distinct integers, construct another array countSmaller[] such that countSmaller[i] contains count of smaller elements on right side of each element arr[i] in array.Examples:Method 1 (Simple)
Use two loops. The outer loop picks all elements from left to right. The inner loop iterates through all the elements on right side of the picked element and updates countSmaller[].Time Complexity:  O(n^2)
Auxiliary Space: O(1)
Method 2 (Use Self Balancing BST)
A Self Balancing Binary Search Tree (AVL, Red Black,.. etc) can be used to get the solution in O(nLogn) time complexity.  We can augment these trees so that every node N contains size the subtree rooted with N.  We have used AVL tree in the following implementation.We traverse the array from right to left and insert all elements one by one in an AVL tree.  While inserting a new key in an AVL tree, we first compare the key with root.  If key is greater than root, then it is greater than all the nodes in left subtree of root.  So we add the size of left subtree to the count of smaller element for the key being inserted.  We recursively follow the same approach for all nodes down the root.Following is C implementation. Output:
Following is the constructed smaller count array
3 1 2 2 2 0 0
Time Complexity:  O(nLogn)
Auxiliary Space: O(n)
Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.