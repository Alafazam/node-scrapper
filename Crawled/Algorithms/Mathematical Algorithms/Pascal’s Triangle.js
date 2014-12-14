A magic square of order n is an arrangement of n^2 numbers, usually distinct integers, in a square, such that the n numbers in all rows, all columns, and both diagonals sum to the same constant. A magic square contains the integers from 1 to n^2. The constant sum in every row, column and diagonal is called the magic constant or magic sum, M. The magic constant of a normal magic square depends only on n and has the following value:
M =  n(n^2+1)/2For normal magic squares of order n = 3, 4, 5, …, the magic constants are: 15, 34, 65, 111, 175, 260, … In this post, we will discuss how programmatically we can generate a magic square of size n.  Before we go further, consider the below examples:Did you find any pattern in which the numbers are stored?
In any magic square, the first number i.e. 1 is stored at position (n/2, n-1). Let this position be (i,j). The next number is stored at position (i-1, j+1) where we can consider each row & column as circular array i.e. they wrap around.Three conditions hold:1. The position of next number is calculated by decrementing row number of previous number by 1, and incrementing the column number of previous number by 1. At any time, if the calculated row position becomes -1, it will wrap around to n-1. Similarly, if the calculated column position becomes n, it will wrap around to 0.2. If the magic square already contains a number at the calculated position, calculated column position will be decremented by 2, and calculated row position will be incremented by 1.3. If the calculated row position is -1 & calculated column position is n, the new position would be: (0, n-2). Based on the above approach, following is the working code:Output:

The Magic Square for n=7:
Sum of each row or column 175:

 20  12   4  45  37  29  28
 11   3  44  36  35  27  19
  2  43  42  34  26  18  10
 49  41  33  25  17   9   1
 40  32  24  16   8   7  48
 31  23  15  14   6  47  39
 22  21  13   5  46  38  30

NOTE: This approach works only for odd values of n.References:
http://en.wikipedia.org/wiki/Magic_squareThis article is compiled by Aashish Barnwal and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: MathematicalAlgo