The value of Exponential Function e^x can be expressed using following Taylor Series.
e^x = 1 + x/1! + x^2/2! + x^3/3! + ...... 
How to efficiently calculate the sum of above series?
The series can be re-written as Let the sum needs to be calculated for n terms, we can calculate sum using following loop.

for (i = n - 1, sum = 1; i > 0; --i )
    sum = 1 + x * sum / i; 
Following is implementation of the above idea.Output:
e^x = 2.718282
This article is compiled by Rahul and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: MathematicalAlgo