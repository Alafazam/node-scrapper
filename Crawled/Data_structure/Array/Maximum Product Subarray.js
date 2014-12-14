Given an unsorted array of nonnegative integers, find a continous subarray which adds to a given number. Examples:There may be more than one subarrays with sum as the given sum. The following solutions print first such subarray. Source: Google Interview QuestionMethod 1 (Simple) 
A simple solution is to consider all subarrays one by one and check the sum of every subarray.  Following program implements the simple solution. We run two loops: the outer loop picks a starting point i and the inner loop tries all subarrays starting from i.Output:

Sum found between indexes 1 and 4

Time Complexity: O(n^2) in worst case.
Method 2 (Efficient)
Initialize a variable curr_sum as first element. curr_sum indicates the sum of current subarray. Start from the second element and add all elements one by one to the curr_sum. If curr_sum becomes equal to sum, then print the solution. If curr_sum exceeds the sum, then remove trailing elemnents while curr_sum is greater than sum.Following is C implementation of the above approach.Output:

Sum found between indexes 1 and 4

Time complexity of method 2 looks more than O(n), but if we take a closer look at the program, then we can figure out the time complexity is O(n).  We can prove it by counting the number of operations performed on every element of arr[] in worst case.  There are at most 2 operations performed on every element: (a) the element is added to the curr_sum (b) the element is subtracted from curr_sum. So the upper bound on number of operations is 2n which is O(n).Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.