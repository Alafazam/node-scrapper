Given a boolean matrix mat[M][N] of size M X N, modify it such that if a matrix cell mat[i][j] is 1 (or true) then make all the cells of ith row and jth column as 1. 
Method 1 (Use two temporary arrays)
1) Create two temporary arrays row[M] and col[N].  Initialize all values of row[] and col[] as 0.
2) Traverse the input matrix mat[M][N]. If you see an entry mat[i][j] as true, then mark row[i] and col[j] as true.
3) Traverse the input matrix mat[M][N] again. For each entry mat[i][j], check the values of row[i] and col[j].  If any of the two values (row[i] or col[j]) is true, then mark mat[i][j] as true.Thanks to Dixit Sethi for suggesting this method.Output:Time Complexity:  O(M*N)
Auxiliary Space: O(M + N)
Method 2 (A Space Optimized Version of Method 1)
This method is a space optimized version of above method 1.  This method uses the first row and first column of the input matrix in place of the auxiliary arrays row[] and col[] of method 1.  So what we do is: first take care of first row and column and store the info about these two in two flag variables rowFlag and colFlag.  Once we have this info, we can use first row and first column as auxiliary arrays and apply method 1 for submatrix (matrix excluding first row and first column) of size (M-1)*(N-1).1) Scan the first row and set a variable rowFlag to indicate whether we need to set all 1s in first row or not.
2) Scan the first column and set a variable colFlag to indicate whether we need to set all 1s in first column or not.
3) Use first row and first column as the auxiliary arrays row[] and col[] respectively, consider the matrix as submatrix starting from second row and second column and apply method 1.
4) Finally, using rowFlag and colFlag, update first row and first column if needed.Time Complexity:  O(M*N)
Auxiliary Space: O(1)Thanks to Sidh for suggesting this method.Please write comments if you find the above codes/algorithms incorrect, or find other ways to solve the same problem.Given a binary matrix, print all unique rows of the given matrix. Method 1 (Simple)
A simple approach is to check each row with all processed rows. Print the first row. Now, starting from the second row, for each row, compare the row with already processed rows.  If the row matches with any of the processed rows, don’t print it. If the current row doesn’t match with any row, print it.Time complexity: O( ROW^2 x COL )
Auxiliary Space: O( 1 )Method 2 (Use Binary Search Tree)
Find the decimal equivalent of each row and insert it into BST. Each node of the BST will contain two fields, one field for the decimal value, other for row number. Do not insert a node if it is duplicated. Finally, traverse the BST and print the corresponding rows.Time complexity: O( ROW x COL + ROW x log( ROW ) )
Auxiliary Space: O( ROW )This method will lead to Integer Overflow if number of columns is large.Method 3 (Use Trie data structure)
Since the matrix is boolean, a variant of Trie data structure can be used where each node will be having two children one for 0 and other for 1. Insert each row in the Trie. If the row is already there, don’t print the row. If row is not there in Trie, insert it in Trie and print it.Below is C implementation of method 3.Time complexity: O( ROW x COL )
Auxiliary Space: O( ROW x COL )This method has better time complexity. Also, relative order of rows is maintained while printing.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Advance Data Structures, Advanced Data StructuresGiven a binary matrix, find out the maximum size square sub-matrix with all 1s. For example, consider the below binary matrix. 
 
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
Algorithmic Paradigm: Dynamic ProgrammingPlease write comments if you find any bug in above code/algorithm, or find other ways to solve the same problemTags: Dynamic ProgrammingGiven a binary matrix, print all unique rows of the given matrix. Method 1 (Simple)
A simple approach is to check each row with all processed rows. Print the first row. Now, starting from the second row, for each row, compare the row with already processed rows.  If the row matches with any of the processed rows, don’t print it. If the current row doesn’t match with any row, print it.Time complexity: O( ROW^2 x COL )
Auxiliary Space: O( 1 )Method 2 (Use Binary Search Tree)
Find the decimal equivalent of each row and insert it into BST. Each node of the BST will contain two fields, one field for the decimal value, other for row number. Do not insert a node if it is duplicated. Finally, traverse the BST and print the corresponding rows.Time complexity: O( ROW x COL + ROW x log( ROW ) )
Auxiliary Space: O( ROW )This method will lead to Integer Overflow if number of columns is large.Method 3 (Use Trie data structure)
Since the matrix is boolean, a variant of Trie data structure can be used where each node will be having two children one for 0 and other for 1. Insert each row in the Trie. If the row is already there, don’t print the row. If row is not there in Trie, insert it in Trie and print it.Below is C implementation of method 3.Time complexity: O( ROW x COL )
Auxiliary Space: O( ROW x COL )This method has better time complexity. Also, relative order of rows is maintained while printing.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Advance Data Structures, Advanced Data StructuresAbout four months of gap (missing GFG), a new post. Given an M x N matrix, transpose the matrix without auxiliary memory.It is easy to transpose matrix using an auxiliary array. If the matrix is symmetric in size, we can transpose the matrix inplace by mirroring the 2D array across it’s diagonal (try yourself). How to transpose an arbitrary size matrix inplace? See the following matrix,As per 2D numbering in C/C++, corresponding location mapping looks like,Note that the first and last elements stay in their original location. We can easily see the transformation forms few permutation cycles. 1->4->5->9->3->1  – Total 5 elements form the cycle 2->8->10->7->6->2 – Another 5 elements form the cycle 0  – Self cycle 11 – Self cycle From the above example, we can easily devise an algorithm to move the elements along these cycles. How can we generate permutation cycles? Number of elements in both the matrices are constant, given by N = R * C, where R is row count and C is column count. An element at location ol (old location in R x C matrix), moved to nl (new location in C x R matrix). We need to establish relation between ol, nl, R and C. Assume ol = A[or][oc]. In C/C++ we can calculate the element address as,It is to be moved to new location nl in the transposed matrix, say nl = A[nr][nc], or in C/C++ termsObserve, nr = oc and nc = or, so replacing these for nl,after solving for relation between ol and nl, we getOR,Note that the values of nl and ol never go beyond N-1, so considering modulo division on both the sides by (N-1), we get the following based on properties of congruence,A curious reader might have observed the significance of above relation. Every location is scaled by a factor of R (row size). It is obvious from the matrix that every location is displaced by scaled factor of R. The actual multiplier depends on congruence class of (N-1), i.e. the multiplier can be both -ve and +ve value of the congruent class.Hence every location transformation is simple modulo division. These modulo divisions form cyclic permutations. We need some book keeping information to keep track of already moved elements. Here is code for inplace matrix transformation,Output:Extension: 17 – March – 2013 Some readers identified similarity between the matrix transpose and string transformation. Without much theory I am presenting the problem and solution. In given array of elements like [a1b2c3d4e5f6g7h8i9j1k2l3m4]. Convert it to [abcdefghijklm1234567891234]. The program should run inplace. What we need is an inplace transpose. Given below is code.The post is incomplete without mentioning two links.1. Aashish covered good theory behind cycle leader algorithm. See his post on string transformation.2. As usual, Sambasiva demonstrated his exceptional skills in recursion to the problem. Ensure to understand his solution.— Venki. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Given a 2D matrix, print all elements of the given matrix in diagonal order.  For example, consider the following 5 X 4 input matrix.

    1     2     3     4
    5     6     7     8
    9    10    11    12
   13    14    15    16
   17    18    19    20
Diagonal printing of the above matrix is

    1
    5     2
    9     6     3
   13    10     7     4
   17    14    11     8
   18    15    12
   19    16
   20
Following is C++ code for diagonal printing.The diagonal printing of a given matrix ‘matrix[ROW][COL]’ always has ‘ROW + COL – 1′ lines in outputOutput:
Given matrix is
    1     2     3     4
    5     6     7     8
    9    10    11    12
   13    14    15    16
   17    18    19    20

Diagonal printing of matrix is
    1
    5     2
    9     6     3
   13    10     7     4
   17    14    11     8
   18    15    12
   19    16
   20
This article is compiled by Ashish Anand and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Given a 2D array, find the maximum sum subarray in it.  For example, in the following 2D array, the maximum sum subarray is highlighted with blue rectangle and sum of this subarray is 29.This problem is mainly an extension of Largest Sum Contiguous Subarray for 1D array. The naive solution for this problem is to check every possible rectangle in given 2D array. This solution requires 4 nested loops and time complexity of this solution would be O(n^4).Kadane’s algorithm for 1D array can be used to reduce the time complexity to O(n^3).  The idea is to fix the left and right columns one by one and find the maximum sum contiguous rows for every left and right column pair. We basically find top and bottom row numbers (which have maximum sum) for every fixed left and right column pair. To find the top and bottom row numbers, calculate sun of elements in every row from left to right and store these sums in an array say temp[].  So temp[i] indicates sum of elements from left to right in row i.  If we apply Kadane’s 1D algorithm on temp[],  and get the maximum sum subarray of temp, this maximum sum would be the maximum possible sum with left and right as boundary columns.  To get the overall maximum sum, we compare this sum with the maximum sum so far.Output:
(Top, Left) (1, 1)
(Bottom, Right) (3, 3)
Max sum is: 29
Time Complexity: O(n^3)This article is compiled by Aashish Barnwal. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Dynamic ProgrammingGiven two square matrices A and B of size n x n each, find their multiplication matrix.   Naive Method
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
https://www.youtube.com/watch?v=QXY4RskLQcIPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: Divide and ConquerWrite a code which inputs two numbers m and n and creates a matrix of size m  x n (m rows and n columns) in which every elements is either X or 0. The Xs and 0s must be filled alternatively, the matrix should have outermost rectangle of Xs, then a rectangle of 0s, then a rectangle of Xs, and so on.Examples:

Input: m = 3, n = 3
Output: Following matrix 
X X X
X 0 X
X X X

Input: m = 4, n = 5
Output: Following matrix
X X X X X
X 0 0 0 X
X 0 0 0 X
X X X X X

Input:  m = 5, n = 5
Output: Following matrix
X X X X X
X 0 0 0 X
X 0 X 0 X
X 0 0 0 X
X X X X X

Input:  m = 6, n = 7
Output: Following matrix
X X X X X X X
X 0 0 0 0 0 X
X 0 X X X 0 X
X 0 X X X 0 X
X 0 0 0 0 0 X
X X X X X X X 
We strongly recommend to minimize the browser and try this yourself first.This question was asked in campus recruitment of Shreepartners Gurgaon. I followed the following approach.1)  Use the code for Printing Matrix in Spiral form.
2) Instead of printing the array, inserted the element ‘X’ or ‘0’ alternatively in the array.Following is C implementation of the above approach.Output:
Output for m = 5, n = 6
X X X X X X
X 0 0 0 0 X
X 0 X X 0 X
X 0 0 0 0 X
X X X X X X

Output for m = 4, n = 4
X X X X
X 0 0 X
X 0 0 X
X X X X

Output for m = 3, n = 4
X X X X
X 0 0 X
X X X X 
Time Complexity: O(mn)
Auxiliary Space: O(mn)Please suggest if someone has a better solution which is more efficient in terms of space and time.This article is contributed by Deepak Bisht.  Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveGiven a boolean 2D array, where each row is sorted. Find the row with the maximum number of 1s.A simple method is to do a row wise traversal of the matrix, count the number of 1s in each row and compare the count with max. Finally, return the index of row with maximum 1s. The time complexity of this method is O(m*n) where m is number of rows and n is number of columns in matrix.We can do better. Since each row is sorted, we can use Binary Search to count of 1s in each row. We find the index of first instance of 1 in each row. The count of 1s will be equal to total number of columns minus the index of first 1.See the following code for implementation of the above approach.Output:
Index of row with maximum 1s is 2
Time Complexity: O(mLogn) where m is number of rows and n is number of columns in matrix.The above solution can be optimized further.  Instead of doing binary search in every row, we first check whether the row has more 1s than max so far. If the row has more 1s, then only count 1s in the row. Also, to count 1s in a row, we don’t do binary search in complete row, we do search in before the index of last max.  Following is an optimized version of the above solution.The worst case time complexity of the above optimized version is also O(mLogn), the will solution work better on average. Thanks to Naveen Kumar Singh for suggesting the above solution. Sources: this and thisThe worst case of the above solution occurs for a matrix like following.
 0 0 0 … 0 1
 0 0 0 ..0 1 1
 0 … 0 1 1 1
 ….0 1 1 1 1Following method works in O(m+n) time complexity in worst case. Step1: Get the index of first (or leftmost) 1 in the first row.Step2: Do following for every row after the first row
…IF the element on left of previous leftmost 1 is 0, ignore this row.
…ELSE Move left until a 0 is found. Update the leftmost index to this index and max_row_index to be the current row.The time complexity is O(m+n) because we can possibly go as far left as we came ahead in the first step.Following is C++ implementation of this method.Thanks to Tylor, Ankan and Palash for their inputs.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Given an n x n matrix, where every row and column is sorted in non-decreasing order.  Print all elements of matrix in sorted order.Example:We strongly recommend to minimize the browser and try this yourself first.We can use Young Tableau to solve the above problem.  The idea is to consider given 2D array as Young Tableau and call extract minimum O(N)Output:

Elements of matrix in sorted order
10 15 20 25 27 29 30 32 33 35 37 39 40 45 48 50
Time complexity of extract minimum is O(N) and it is called O(N2) times.  Therefore the overall time complexity is O(N3).A better solution is to use the approach used for merging k sorted arrays. The idea is to use a Min Heap of size N which stores elements of first column.  The do extract minimum. In extract minimum, replace the minimum element with the next element of the row from which the element is extracted.  Time complexity of this solution is O(N2LogN). Output:
10 15 20 25 27 29 30 32 33 35 37 39 40 45 48 50
Exercise:
Above solutions work for a square matrix. Extend the above solutions to work for an M*N rectangular matrix.This article is contributed by Varun. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: Matrix