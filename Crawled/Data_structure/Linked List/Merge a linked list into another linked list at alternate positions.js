Given two numbers represented by two lists, write a function that returns sum list. The sum list is list representation of addition of two input numbers.Example 1Example 2Solution
Traverse both lists. One by one pick nodes of both lists and add the values. If sum is more than 10 then make carry as 1 and reduce sum. If one list has more elements than the other then consider remaining values of this list as 0.  Following is C implementation of this approach. Output:

  First List is 7 5 9 4 6
  Second List is 8 4
  Resultant list is 5 0 0 5 6
Time Complexity:  O(m + n) where m and n are number of nodes in first and second lists respectively.Please write comments if you find the above codes/algorithms incorrect, or find other ways to solve the same problem.