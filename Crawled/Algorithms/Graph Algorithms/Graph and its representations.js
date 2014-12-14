The very first solution that comes to our mind is the one that we learned in school.  If sum of digits in a number is multiple of 3 then number is multiple of 3 e.g., for 612 sum of digits is 9 so it’s a multiple of 3. But this solution is not efficient.  You have to get all decimal digits one by one, add them and then check if sum is multiple of 3.There is a pattern in binary representation of the number that can be used to find if number is a multiple of 3. If difference between count of odd set bits (Bits set at odd positions) and even set bits is multiple of 3 then is the number.Example: 23 (00..10111)
1) Get count of all set bits at odd positions (For 23 it’s 3).
2) Get count of all set bits at even positions (For 23 it’s 1).
3) If difference of above two counts is a multiple of 3 then number is also a multiple of 3. (For 23 it’s 2 so 23 is not a multiple of 3)Take some more examples like 21, 15, etc…Proof:
Above can be proved by taking the example of 11 in decimal numbers. (In this context 11 in decimal numbers is same as 3 in binary numbers)
If difference between sum of odd digits and even digits is multiple of 11 then decimal number is multiple of 11. Let’s see how.Let’s take the example of 2 digit numbers in decimal
AB = 11A -A + B = 11A + (B – A)
So if (B – A) is a multiple of 11 then is AB.Let us take 3 digit numbers.ABC = 99A + A + 11B – B + C = (99A + 11B) + (A + C – B)
So if (A + C – B) is a multiple of 11 then is (A+C-B)Let us take 4 digit numbers now.
ABCD = 1001A + D + 11C – C + 999B + B – A
= (1001A – 999B + 11C) + (D + B – A -C )
So, if (B + D – A – C) is a multiple of 11 then is ABCD.This can be continued for all decimal numbers.
Above concept can be proved for 3 in binary numbers in the same way.

Time Complexity:  O(logn)Program:Tags: MathematicalAlgo