Write an efficient C program to find the sum of contiguous subarray within a one-dimensional array of numbers which has the largest sum.Kadane’s Algorithm:
Explanation:
Simple idea of the Kadane's algorithm is to look for all positive contiguous segments of the array (max_ending_here is used for this).  And keep track of maximum sum contiguous segment  among all positive segments (max_so_far is used for this).  Each time we get a positive sum compare it with max_so_far and update max_so_far if it is greater than max_so_far    Lets take the example:
    {-2, -3, 4, -1, -2, 1, 5, -3}    max_so_far = max_ending_here = 0    for i=0,  a[0] =  -2
    max_ending_here = max_ending_here + (-2)
    Set max_ending_here = 0 because max_ending_here < 0    for i=1,  a[1] =  -3
    max_ending_here = max_ending_here + (-3)
    Set max_ending_here = 0 because max_ending_here < 0    for i=2,  a[2] =  4
    max_ending_here = max_ending_here + (4)
    max_ending_here = 4
    max_so_far is updated to 4 because max_ending_here greater than max_so_far which was 0 till now    for i=3,  a[3] =  -1
    max_ending_here = max_ending_here + (-1)
    max_ending_here = 3    for i=4,  a[4] =  -2
    max_ending_here = max_ending_here + (-2)
    max_ending_here = 1    for i=5,  a[5] =  1
    max_ending_here = max_ending_here + (1)
    max_ending_here = 2    for i=6,  a[6] =  5
    max_ending_here = max_ending_here + (5)
    max_ending_here = 7
    max_so_far is updated to 7 because max_ending_here is greater than max_so_far    for i=7,  a[7] =  -3
    max_ending_here = max_ending_here + (-3)
    max_ending_here = 4Program:Notes:
Algorithm doesn't work for all negative numbers. It simply returns 0 if all numbers are negative. For handling this we can add an extra phase before actual implementation. The phase will look if all numbers are negative,  if they are it will return maximum of them (or smallest in terms of absolute value).  There may be other ways to handle it though.Above program can be optimized further, if we compare max_so_far with max_ending_here only if max_ending_here is greater than 0.Time Complexity:        O(n)
Algorithmic Paradigm: Dynamic ProgrammingFollowing is another simple implementation suggested by Mohit Kumar. The implementation handles the case when all numbers in array are negative. Now try below question
Given an array of integers (possibly some of the elements negative), write a C program to  find out the *maximum product* possible by adding 'n' consecutive integers in the array, n 
References:
 http://en.wikipedia.org/wiki/Kadane%27s_Algorithm
Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.
		
 
 




(adsbygoogle = window.adsbygoogle || []).push({});




 
 
 
Related Topics:K’th Smallest/Largest Element in Unsorted Array | Set 2 (Expected Linear Time)K’th Smallest/Largest Element in Unsorted Array | Set 1Time complexity of insertion sort when there are O(n) inversions?How to check if two given sets are disjoint?Minimum Number of Platforms Required for a Railway/Bus StationFind the closest pair from two sorted arraysPrint all elements in sorted order from row and column wise sorted matrixLength of the largest subarray with contiguous elements | Set 1
Tags: Dynamic Programming 


Tweet



  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();






				References:
 http://en.wikipedia.org/wiki/Kadane%27s_AlgorithmPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Dynamic Programming