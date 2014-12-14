Inversion Count for an array indicates – how far (or close) the array is from being sorted.  If array is already sorted then inversion count is 0.  If array is sorted in reverse order that inversion count is the maximum. 
Formally speaking, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < jExample:
The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).METHOD 1 (Simple)
For each element, count number of elements which are on right side of it and are smaller than it. Time Complexity: O(n^2)
METHOD 2(Enhance Merge Sort)
Suppose we know the number of inversions in the left half and right half of the array (let be inv1 and inv2), what kinds of inversions are not accounted for in Inv1 + Inv2? The answer is – the inversions we have to count during the merge step. Therefore, to get number of inversions, we need to add number of inversions in left subarray, right subarray and merge(). 
How to get number of inversions in merge()?
In merge process, let i is used for indexing left sub-array and j for right sub-array. At any step in merge(), if a[i] is greater than a[j], then there are (mid – i) inversions. because left and right subarrays are sorted, so all the remaining elements in left-subarray (a[i+1], a[i+2] … a[mid]) will be greater than a[j]The complete picture:
Implementation:Note that above code modifies (or sorts) the input array.  If we want to count only inversions then we need to create a copy of original array and call mergeSort() on copy.

Time Complexity:  O(nlogn)
Algorithmic Paradigm:  Divide and Conquer
References:
http://www.cs.umd.edu/class/fall2009/cmsc451/lectures/Lec08-inversions.pdf
http://www.cp.eng.chula.ac.th/~piak/teaching/algo/algo2008/count-inv.htmPlease write comments if you find any bug in the above program/algorithm or other ways to solve the same problem. Tags: Divide and Conquer