Given an array where every element occurs three times, except one element which occurs only once.  Find the element that occurs once.  Expected time complexity is O(n) and O(1) extra space.
Examples:

Input: arr[] = {12, 1, 12, 3, 12, 1, 1, 2, 3, 3}
Output: 2
We can use sorting to do it in O(nLogn) time.  We can also use hashing, but the worst case time complexity of hashing may be more than O(n) and hashing requires extra space.The idea is to use bitwise operators for a solution that is O(n) time and uses O(1) extra space.   The solution is not easy like other XOR based solutions, because all elements appear odd number of times here.  The idea is taken from here.Run a loop for all elements in array.  At the end of every iteration, maintain following two values.ones:  The bits that have appeared 1st time or 4th time or 7th time .. etc.twos:   The bits that have appeared 2nd time or 5th time or 8th time .. etc.Finally, we return the value of ‘ones’How to maintain the values of ‘ones’ and ‘twos’?
‘ones’ and ‘twos’ are initialized as 0. For every new element in array, find out the common set bits in the new element and previous value of ‘ones’.  These common set bits are actually the bits that should be added to ‘twos’. So do bitwise OR of the common set bits with ‘twos’.  ‘twos’ also gets some extra bits that appear third time.  These  extra bits are removed later.
Update ‘ones’ by doing XOR of new element with previous value of ‘ones’. There may be some bits which appear 3rd time.  These extra bits are also removed later.Both ‘ones’ and ‘twos’ contain those extra bits which appear 3rd time.  Remove these extra bits by finding out common set bits in ‘ones’ and ‘twos’.Output:
2
Time Complexity: O(n)
Auxiliary Space: O(1)Following is another O(n) time complexity and O(1) extra space method suggested by aj.  We can sum the bits in same positions for all the numbers and take modulo with 3. The bits for which sum is not multiple of 3, are the bits of number with single occurrence.
Let us consider the example array {5, 5, 5, 8}. The 101, 101, 101, 1000
Sum of first bits%3 = (1 + 1 + 1 + 0)%3 = 0;
Sum of second bits%3 = (0 + 0 + 0 + 0)%0 = 0;
Sum of third bits%3 = (1 + 1 + 1 + 0)%3 = 0;
Sum of fourth bits%3 = (1)%3 = 1;
Hence number which appears once is 1000This article is compiled by Sumit Jain and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.