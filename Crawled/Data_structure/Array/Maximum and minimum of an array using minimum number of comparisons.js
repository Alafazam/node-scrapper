Iterative way:
1) Initialize start and end indexes. 
    start = 0, end = n-1
2) In a loop, swap arr[start] with arr[end] and change start and end as follows.
 start = start +1; end = end – 1Time Complexity: O(n)Recursive Way:
1) Initialize start and end indexes
    start = 0, end = n-1
2) Swap arr[start] with arr[end]
3) Recursively call reverse for rest of the array.Time Complexity: O(n)Please write comments if you find any bug in the above programs or other ways to solve the same problem.Tags: array