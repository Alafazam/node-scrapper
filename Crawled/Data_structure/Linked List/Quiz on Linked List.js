QuickSort on Doubly Linked List is discussed here.  QuickSort on Singly linked list was given as an exercise. Following is C++ implementation for same.  The important things about implementation are, it changes pointers rather swapping data and time complexity is same as the implementation for Doubly Linked List.
In partition(), we consider last element as pivot. We traverse through the current list and if a node has value greater than pivot, we move it after tail.  If the node has smaller value, we keep it at its current position.
In QuickSortRecur(), we first call partition() which places pivot at correct position and returns pivot.  After pivot is placed at correct position, we find tail node of left side (list before pivot) and recur for left list. Finally, we recur for right list.Output:
Linked List before sorting
30  3  4  20  5
Linked List after sorting
3  4  5  20  30
This article is contributed by Balasubramanian.N  . Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above