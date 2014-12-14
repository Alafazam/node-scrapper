Tower of Hanoi is a mathematical puzzle where we have three rods and n disks. The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:
1) Only one disk can be moved at a time.
2) Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
3) No disk may be placed on top of a smaller disk.Output:

 Move disk 1 from rod A to rod B
 Move disk 2 from rod A to rod C
 Move disk 1 from rod B to rod C
 Move disk 3 from rod A to rod B
 Move disk 1 from rod C to rod A
 Move disk 2 from rod C to rod B
 Move disk 1 from rod A to rod B
 Move disk 4 from rod A to rod C
 Move disk 1 from rod B to rod C
 Move disk 2 from rod B to rod A
 Move disk 1 from rod C to rod A
 Move disk 3 from rod B to rod C
 Move disk 1 from rod A to rod B
 Move disk 2 from rod A to rod C
 Move disk 1 from rod B to rod C

For n disks, total 2n – 1 moves are required.References:
http://en.wikipedia.org/wiki/Tower_of_HanoiPascal’s triangle is a triangular array of the binomial coefficients. Write a function that takes an integer value n as input and prints first n lines of the Pascal’s triangle. Following are the first 6 rows of Pascal’s Triangle.Method 1 ( O(n^3) time complexity )
Number of entries in every line is equal to line number. For example, the first line has “1”, the second line has “1 1″, the third line has “1 2 1″,.. and so on. Every entry  in a line is value of a Binomial Coefficient.  The value of ith entry in line number line is C(line, i).  The value can be calculated using following formula.

C(line, i)   = line! / ( (line-i)! * i! ) 
A simple method is to run two loops and calculate the value of Binomial Coefficient in inner loop.Time complexity of this method is O(n^3).  Following are optimized methods.
Method 2( O(n^2) time and O(n^2) extra space )
If we take a closer at the triangle, we observe that every entry is sum of the two values above it. So we can create a 2D array that stores previously generated values. To generate a value in a line, we can use the previously stored values from array. This method can be optimized to use O(n) extra space as we need values only from previous row.  So we can create an auxiliary array of size n and overwrite values. Following is another method uses only O(1) extra space.
Method 3 ( O(n^2) time and O(1) extra space )
This method is based on method 1.  We know that ith entry in a line number line  is Binomial Coefficient C(line, i) and all lines start with value 1. The idea is to calculate C(line, i) using C(line, i-1). It can be calculated in O(1) time using the following.So method 3 is the best method among all, but it may cause integer overflow for large values of n as it multiplies two integers to obtain values.This article is compiled by Rahul and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: MathematicalAlgo