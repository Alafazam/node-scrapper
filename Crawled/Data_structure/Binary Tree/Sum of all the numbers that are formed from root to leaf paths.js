Given a Binary Tree (BT), convert it to a Doubly Linked List(DLL).  The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL.  The order of nodes in DLL must be same as Inorder of the given Binary Tree.  The first node of Inorder traversal (left most node in BT) must be head node of the DLL.  A solution to this problem is discussed in this post.
In this post, another simple and efficient solution is discussed. The solution discussed here has two simple steps.1) Fix Left Pointers:  In this step, we change left pointers to point to previous nodes in DLL.  The idea is simple, we do inorder traversal of tree.  In inorder traversal, we keep track of previous visited node and change left pointer to the previous node. See fixPrevPtr() in below implementation.   2) Fix Right Pointers:  The above is intuitive and simple. How to change right pointers to point to next node in DLL? The idea is to use left pointers fixed in step 1.  We start from the rightmost node in Binary Tree (BT).  The rightmost node is the last node in DLL.  Since left pointers are changed to point to previous node in DLL, we can linearly traverse the complete DLL using these pointers.  The traversal would be from last to first node.  While traversing the DLL, we keep track of the previously visited node and change the right pointer to the previous node. See fixNextPtr() in below implementation.Output:

                Inorder Tree Traversal

        25      12      30      10      36      15

                DLL Traversal

        25      12      30      10      36      15
Time Complexity:  O(n) where n is the number of nodes in given Binary Tree. The solution simply does two traversals of all Binary Tree nodes.This article is contributed by Bala. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above