Write a function that, for a given no n, finds a number p which is greater than or equal to n and is a power of 2.     There are plenty of solutions for this. Let us take the example of 17 to explain some of them.  
Method 1(Using Log of the number)Example
Method 2 (By getting the position of only set bit in result )Example:
Method 3(Shift result one by one)
Thanks to coderyogi  for suggesting this method .  This method is a variation of method 2 where instead of getting count, we shift the result one by one in a loop.  Time Complexity:  O(lgn)  
Method 4(Customized and Fast) Example:Program:  Time Complexity:  O(lgn)  References:
http://en.wikipedia.org/wiki/Power_of_2