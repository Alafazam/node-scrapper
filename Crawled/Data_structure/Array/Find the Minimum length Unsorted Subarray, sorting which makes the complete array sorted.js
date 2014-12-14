Question: Write a C function to find if a given integer x appears more than n/2 times in a sorted array of n integers. Basically, we need to write a function say isMajority() that takes an array (arr[] ), array’s size (n) and a number to be searched (x) as parameters and returns true if x is a majority element (present more than n/2 times).Examples:METHOD 1 (Using Linear Search)
Linearly search for the first occurrence of the element, once you find it (let at index i), check element at index i + n/2.  If element is present at i+n/2 then return 1 else return 0.Time Complexity:  O(n)
METHOD 2 (Using Binary Search)
Use binary search methodology to find the first occurrence of the given number.   The criteria for binary search is important here. 
Time Complexity:  O(Logn)
Algorithmic Paradigm:  Divide and ConquerPlease write comments if you find any bug in the above program/algorithm or a better way to solve the same problem.Tags: Divide and Conquer