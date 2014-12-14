Write a “C” function,  int addOvf(int* result, int a, int b) If there is no overflow, the function places the resultant = sum a+b in “result” and returns 0. Otherwise it returns -1.   The solution of casting to long and adding to find detecting the overflow is not allowed.Method 1
There can be overflow only if signs of two numbers are same, and sign of sum is opposite to the signs of numbers.Time Complexity  : O(1)
Space Complexity: O(1)
Method 2
Thanks to Himanshu Aggarwal for adding this method. This method doesn’t modify *result if there us an overflow.Time Complexity  : O(1)
Space Complexity: O(1)Please write comments if you find any bug in above codes/algorithms, or find other ways to solve the same problemTags: Bit Magic