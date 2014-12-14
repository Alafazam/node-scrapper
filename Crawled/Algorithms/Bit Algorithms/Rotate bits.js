Given a number x and two positions (from right side) in binary representation of x, write a function that swaps n bits at given two positions and returns the result. It is also given that the two sets of bits do not overlap.Examples:

Let p1 and p2 be the two given positions.

Example 1
Input:
x = 47 (00101111)
p1 = 1 (Start from second bit from right side)
p2 = 5 (Start from 6th bit from right side)
n = 3 (No of bits to be swapped)
Output:
227 (11100011)
The 3 bits starting from the second bit (from right side) are 
swapped with 3 bits starting from 6th position (from right side) 


Example 2
Input:
x = 28 (11100)
p1 = 0 (Start from first bit from right side)
p2 = 3 (Start from 4th bit from right side)
n = 2 (No of bits to be swapped)
Output:
7 (00111)
The 2 bits starting from 0th postion (from right side) are
swapped with 2 bits starting from 4th position (from right side) 

Solution
We need to swap two sets of bits. XOR can be used in a similar way as it is used to swap 2 numbers.  Following is the algorithm.Implementation:Output:Following is a shorter implementation of the same logicReferences:
Swapping individual bits with XOR Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above. 