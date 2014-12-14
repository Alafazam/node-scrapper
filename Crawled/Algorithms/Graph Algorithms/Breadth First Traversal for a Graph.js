Parity:  Parity of a number refers to whether it contains an odd or even number of 1-bits. The number has “odd parity”, if it contains odd number of 1-bits and is “even parity” if it contains even number of 1-bits.
Main idea of the below solution is – Loop while n is not 0 and in loop unset one of the set bits and invert parity.Program:Above solution can be optimized by using lookup table. Please refer to Bit Twiddle Hacks[1st reference] for details.Time Complexity:    The time taken by above algorithm is proportional to the number of bits set. Worst case complexity is O(Logn).Uses: Parity is used in error detection and cryptography.

References:
http://graphics.stanford.edu/~seander/bithacks.html#ParityNaive – last checked on 30 May 2009.Tags: Bit Magic