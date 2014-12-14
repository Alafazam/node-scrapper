Given an array of n elements, where each element is at most k away from its target position, devise an algorithm that sorts in O(n log k) time.  
For example, let us consider k is 2, an element at index 7 in the sorted array, can be at indexes 5, 6, 7, 8, 9 in the given array.Source: Nearly sorted algorithmWe can use Insertion Sort to sort the elements efficiently. Following is the C code for standard Insertion Sort.The inner loop will run at most k times. To move every element to its correct place, at most k elements need to be moved.  So overall complexity will be O(nk)We can sort such arrays more efficiently with the help of Heap data structure. Following is the detailed process that uses Heap.
1) Create a Min Heap of size k+1 with first k+1 elements. This will take O(k) time (See this GFact)
2) One by one remove min element from heap, put it in result array, and add a new element to heap from remaining elements.Removing an element and adding a new element to min heap will take Logk time. So overall complexity will be O(k) + O((n-k)*logK)Output:
Following is sorted array
2 3 6 8 12 56
The Min Heap based method takes O(nLogk) time and uses O(k) auxiliary space.  We can also use a Balanced Binary Search Tree instead of Heap to store K+1 elements. The insert and delete operations on Balanced BST also take O(Logk) time. So Balanced BST based method will also take O(nLogk) time, but the Heap bassed method seems to be more efficient as the minimum element will always be at root. Also, Heap doesn’t need extra space for left and right pointers.Please write comments if you find any of the above codes/algorithms incorrect, or find other ways to solve the same problem.MergeSort is a Divide and Conquer algorithm.  It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.  The merg() function is used for merging two halves.  The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. See following C implementation for details.The following diagram from wikipedia shows the complete merge sort process for an example array {38, 27, 43, 3, 9, 82, 10}. If we take a closer look at the diagram, we can see that the array is recursively divided in two halves till the size becomes 1. Once the size becomes 1, the merge processes comes into action and starts merging arrays back till the complete array is merged.Output:

Given array is
12 11 13 5 6 7

Sorted array is
5 6 7 11 12 13
Time Complexity: Sorting arrays on different machines. Merge Sort is a recursive algorithm and time complexity can be expressed as following recurrence relation.
T(n) = 2T(n/2) + 
The above recurrence can be solved either using Recurrence Tree method or Master method.     It falls in case II of Master Method and solution of the recurrence is .
Time complexity of Merge Sort is  in all 3 cases (worst, average and best) as merge sort always divides the array in two halves and take linear time to merge two halves.Auxiliary Space: O(n)Algorithmic Paradigm:  Divide and ConquerSorting In Place: No in a typical implementationStable: YesApplications of Merge Sort
1) Merge Sort is useful for sorting linked lists in O(nLogn) time. Other nlogn algorithms like  Heap Sort, Quick Sort (average case nLogn) cannot be applied to linked lists.
2) Inversion Count Problem
3) Used in External Sorting
Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.