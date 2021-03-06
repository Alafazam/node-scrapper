Given an array of positive integers. All numbers occur even number of times except one number which occurs odd number of times. Find the number in O(n) time & constant space.Example:
I/P   = [1, 2, 3, 2, 3, 1, 3]
O/P  = 3Algorithm: 
Do bitwise XOR of all the elements. Finally we get the number which has odd occurrences.  
Program:
Time Complexity: O(n)Tags: Bit Magic