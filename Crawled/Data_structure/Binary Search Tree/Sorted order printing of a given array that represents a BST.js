Given two binary trees, check if the first tree is subtree of the second one. A subtree of a tree T is a tree S consisting of a node in T and all of its descendants in T. The subtree corresponding to the root node is the entire tree; the subtree corresponding to any other node is called a proper subtree.For example, in the following case, Tree1 is a subtree of Tree2.


        Tree1
          x 
        /    \
      a       b
       \
        c


        Tree2
              z
            /   \
          x      e
        /    \     \
      a       b      k
       \
        c
We have discussed a O(n2) solution for this problem. In this post a O(n) solution is discussed. The idea is based on the fact that inorder and preorder/postorder uniquely identify a binary tree.   Tree S is a subtree of T if both inorder and preorder traversals of S arew substrings of inorder and preorder traversals of T respectively.Following are detailed steps.1) Find inorder and preorder traversals of T, store them in two auxiliary arrays inT[] and preT[].2) Find inorder and preorder traversals of S, store them in two auxiliary arrays inS[] and preS[].3) If inS[] is a subarray of inT[] and preS[] is a subarray preT[], then S is a subtree of T.  Else not.We can also use postorder traversal in place of preorder in the above algorithm.Let us consider the above example

Inorder and Preorder traversals of the big tree are.
inT[]   =  {a, c, x, b, z, e, k}
preT[]  =  {z, x, a, c, b, e, k}

Inorder and Preorder traversals of small tree are
inS[]  = {a, c, x, b}
preS[] = {x, a, c, b}

We can easily figure out that inS[] is a subarray of
inT[] and preS[] is a subarray of preT[]. 
EDIT

The above algorithm doesn't work for cases where a tree is present
in another tree, but not as a subtree. Consider the following example.

        Tree1
          x 
        /    \
      a       b
     /        
    c         


        Tree2
          x 
        /    \
      a       b
     /         \
    c            d

Inorder and Preorder traversals of the big tree or Tree2 are.

Inorder and Preorder traversals of small tree or Tree1 are

The Tree2 is not a subtree of Tree1, but inS[] and preS[] are
subarrays of inT[] and preT[] respectively.

The above algorithm can be extended to handle such cases by adding a special character whenever we encounter NULL in inorder and preorder traversals.  Thanks to Shivam Goel for suggesting this extension. Following is C++ implementation of above algorithm.Output:
No: S is NOT a subtree of T
Time Complexity: Inorder and Preorder traversals of Binary Tree take O(n) time. The function strstr() can also be implemented in O(n) time using KMP string matching algorithm.Auxiliary Space: O(n)Thanks to Ashwini Singh for suggesting this method. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above