We have discussed iterative inorder and iterative preorder traversals. In this post, iterative postorder traversal is discussed which is more complex than the other two traversals (due to its nature of non-tail recursion, there is an extra statement after the final recursive call to itself). The postorder traversal can easily be done using two stacks though. The idea is to push reverse postorder traversal to a stack.  Once we have reverse postorder traversal in a stack, we can just pop all items one by one from the stack and print them, this order of printing will be in postorder because of LIFO property of stacks.  Now the question is, how to get reverse post order elements in a stack – the other stack is used for this purpose.  For example, in the following tree, we need to get 1, 3, 7, 6, 2, 5, 4 in a stack.  If take a closer look at this sequence, we can observe that this sequence is very similar to preorder traversal.  The only difference is right child is visited before left child and therefore sequence is “root right left” instead of “root left right”.   So we can do something like iterative preorder traversal with following differences.
a) Instead of printing an item, we push it to a stack.
b) We push left subtree before right subtree.Following is the complete algorithm.  After step 2, we get reverse postorder traversal in second stack.  We use first stack to get this order.Let us consider the following tree
Following are the steps to print postorder traversal of the above tree using two stacks.

1. Push 1 to first stack.
      First stack: 1
      Second stack: Empty

2. Pop 1 from first stack and push it to second stack. 
   Push left and right children of 1 to first stack
      First stack: 2, 3
      Second stack: 1

3. Pop 3 from first stack and push it to second stack. 
   Push left and right children of 3 to first stack
      First stack: 2, 6, 7
      Second stack:1, 3

4. Pop 7 from first stack and push it to second stack.
      First stack: 2, 6
      Second stack:1, 3, 7

5. Pop 6 from first stack and push it to second stack.
      First stack: 2
      Second stack:1, 3, 7, 6

6. Pop 2 from first stack and push it to second stack. 
   Push left and right children of 2 to first stack
      First stack: 4, 5
      Second stack:1, 3, 7, 6, 2

7. Pop 5 from first stack and push it to second stack.
      First stack: 4
      Second stack: 1, 3, 7, 6, 2, 5

8. Pop 4 from first stack and push it to second stack.
      First stack: Empty
      Second stack: 1, 3, 7, 6, 2, 5, 4

The algorithm stops since there is no more item in first stack. 
Observe that content of second stack is in postorder fashion. Print them. 
Following is C implementation of iterative postorder traversal using two stacks.Output:
4 5 2 6 7 3 1
Following is overview of the above post.
Iterative preorder traversal can be easily implemented using two stacks. The first stack is used to get the reverse postorder traversal in second stack. The steps to get reverse postorder are similar to iterative preorder.You may also like to see a method which uses only one stack.This article is compiled by Aashish Barnwal. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: stack