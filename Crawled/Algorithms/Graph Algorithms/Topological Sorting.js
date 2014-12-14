Given a number having only one ‘1’ and all other ’0’s in its binary representation, find position of the only set bit.  Source: Microsoft Interview | 18The idea is to start from rightmost bit and one by one check value of every bit. Following is detailed algorithm.1) If number is power of two then and then only its binary representation contains only one ‘1’. That’s why check whether given number is power of 2 or not. 		  If given number is not power of 2, then print error message and exit.2) Initialize two variables; i = 1 (for looping) and pos = 1 (to find position of set bit)3) Inside loop, do bitwise AND of i and number ‘N’. If value of this operation is true, then “pos” bit is set, so break the loop and return position.   	  Otherwise, increment “pos” by 1 and left shift i by 1 and repeat the procedure. Output:
n = 16, Position 5
n = 12, Invalid number
n = 128, Position 8
Following is another method for this problem.  The idea is to one by one right shift the set bit of given number ‘n’ until ‘n’ becomes 0.  Count how many times we shifted to make ‘n’ zero.  The final count is position of the set bit.Output:
n = 0, Invalid number
n = 12, Invalid number
n = 128, Position 8
We can also use log base 2 to find the position. Thanks to Arunkumar for suggesting this solution. Output:
n = 0, Invalid number
n = 12, Invalid number
n = 128, Position 8
This article is compiled by Narendra Kangralkar. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.