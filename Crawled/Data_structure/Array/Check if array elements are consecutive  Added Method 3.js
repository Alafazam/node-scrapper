Given an array arr[] of n integers, construct a Product Array prod[] (of same size) such that prod[i] is equal to the product of all the elements of arr[] except arr[i]. Solve it without division operator and in O(n).Example:
arr[]  = {10, 3, 5, 6, 2}
prod[]  = {180, 600, 360, 300, 900}Algorithm:
1) Construct a temporary array left[] such that left[i] contains product of all elements on left of arr[i] excluding arr[i].
2) Construct another temporary array right[] such that right[i] contains product of all elements on on right of arr[i] excluding arr[i].
3) To get prod[], multiply left[] and right[].Implementation:Time Complexity: O(n)
Space Complexity: O(n)
 Auxiliary Space: O(n) The above method can be optimized to work in space complexity  O(1).  Thanks to Dileep for suggesting the below solution.Time Complexity: O(n)
Space Complexity: O(n)
 Auxiliary Space: O(1) Please write comments if you find the above code/algorithm incorrect, or find better ways to solve the same problem.