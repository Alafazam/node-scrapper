Partition problem is to determine whether a given set can be partitioned into two subsets such that the sum of elements in both subsets is same. ExamplesFollowing are the two main steps to solve this problem:
1) Calculate sum of the array.  If sum is odd, there can not be two subsets with equal sum, so return false.
2) If sum of array elements is even, calculate sum/2 and find a subset of array with sum equal to sum/2. The first step is simple. The second step is crucial, it can be solved either using recursion or Dynamic Programming.Recursive Solution
Following is the recursive property of the second step mentioned above.Output:
Can be divided into two subsets of equal sum
Time Complexity: O(2^n) In worst case, this solution tries two possibilities (whether to include or exclude) for every element.
Dynamic Programming Solution
The problem can be solved using dynamic programming when the sum of the elements is not too big.  We can create a 2D array part[][] of size (sum/2)*(n+1). And we can construct the solution in bottom up manner such that every filled entry has following propertyOutput:
Can be divided into two subsets of equal sum
Following diagram shows the values in partition table. The diagram is taken form the wiki page of partition problem.
Time Complexity: O(sum*n)
Auxiliary Space: O(sum*n)
Please note that this solution will not be feasible for arrays with big sum.References:
http://en.wikipedia.org/wiki/Partition_problem
Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Dynamic Programming