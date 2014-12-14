You are given a list of n-1 integers and these integers are in the range of  1 to n. There are no duplicates in list.  One of the integers is missing in the list. Write an efficient code to find the missing integer.


METHOD 1(Use sum formula)
Algorithm:Program:Time Complexity:  O(n)
METHOD 2(Use XOR)Time Complexity:  O(n)In method 1, if the sum of the numbers goes beyond maximum allowed integer, then there can be integer overflow and we may not get correct answer.  Method 2 has no such problems.