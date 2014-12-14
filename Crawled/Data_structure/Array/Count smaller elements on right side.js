Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[]. Expected time complexity is O(Logn)  Examples:Method 1 (Linear Search)
Linearly search for x, count the occurrences of x and return the count.Time Complexity: O(n)Method 2 (Use Binary Search)
1) Use Binary search to get index of the first occurrence of x in arr[]. Let the index of the first occurrence be i.
2) Use Binary search to get index of the last occurrence of x in arr[]. Let the index of the last occurrence be j.
3) Return (j – i + 1);Time Complexity: O(Logn)
Programming Paradigm: Divide & ConquerPlease write comments if you find the above codes/algorithms incorrect, or find other ways to solve the same problem.Tags: Divide and Conquer