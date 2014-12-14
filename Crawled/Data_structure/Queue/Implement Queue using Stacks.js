Infix expression: The expression of the form a op b. When an operator is in-between every pair of operands.Postfix expression: The expression of the form a b op. When an operator is followed for every pair of operands.Why postfix representation of the expression?
The compiler scans the expression either from left to right or from right to left. Consider the below expression:  a op1 b op2 c op3 d
If op1 = +, op2 = *, op3 = +The compiler first scans the expression to evaluate the expression b * c, then again scan the expression to add a to it. The result is then added to d after another scan.The repeated scanning makes it very in-efficient. It is better to convert the expression to postfix(or prefix) form before evaluation.The corresponding expression in postfix form is: abc*d++.  The postfix expressions can be evaluated easily using a stack.  We will cover postfix expression evaluation in a separate post. Algorithm
1. Scan the infix expression from left to right.
2. If the scanned character is an operand, output it.
3. Else,
…..3.1 If the precedence of the scanned operator is greater than the precedence of the operator in the stack(or the stack is empty), push it.
…..3.2 Else, Pop the operator from the stack until the precedence of the scanned operator is less-equal to the precedence of the operator residing on the top of the stack. Push the scanned operator to the stack.
4. If the scanned character is an ‘(‘, push it to the stack.
5. If the scanned character is an ‘)’, pop and output from the stack until an ‘(‘ is encountered.
6. Repeat steps 2-6 until infix expression is scanned.
7. Pop and output from the stack until it is not empty.Following is C implementation of the above algorithmOutput:
abcd^e-fgh*+^*+i-
Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.The problem is opposite of this post.  We are given a Queue data structure that supports standard operations like enqueue() and dequeue().  We need to implement a Stack data structure using only instances of Queue.A stack can be implemented using two queues. Let stack to be implemented be ‘s’ and queues used to implement be ‘q1′ and ‘q2′. Stack ‘s’ can be implemented in two ways:Method 1 (By making push operation costly)
This method makes sure that newly entered element is always at the front of ‘q1′, so that pop operation just dequeues from ‘q1′.   ‘q2′ is used to put every new element at front of ‘q1′.Method 2 (By making pop operation costly)
In push operation, the new element is always enqueued to q1. In pop() operation, if q2 is empty then all the elements except the last, are moved to q2. Finally the last element is dequeued from q1 and returned.References:
Implement Stack using Two QueuesThis article is compiled by Sumit Jain and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Queue, stack