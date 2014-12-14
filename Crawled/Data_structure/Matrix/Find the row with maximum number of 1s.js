Given an n x n matrix, where every row and column is sorted in increasing order. Given a number x, how to decide whether this x is in the matrix. The designed algorithm should have linear time complexity.  Thanks to devendraiiit for suggesting below approach.1) Start with top right element
2) Loop: compare this element e with x
….i) if they are equal then return its position
…ii) e < x then move it to down (if out of bound of matrix then break return false)
..iii) e > x then move it to left (if out of bound of matrix then break return false)
3) repeat the i), ii) and iii) till you find element or returned falseImplementation:Time Complexity: O(n)The above approach will also work for m x n matrix (not only for n x n). Complexity would be O(m + n).Please write comments if you find the above codes/algorithms incorrect, or find other ways to solve the same problem.