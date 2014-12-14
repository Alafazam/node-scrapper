Ugly numbers are numbers whose only prime factors are 2, 3 or 5. The sequence
1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, …
shows the first 11 ugly numbers. By convention, 1 is included.
Write a program to find and print the 150’th ugly number.

METHOD  1 (Simple)
Thanks to Nedylko Draganov for suggesting this solution.  Algorithm:
Loop for all positive integers until ugly number count is smaller than n, if an integer is ugly than increment ugly number count.To check if a number is ugly, divide the number by greatest divisible powers of 2, 3 and 5, if the number becomes 1 then it is an ugly number otherwise not. For example, let us see how to check for 300 is ugly or not. Greatest divisible power of 2 is 4, after dividing 300 by 4 we get 75.  Greatest divisible power of 3 is 3,  after dividing 75 by 3 we get 25.  Greatest divisible power of 5 is 25,  after dividing 25 by 25 we get 1.  Since we get 1 finally, 300 is ugly number.Implementation:This method is not time efficient as it checks for all integers until ugly number count becomes n, but space complexity of this method is O(1)  
METHOD  2 (Use Dynamic Programming)
Here is a time efficient solution with O(n) extra space.  The ugly-number sequence is 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, …
        because every number can only be divided by 2, 3, 5, one way to look at the sequence is to split the sequence to three groups as below:
        (1) 1×2, 2×2, 3×2, 4×2, 5×2, …
        (2) 1×3, 2×3, 3×3, 4×3, 5×3, …
        (3) 1×5, 2×5, 3×5, 4×5, 5×5, …        We can find that every subsequence is the ugly-sequence itself (1, 2, 3, 4, 5, …) multiply 2, 3, 5. Then we use similar merge method as merge sort, to get every ugly number from the three subsequence. Every step we choose the smallest one, and move one step after.Algorithm:Example:
Let us see how it works Program:Algorithmic Paradigm:   Dynamic Programming
Time Complexity:         O(n)
Storage Complexity:    O(n)Please write comments if you find any bug in the above program or other ways to solve the same problem. Tags: Dynamic Programming