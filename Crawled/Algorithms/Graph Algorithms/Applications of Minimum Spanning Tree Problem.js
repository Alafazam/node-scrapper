A nibble is a four-bit aggregation, or half an octet. There are two nibbles in a byte.
Given a byte, swap the two nibbles in it. For example 100 is be represented as 01100100 in a byte (or 8 bits).  The two nibbles are (0110) and (0100). If we swap the two nibbles, we get 01000110 which is 70 in decimal.To swap the nibbles, we can use bitwise &, bitwise ‘<>’ operators. A byte can be represented using a unsigned char in C as size of char is 1 byte in a typical C compiler.  Following is C program to swap the two nibbles in a byte.Output:
70
Explanation:
100 is 01100100 in binary. The operation can be split mainly in two parts
1) The expression “x & 0x0F” gives us last 4 bits of x. For x = 100, the result is 00000100. Using bitwise ‘<
2) The expression “x & 0xF0” gives us first four bits of x. For x = 100, the result is 01100000. Using bitwise ‘>>’ operator, we shift the digit to the right 4 times and make the first four bits as 0. The result after shift is 00000110.
At the end we use the bitwise OR ‘|’ operation of the two expressions explained above.  The OR operator places first nibble to the end and last nibble to first.  For x = 100, the value of (01000000) OR (00000110) gives the result 01000110 which is equal to 70 in decimal.
This article is contributed by Anuj Garg. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above
		
 
 




(adsbygoogle = window.adsbygoogle || []).push({});




 
 
 
Related Topics:Check if binary representation of a number is palindromeHow to turn off a particular bit in a number?Check if a number is multiple of 9 using bitwise operatorsHow to swap two numbers without using a temporary variable?Divide and Conquer | Set 4 (Karatsuba algorithm for fast multiplication)Find position of the only set bitSwap all odd and even bitsAdd two bit strings
 


Tweet



  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();






				2) The expression “x & 0xF0” gives us first four bits of x. For x = 100, the result is 01100000. Using bitwise ‘>>’ operator, we shift the digit to the right 4 times and make the first four bits as 0. The result after shift is 00000110.At the end we use the bitwise OR ‘|’ operation of the two expressions explained above.  The OR operator places first nibble to the end and last nibble to first.  For x = 100, the value of (01000000) OR (00000110) gives the result 01000110 which is equal to 70 in decimal.This article is contributed by Anuj Garg. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above