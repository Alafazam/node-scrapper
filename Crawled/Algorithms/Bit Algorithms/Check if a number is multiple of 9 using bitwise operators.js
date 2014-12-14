Method1 – Simple
Loop through all the bits of an integer. If a bit at ith position is set in the i/p no. then set the bit at (NO_OF_BITS – 1)  – i in o/p.  Where NO_OF_BITS is number of bits present in the given number.
Above program can be optimized by removing the use of variable temp. See below the modified code.Time Complexity: O(log n)
Space Complexity: O(1)Method 2 – Standard
The idea is to keep putting set bits of the num in reverse_num until num becomes zero. After num becomes zero, shift the remaining bits of reverse_num.Let  num is stored using 8 bits and num be 00000110.  After the loop you will get reverse_num as 00000011.  Now you need to left shift reverse_num 5 more times and you get the exact reverse 01100000.Time Complexity: O(log n)
Space Complexity: O(1)Method 3 – Lookup Table:
We can reverse the bits of a number in O(1) if we know the size of the number.   We can implement it using look up table.  Go through the below link for details. You will find some more interesting bit related stuff there.http://www-graphics.stanford.edu/~seander/bithacks.html#BitReverseTableTags: Bit Magic