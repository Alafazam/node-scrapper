Below solution divides the problem into subproblems of size y/2 and call the subproblems recursively.
Time Complexity: O(n)
Space Complexity: O(1)
Algorithmic Paradigm:  Divide and conquer.Above function can be optimized to O(logn) by calculating power(x, y/2) only once and storing it. Time Complexity of optimized solution: O(logn)
Let us extend the pow function to work for negative y and float x.Tags: Divide and Conquer