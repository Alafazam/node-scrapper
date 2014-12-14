1. A simple method for this is to simply take the log of the number on base 2 and if you get an integer then number is power of 2.

2. Another solution is to keep dividing the number by two, i.e, do n = n/2 iteratively. In any iteration, if n%2 becomes non-zero and n is not 1 then n is not a power of 2.  If n becomes 1 then it is a power of 2.Output:
No
No
Yes
Yes
No
Yes
3. All power of two numbers have only one bit set. So count the no. of set bits and if you get 1 then number is a power of 2.  Please see http://geeksforgeeks.org/?p=1176 for counting set bits.4.  If we subtract a power of 2 numbers by 1 then all unset bits after the only set bit become set; and the set bit become unset.For example for 4 ( 100) and 16(10000), we get following after subtracting 1
3    –> 011
15  –> 01111So, if a number n is a power of 2 then bitwise & of n and n-1 will be zero. We can say n is a power of 2 or not based on value of  n&(n-1).  The expression n&(n-1) will not work when n is 0. To handle this case also, our expression will become n& (!n&(n-1)) (thanks to Mohammad for adding this case).
Below is the implementation of this method. Output:
No
No
Yes
Yes
No
Yes
Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: Bit Magic