Given an integer ‘x’, write a C function that returns true if binary representation of x is palindrome else return false.For example a numbers with binary representation as 10..01 is palindrome and number with binary representation as 10..00 is not palindrome.The idea is similar to checking a string is palindrome or not.  We start from leftmost and rightmost bits and compare bits one by one. If we find a mismatch, then return false. Algorithm:
isPalindrome(x)
1) Find number of bits in x using sizeof() operator.
2) Initialize left and right positions as 1 and n respectively.
3) Do following while left ‘l’ is smaller than right ‘r’.
..…..a) If bit at position ‘l’ is not same as bit at position ‘r’, then return false.
..…..b) Increment ‘l’ and decrement ‘r’, i.e., do l++ and r–-.
4) If we reach here, it means we didn’t find a mismatching bit.To find the bit at a given position, we can use the idea similar to this post.  The expression  “x & (1 << (k-1))” gives us non-zero value if bit at k’th position from right is set and gives a zero value if if k’th bit is not set.Following is C++ implementation of the above algorithm.Output:
1
1
This article is contributed by Saurabh Gupta. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.