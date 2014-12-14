Given a integer x, write a function that multiplies x with 3.5 and returns the integer result.  You are not allowed to use %, /, *. Examples:
Input: 2
Output: 7Input: 5
Output: 17 (Ignore the digits after decimal point)Solution:
1. We can get x*3.5 by adding 2*x, x and x/2.  To calculate 2*x, left shift x by 1 and to calculate x/2, right shift x by 2. 
2. Another way of doing this could be (8*x – x)/2 (See below code). Thanks to ajaym  for suggesting this.Please write comments if you find the above code/algorithm incorrect, or find better ways to solve the same problem