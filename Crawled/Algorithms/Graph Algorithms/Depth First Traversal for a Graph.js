We can multiply a number by 7 using bitwise operator.  First left shift the number by 3 bits (you will get 8n) then subtract the original numberfrom the shifted number and return the difference (8n – n).


Program:Time Complexity: O(1)
Space Complexity: O(1)Note: Works only for positive integers.
Same concept can be used for fast multiplication by 9 or other numbers.Tags: Bit Magic, MathematicalAlgo