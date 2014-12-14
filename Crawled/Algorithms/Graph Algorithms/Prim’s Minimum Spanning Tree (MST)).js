Given a number n, write a function that returns true if n is divisible by 9, else false. The most simple way to check for n’s divisibility by 9 is to do n%9.  
Another method is to sum the digits of n.  If sum of digits is multiple of 9, then n is multiple of 9.
The above methods are not bitwise operators based methods and require use of % and /.
The bitwise operators are generally faster than modulo and division operators. Following is a bitwise operator based method to check divisibility by 9.Output:
0 9 18 27 36 45 54 63 72 81 90 99
How does this work?
n/9 can be written in terms of n/8 using the following simple formula.

n/9 = n/8 - n/72
Since we need to use bitwise operators, we get the value of floor(n/8) using n>>3 and get value of n%8 using n&7. We need to write above expression in terms of floor(n/8) and n%8.
n/8 is equal to “floor(n/8) + (n%8)/8″.  Let us write the above expression in terms of floor(n/8) and n%8

n/9 = floor(n/8) + (n%8)/8 - [floor(n/8) + (n%8)/8]/9
n/9 = floor(n/8) - [floor(n/8) - 9(n%8)/8 + (n%8)/8]/9
n/9 = floor(n/8) - [floor(n/8) - n%8]/9
From above equation, n is a multiple of 9 only if the expression floor(n/8) – [floor(n/8) – n%8]/9 is an integer.  This expression can only be an integer if the sub-expression [floor(n/8) – n%8]/9 is an integer.  The subexpression can only be an integer if [floor(n/8) – n%8] is a multiple of 9.  So the problem reduces to a smaller value which can be written in terms of bitwise operators.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above