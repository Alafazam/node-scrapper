We have discussed Pancake Sorting in the previous post.  Following is a problem based on Pancake Sorting.
Given an an unsorted array, sort the given array. You are allowed to do only following operation on array.

flip(arr, i): Reverse array from 0 to i 
Imagine a hypothetical machine where flip(i) always takes O(1) time.  Write an efficient program for sorting a given array in O(nLogn) time on the given machine. If we apply the same algorithm here, the time taken will be O(n^2) because the algorithm calls findMax() in a loop and find findMax() takes O(n) time even on this hypothetical machine.We can use insertion sort that uses binary search.  The idea is to run a loop from second element to last element (from i = 1 to n-1), and one by one insert arr[i] in arr[0..i-1] (like standard insertion sort algorithm).  When we insert an element arr[i], we can use binary search to find position of arr[i] in O(Logi) time.  Once we have the position, we can use some flip operations to put arr[i] at its new place.  Following are abstract steps.

// Standard Insertion Sort Loop that starts from second element
for (i=1; i < n; i++) ----> O(n)
{
  int key = arr[i];

  // Find index of ceiling of arr[i] in arr[0..i-1] using binary search
  j = celiSearch(arr, key, 0, i-1); ----> O(logn) (See this)
    
  // Apply some flip operations to put arr[i] at correct place
} 
Since flip operation takes O(1) on given hypothetical machine, total running time of above algorithm is O(nlogn).  Thanks to Kumar for suggesting above problem and algorithm.Let us see how does the above algorithm work. ceilSearch() actually returns the index of the smallest element which is greater than arr[i] in arr[0..i-1]. If there is no such element, it returns -1. Let the returned value be j.  If j is -1, then we don’t need to do anything as arr[i] is already the greatest element among arr[0..i]. Otherwise we need to put arr[i] just before arr[j].
So how to apply flip operations to put arr[i] just before arr[j] using values of i and j.   Let us take an example to understand this.  Let i be 6 and current array be {12, 15, 18, 30, 35, 40, 20, 6, 90, 80}. To put 20 at its new place, the array should be changed to  {12, 15, 18, 20, 30, 35, 40, 6, 90, 80}.  We apply following steps to put 20 at its new place.1) Find j using ceilSearch (In the above example j is 3).
2) flip(arr, j-1) (array becomes {18, 15, 12, 30, 35, 40, 20, 6, 90, 80})
3) flip(arr, i-1);  (array becomes {40, 35, 30, 12, 15, 18, 20, 6, 90, 80})
4) flip(arr, i); (array becomes {20, 18, 15, 12, 30, 35, 40, 6, 90, 80})
5) flip(arr, j);  (array becomes  {12, 15, 18, 20, 30, 35, 40, 6, 90, 80})Following is C implementation of the above algorithm.Output:
6 12 18 20 30 35 35 40 80 90
Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.