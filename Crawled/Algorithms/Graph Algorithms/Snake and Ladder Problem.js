Given two variables, x and y, swap two variables without using a third variable.Method 1 (Using Arithmetic Operators)
The idea is to get sum in one of the two given numbers.  The numbers can then be swapped using the sum and subtraction from sum.Output:
After Swapping: x = 5, y = 10
Multiplication and division can also be used for swapping. Output:
After Swapping: x = 5, y = 10
Method 2 (Using Bitwise XOR)
The bitwise XOR operator can be used to swap two variables.  The XOR of two numbers x and y returns a number which has all the bits as 1 wherever bits of x and y differ. For example XOR of 10 (In Binary 1010) and 5 (In Binary 0101) is 1111 and XOR of 7 (0111) and 5 (0101) is (0010).Output:
After Swapping: x = 5, y = 10
Problems with above methods
1) The multiplication and division based approach doesn’ work if one of the numbers is 0 as the product becomes 0 irrespective of the other number.2) Both Arithmetic solutions may cause arithmetic overflow.  If x and y are too large, addition and multiplication may go out of integer range.3) When we use pointers to variable and make a function swap, all of the above methods fail when both pointers point to the same variable. Let’s take a look what will happen in this case if both are pointing to the same variable.// Bitwise XOR based method
x = x ^ x; // x becomes 0
x = x ^ x; // x remains 0
x = x ^ x; // x remains 0// Arithmetic based method
x = x + x; // x becomes 2x
x = x – x; // x becomes 0
x = x – x; // x remains 0Let us see the following program.Output:
After swap(&x, &x): x = 0
Swapping a variable with itself may needed in many standard algorithms.  For example see this implementation of QuickSort where we may swap a variable with itself. The above problem can be avoided by putting a condition before the swapping.Output:
After swap(&x, &x): x = 10
Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above