Algorithm: 
Let input linked list is sorted in increasing order.Initial Linked List
Linked List after insertion of 9

Implementation:Shorter Implementation using double pointers
Thanks to Murat M Ozturk for providing this solution.  Please see Murat M Ozturk’s comment below for complete function.  The code uses double pointer to keep track of the next pointer of the previous node (after which new node is being inserted).Note that below line in code changes current  to have address of next pointer in a node.Also, note below comments.
Time Complexity: O(n)References:
http://cslibrary.stanford.edu/105/LinkedListProblems.pdf