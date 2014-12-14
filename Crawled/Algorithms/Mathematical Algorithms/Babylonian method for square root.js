Given two square matrices A and B of size n x n each, find their multiplication matrix.   Naive Method
Following is a simple way to multiply two matrices. Time Complexity of above method is O(N3).   Divide and Conquer   
Following is simple Divide and Conquer method to multiply two square matrices.
1) Divide matrices A and B in 4 sub-matrices of size N/2 x N/2 as shown in the below diagram.
2) Calculate following values recursively. ae + bg, af + bh, ce + dg and cf + dh. In the above method, we do 8 multiplications for matrices of size N/2 x N/2 and 4 additions. Addition of two matrices takes O(N2) time.  So the time complexity can be written as

T(N) = 8T(N/2) + O(N2)  

From Master's Theorem, time complexity of above method is O(N3)
which is unfortunately same as the above naive method.

Simple Divide and Conquer also leads to O(N3), can there be a better way?
In the above divide and conquer method, the main component for high time complexity is 8 recursive calls.  The idea of Strassen’s method is to reduce the number of recursive calls to 7.  Strassen’s method is similar to above simple divide and conquer method in the sense that this method also divide matrices to sub-matrices of size N/2 x N/2 as shown in the above diagram, but in Strassen’s method, the four sub-matrices of result are calculated using following formulae.Time Complexity of Strassen’s Method
Addition and Subtraction of two matrices takes  O(N2)  time.  So time complexity can be written as Generally Strassen’s Method is not preferred for practical applications for following reasons.
1) The constants used in Strassen’s method are high and for a typical application Naive method works better.
2) For Sparse matrices, there are better methods especially designed for them.
3) The submatrices in recursion take extra space.
4) Because of the limited precision of computer arithmetic on noninteger values, larger errors accumulate in Strassen’s algorithm than in Naive Method (Source: CLRS Book)References:
Introduction to Algorithms 3rd Edition by Clifford Stein, Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest
https://www.youtube.com/watch?v=LOLebQ8nKHA
https://www.youtube.com/watch?v=QXY4RskLQcIPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: Divide and Conquer