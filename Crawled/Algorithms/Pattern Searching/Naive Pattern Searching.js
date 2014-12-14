Given a binary matrix, find out the maximum size square sub-matrix with all 1s. For example, consider the below binary matrix. 
 
   0  1  1  0  1 
   1  1  0  1  0 
   0  1  1  1  0
   1  1  1  1  0
   1  1  1  1  1
   0  0  0  0  0
The maximum square sub-matrix with all set bits is

    1  1  1
    1  1  1
    1  1  1
Algorithm:
Let the given binary matrix be M[R][C]. The idea of the algorithm is to construct an auxiliary size matrix S[][] in which each entry S[i][j] represents size of the square sub-matrix with all 1s including M[i][j] where M[i][j] is the rightmost and bottommost entry in sub-matrix.For the given M[R][C] in above example, constructed S[R][C] would be:

   0  1  1  0  1
   1  1  0  1  0
   0  1  1  1  0
   1  1  2  2  0
   1  2  2  3  1
   0  0  0  0  0
The value of maximum entry in above matrix is 3 and coordinates of the entry are (4, 3). Using the maximum value and its coordinates, we can find out the required sub-matrix.Time Complexity:  O(m*n) where m is number of rows and n is number of columns in the given matrix.
Auxiliary Space: O(m*n) where m is number of rows and n is number of columns in the given matrix.
Algorithmic Paradigm: Dynamic ProgrammingPlease write comments if you find any bug in above code/algorithm, or find other ways to solve the same problemTags: Dynamic Programming