The Postfix notation is used to represent algebraic expressions. The expressions written in postfix form are evaluated faster compared to  infix notation as parenthesis are not required in postfix. We have discussed infix to postfix conversion.  In this post, evaluation of postfix expressions is discussed.Following is algorithm for evaluation postfix expressions.
1) Create a stack to store operands (or values).
2) Scan the given expression and do following for every scanned element.
…..a) If the element is a number, push it into the stack
…..b) If the element is a operator, pop operands for the operator from stack. Evaluate the operator and push the result back to the stack
3) When the expression is ended, the number in the stack is the final answerExample:
Let the given expression be “2 3 1 * + 9 -“.  We scan all elements one by  one.
1) Scan ‘2’, it’s a number, so push it to stack.  Stack contains ‘2’
2) Scan ‘3’, again a number, push it to stack, stack now contains ‘2 3′ (from bottom to top)
3) Scan ‘1’, again a number, push it to stack, stack now contains ‘2 3 1′
4) Scan ‘*’, it’s an operator, pop two operands from stack, apply the * operator on operands, we get 3*1 which results in 3.   We push the result ‘3’ to stack.  Stack now becomes ‘2 3′.
5) Scan ‘+’, it’s an operator, pop two operands from stack, apply the + operator on operands, we get 3 + 2 which results in 5.   We push the result ‘5’ to stack.  Stack now becomes ‘5’.
6) Scan ‘9’, it’s a number, we push it to the stack. Stack now becomes ‘5 9′.
7) Scan ‘-‘, it’s an operator, pop two operands from stack, apply the – operator on operands, we get 5 – 9 which results in -4.   We push the result ‘-4′ to stack.  Stack now becomes ‘-4′.
8) There are no more elements to scan, we return the top element from stack (which is the only element left in stack).Following is C implementation of above algorithm.Output:
Value of 231*+9- is -4
Time complexity of evaluation algorithm is O(n) where n is number of characters in input expression.There are following limitations of above implementation.
1) It supports only 4 binary operators ‘+’, ‘*’, ‘-‘ and ‘/’.  It can be extended for more operators by adding more switch cases.
2) The allowed operands are only single digit operands.  The program can be extended for multiple digits by adding a separator like space between all elements (operators and operands) of given expression.References:
http://www.cs.nthu.edu.tw/~wkhon/ds/ds10/tutorial/tutorial2.pdfPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: StackGiven an array of non-negative integers. Find the largest multiple of 3 that can be formed from array elements.                                 For example, if the input array is {8, 1, 9}, the output should be “9 8 1″, and if the input array is {8, 1, 7, 6, 0}, output should be “8 7 6 0″.Method 1 (Brute Force)
The simple & straight forward approach is to generate all the combinations of the elements and keep track of the largest number formed which is divisible by 3. Time Complexity: O(n x 2^n).  There will be 2^n combinations of array elements. To compare each combination with the largest number so far may take O(n) time.
Auxiliary Space: O(n) // to avoid integer overflow, the largest number is assumed to be stored in the form of array.Method 2 (Tricky)
This problem can be solved efficiently with the help of O(n) extra space. This method is based on the following facts about numbers which are multiple of 3.1) A number is multiple of 3 if and only if the sum of digits of number is multiple of 3.  For example, let us consider 8760, it is a multiple of 3 because sum of digits is 8 + 7+ 6+ 0 = 21, which is a multiple of 3.  2) If a number is multiple of 3, then all permutations of it are also multiple of 3.  For example, since 6078 is a multiple of 3, the numbers 8760, 7608, 7068, ….. are also multiples of 3. 3) We get the same remainder when we divide the number and sum of digits of the number.  For example, if divide number 151 and sum of it digits 7, by 3, we get the same remainder 1.What is the idea behind above facts?
The value of 10%3 and 100%3 is 1. The same is true for all the higher powers of 10, because 3 divides 9, 99, 999, … etc.
Let us consider a 3 digit number n to prove above facts. Let the first, second and third digits of n be ‘a’, ‘b’ and ‘c’ respectively. n can be written as

n = 100.a + 10.b + c 
Since (10^x)%3 is 1 for any x, the above expression gives the same remainder as following expression

 1.a + 1.b + c 
So the remainder obtained by sum of digits and ‘n’ is same.Following is a solution based on the above observation.1. Sort the array in non-decreasing order.2. Take three queues. One for storing elements which on dividing by 3 gives remainder as 0.The second queue stores digits which on dividing by 3 gives     remainder as 1. The third queue stores digits which on dividing by 3 gives remainder as 2. Call them as queue0, queue1 and queue23. Find the sum of all the digits.4. Three cases arise:
……4.1  The sum of digits is divisible by 3. Dequeue all the digits from the three queues. Sort them in non-increasing order. Output the array.……4.2  The sum of digits produces remainder 1 when divided by 3.
         Remove one item from queue1. If queue1 is empty, remove two items from queue2. If queue2 contains less than two items, the number is not possible.……4.3  The sum of digits produces remainder 2 when divided by 3.
         Remove one item from queue2. If queue2 is empty, remove two items from queue1. If queue1 contains less than two items, the number is not possible.5. Finally empty all the queues into an auxiliary array. Sort the auxiliary array in non-increasing order. Output the auxiliary array.Based on the above, below is the implementation:The above method can be optimized in following ways.
1) We can use Heap Sort or Merge Sort to make the time complexity O(nLogn). 2) We can avoid extra space for queues.  We know at most two items will be removed from the input array. So we can keep track of two items in two variables. 3) At the end, instead of sorting the array again in descending order, we can print the ascending sorted array in reverse order.  While printing in reverse order, we can skip the two elements to be removed.The above code works only if the input arrays has numbers from 0 to 9.  It can be easily extended for any positive integer array.  We just have to modify the part where we sort the array in decreasing order, at the end of code. Time Complexity: O(nLogn), assuming a O(nLogn) algorithm is used for sorting.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: MathematicalAlgo