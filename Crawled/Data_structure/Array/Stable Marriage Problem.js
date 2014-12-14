Given a set of time intervals in any order, merge all overlapping intervals into one and output the result which should have only mutually exclusive intervals. Let the intervals  be represented as pairs of integers for simplicity. 
For example, let the given set of intervals be  {{1,3}, {2,4}, {5,7}, {6,8} }. The intervals {1,3} and {2,4} overlap with each other, so they should be merged and become {1, 4}. Similarly {5, 7} and {6, 8} should be merged and become {5, 8}Write a function which produces the set of merged intervals for the given set of intervals. A simple approach is to start from the first interval and compare it with all other intervals for overlapping, if it overlaps with any other interval, then remove the other interval from list and merge the other into the first interval. Repeat the same steps for remaining intervals after first. This approach cannot be implemented in better than O(n^2) time.An efficient approach is to first sort the intervals according to starting time.  Once we have the sorted intervals, we can combine all intervals in a linear traversal.  The idea is, in sorted array of intervals, if interval[i] doesn’t overlap with interval[i-1], then interval[i+1] cannot overlap with interval[i-1] because starting time of interval[i+1] must be greater than or equal to interval[i]. Following is the detailed step by step algorithm.1. Sort the intervals based on increasing order of starting time.
2. Push the first interval on to a stack.
3. For each interval do the following
……..a. If the current interval does not overlap with the stack top, push it.
……..b.      If the current interval overlaps with stack top and ending time of current interval is more than that of stack top, update stack top with the ending time of current interval.
4.       At the end stack contains the merged intervals.Below is a C++ implementation of the above approach.Output:


 The Merged Intervals are: [1,9]
 The Merged Intervals are: [1,8]
 The Merged Intervals are: [10,13] [7,9] [4,6] [1,3]

Time complexity of the method is O(nLogn) which is for sorting.  Once the array of intervals is sorted, merging takes linear time.This article is compiled by Ravi Chandra Enaganti. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: stack