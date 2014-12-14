Merge sort is often preferred for sorting a linked list. The slow random-access performance of a linked list makes some other algorithms (such as quicksort) perform poorly, and others (such as heapsort) completely impossible.Let head be the first node of the linked list to be sorted and headRef be the pointer to head. Note that we need a reference to head in MergeSort() as the below implementation changes next links to sort the linked lists (not data at the nodes), so head node has to be changed if the data at original head is not the smallest value in linked list.Time Complexity: O(nLogn)Sources:
http://en.wikipedia.org/wiki/Merge_sort
http://cslibrary.stanford.edu/105/LinkedListProblems.pdfPlease write comments if you find the above code/algorithm incorrect, or find better ways to solve the same problem.Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.Algorithm
// Sort an arr[] of size n
insertionSort(arr, n)
Loop from i = 1 to n-1.
……a) Pick element arr[i] and insert it into sorted sequence arr[0…i-1]      Example: 
12, 11, 13, 5, 6Let us loop for i = 1 (second element of the array) to 5 (Size of input array)i = 1.   Since 11 is smaller than 12, move 12 and insert 11 before 12
11, 12, 13, 5, 6i = 2.  13 will remain at its position as all elements in A[0..I-1] are smaller than 13
11, 12, 13, 5, 6i = 3.  5 will move to the beginning and all other elements from 11 to 13 will move one position ahead of their current position.
5, 11, 12, 13, 6i = 4.  6 will move to position after 5, and elements from 11 to 13 will move one position ahead of their current position.
5, 6, 11, 12, 13 Output:
5 6 11 12 13
Time Complexity: O(n*n) Auxiliary Space: O(1)Boundary Cases:  Insertion sort takes maximum time to sort if elements are sorted in reverse order. And it takes minimum time (Order of n) when elements are already sorted.Algorithmic Paradigm: Incremental ApproachSorting In Place: YesStable: YesOnline: YesUses:  Insertion sort is uses when number of elements is small.  It can also be useful when input array is almost sorted, only few elements are misplaced in complete big array.Quizzes: Sorting QuestionsPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.