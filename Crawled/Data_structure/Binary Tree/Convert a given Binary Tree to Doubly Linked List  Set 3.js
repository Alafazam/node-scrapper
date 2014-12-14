Given a Binary Tree and a key, write a function that prints all the ancestors of the key in the given binary tree.For example, consider the following Binary TreeFollowing are different input keys and their ancestors in the above tree

Input Key    List of Ancestors 
-------------------------
 1            
 2            1
 3            1
 4            2 1
 5            2 1
 6            3 1
 7            3 1
 8            4 2 1
 9            5 2 1
10            7 3 1

Recursive solution for this problem is discussed here.
It is clear that we need to use a stack based iterative traversal of the Binary Tree.  The idea is to have all ancestors in stack when we reach the node with given key.  Once we reach the key, all we have to do is, print contents of stack.
How to get all ancestors in stack when we reach the given node?  We can traverse all nodes in Postorder way. If we take a closer look at the recursive postorder traversal, we can easily observe that, when recursive function is called for a node, the recursion call stack contains ancestors of the node. So idea is do iterative Postorder traversal and stop the traversal when we reach the desired node.  Following is C implementation of the above approach.Output:
Following are all keys and their ancestors
1:
2: 1
3: 1
4: 2 1
5: 2 1
6: 3 1
7: 3 1
8: 4 2 1
9: 5 2 1
10: 7 3 1
Exercise
Note that the above solution assumes that the given key is present in the given Binary Tree.  It may go in infinite loop if key is not present. Extend the above solution to work even when the key is not present in tree.This article is contrubuted by Chandra Prakash.  Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: stack, StackAndQueue