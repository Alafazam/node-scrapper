Given a singly linked list, remove all the nodes which have a greater value on right side. Examples:
a) The list 12->15->10->11->5->6->2->3->NULL should be changed to 15->11->6->3->NULL.  Note that 12, 10, 5 and 2 have been deleted because there is a greater value on the right side. When we examine 12, we see that after 12 there is one node with value greater than 12 (i.e. 15), so we delete 12.
When we examine 15, we find no node after 15 that has value greater than 15 so we keep this node.
When we go like this, we get 15->6->3b) The list 10->20->30->40->50->60->NULL should be changed to 60->NULL.  Note that 10, 20, 30, 40 and 50 have been deleted because they all have a greater value on the right side.c) The list 60->50->40->30->20->10->NULL should not be changed.Method 1 (Simple)
Use two loops. In the outer loop, pick nodes of the linked list one by one. In the inner loop, check if there exist a node whose value is greater than the picked node.  If there exists a node whose value is greater, then delete the picked node.
Time Complexity: O(n^2)Method 2 (Use Reverse) 
Thanks to Paras for providing the below algorithm.
1. Reverse the list.
2. Traverse the reversed list. Keep max till now.  If next node < max, then delete the next node, otherwise max = next node.
3. Reverse the list again to retain the original order. Time Complexity: O(n)Thanks to R.Srinivasan for providing below code.Output:

Given Linked List: 12 15 10 11 5 6 2 3
Modified Linked List: 15 11 6 3 
Source:
http://geeksforgeeks.org/forum/topic/amazon-interview-question-for-software-engineerdeveloper-about-linked-lists-6Please write comments if you find the above code/algorithm incorrect, or find other ways to solve the same problem.