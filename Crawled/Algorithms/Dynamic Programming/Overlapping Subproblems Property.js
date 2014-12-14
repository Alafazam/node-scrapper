Given an array of numbers of size n. It is also given that the array elements are in range from 0 to n2 – 1. Sort the given array in linear time.We strongly recommend to minimize the browser and try this yourself first.Solution: If we use Counting Sort, it would take O(n^2) time as the given range is of size n^2. Using any comparison based sorting like Merge Sort, Heap Sort, .. etc would take O(nLogn) time.
Now question arises how to do this in 0(n)? Firstly, is it possible? Can we use data given in question? n numbers in range from 0 to n2 – 1?
The idea is to use  Radix Sort.  Following is standard Radix Sort algorithm.Let there be d digits in input integers.  Radix Sort takes O(d*(n+b)) time where b is the base for representing numbers, for example, for decimal system, b is 10.  Since n2-1 is the maximum possible value, the value of d would be . So overall time complexity is . Which looks more than the time complexity of comparison  based sorting algorithms for a large k. The idea is to change base b. If we set b as n, the value of  becomes O(1) and overall time complexity becomes O(n).  Following is C++ implementation to sort an array of size n where elements are in range from 0 to n2 – 1.Output:
Given array is
40 12 45 32 33 1 22
Sorted array is
1 12 22 32 33 40 45
How to sort if range is from 1 to n2?
If range is from 1 to n n2, the above process can not be directly applied, it must be changed. Consider n = 100 and range from 1 to 10000.  Since the base is 100, a digit must be from 0 to 99 and there should be 2 digits in the numbers.  But the number 10000 has more than 2 digits. So to sort numbers in a range from 1 to n2, we can use following process.
1) Subtract all numbers by 1.
2) Since the range is now 0 to n2, do counting sort twice as done in the above implementation.
3) After the elements are sorted, add 1 to all numbers to obtain the original numbers.How to sort if range is from 0 to n^3 -1?
Since there can be 3 digits in base n, we need to call counting sort 3 times. This article is contributed by Bateesh. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above