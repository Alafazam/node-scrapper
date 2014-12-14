Write a C function that unsets the rightmost set bit of an integer. Examples:

Input:  12 (00...01100)
Output: 8 (00...01000)

Input:  7 (00...00111)
Output: 6 (00...00110)

Let the input number be n.   n-1 would have all the bits flipped after the rightmost set bit (including the set bit).  So, doing n&(n-1) would give us the required result.Please write comments if you find the above code/algorithm incorrect, or find better ways to solve the same problem