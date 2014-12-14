Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). Mainly the following three basic operations are performed in the stack:Push:  Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
Pop:  Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.
Peek:   Get the topmost item.How to understand a stack practically?
There are many real life examples of stack. Consider the simple example of plates stacked over one another in canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO/FILO order.Implementation:
There are two ways to implement a stack:
Using array
Using linked listUsing array: Pros: Easy to implement. Memory is saved as pointers are not involved.
Cons: It is not dynamic. It doesn’t grow and shrink depending on needs at runtime.
Linked List Implementation: Output:

10 pushed to stack
20 pushed to stack
30 pushed to stack
30 popped from stack
Top element is 20
Pros: The linked list implementation of stack can grow and shrink according to the needs at runtime.
Cons: Requires extra memory due to involvement of pointers.Applications of stack:
Balancing of symbols:
Infix to Postfix/Prefix conversion
Redo-undo features at many places like editors, photoshop.
Forward and backward feature in web browsers
Used in many algorithms like Tower of Hanoi, tree traversals, stock span problem, histogram problem.
Other applications can be Backtracking, Knight tour problem, rat in a maze, N queen problem and sudoku solverWe will cover the implementation of applications of stack in separate posts.Quiz: Stack QuestionsReferences:
http://en.wikipedia.org/wiki/Stack_%28abstract_data_type%29#Problem_DescriptionPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Given a singly linked list, swap kth node from beginning with kth node from end.  Swapping of data is not allowed, only pointers should be changed. This requirement may be logical in many situations where the linked list data part is huge (For example student details line Name, RollNo, Address, ..etc). The pointers are always fixed (4 bytes for most of the compilers).The problem seems simple at first look, but it has many interesting cases.   Let X be the kth node from beginning and Y be the kth node from end. Following are the interesting cases that must be handled.
1) Y is next to X
2) X is next to Y
3) X and Y are same
4) X and Y don’t exist (k is more than number of nodes in linked list)We strongly recommend you to try it yourself first, then see the below solution. It will be a good exercise of pointers.Output:
Original Linked List: 1 2 3 4 5 6 7 8

Modified List for k = 1
8 2 3 4 5 6 7 1

Modified List for k = 2
8 7 3 4 5 6 2 1

Modified List for k = 3
8 7 6 4 5 3 2 1

Modified List for k = 4
8 7 6 5 4 3 2 1

Modified List for k = 5
8 7 6 4 5 3 2 1

Modified List for k = 6
8 7 3 4 5 6 2 1

Modified List for k = 7
8 2 3 4 5 6 7 1

Modified List for k = 8
1 2 3 4 5 6 7 8

Modified List for k = 9
1 2 3 4 5 6 7 8
Please note that the above code runs three separate loops to count nodes, find x and x prev, and to find y and y_prev. These three things can be done in a single loop.  The code uses three loops to keep things simple and readable.Thanks to Chandra Prakash for initial solution. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.