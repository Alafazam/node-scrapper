A sorted array is rotated at some unknown point, find the minimum element in it.   Following solution assumes that all elements are distinct.Examples

Input: {5, 6, 1, 2, 3, 4}
Output: 1

Input: {1, 2, 3, 4}
Output: 1

Input: {2, 1}
Output: 1
A simple solution is to traverse the complete array and find minimum.  This solution requires  time.
We can do it in O(Logn) using Binary Search. If we take a closer look at above examples, we can easily figure out following pattern: The minimum element is the only element whose previous element is greater than it. If there is no such element, then there is no rotation and first element is the minimum element. Therefore, we do binary search for an element which is smaller than the previous element. We strongly recommend you to try it yourself before seeing the following C implementation. Output:
The minimum element is 1
The minimum element is 1
The minimum element is 1
The minimum element is 1
The minimum element is 1
The minimum element is 1
The minimum element is 1
The minimum element is 1
The minimum element is 1
How to handle duplicates?
It turned out that duplicates can’t be handled in O(Logn) time in all cases.  Thanks to Amit Jain for inputs.  The special cases that cause problems are like {2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 2} and {2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2}.  It doesn’t look possible to go to left half or right half by doing constant number of comparisons at the middle.  Following is an implementation that handles duplicates.  It may become O(n) in worst case though.Output:
The minimum element is 1
The minimum element is 0
The minimum element is 1
The minimum element is 3
The minimum element is 0
The minimum element is 1
The minimum element is 0
This article is contributed by Abhay Rathi. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Divide and Conquer