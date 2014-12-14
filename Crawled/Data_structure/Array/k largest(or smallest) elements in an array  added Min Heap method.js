Write a function rotate(arr[], d, n) that rotates arr[] of size n by d elements. Rotation of the above array by 2 will make array
Method 4(The Reversal Algorithm)
Please read this for first three methods of array rotation.Algorithm:Let AB are the two parts of the input array where A = arr[0..d-1] and B = arr[d..n-1]. The idea of the algorithm is:
Reverse A to get ArB. /* Ar is reverse of A */
Reverse B to get ArBr. /* Br is reverse of B */
Reverse all to get (ArBr) r = BA.For arr[] = [1, 2, 3, 4, 5, 6, 7], d =2 and n = 7
A = [1, 2] and B = [3, 4, 5, 6, 7]
Reverse A, we get ArB = [2, 1, 3, 4, 5, 6, 7]
Reverse B, we get ArBr = [2, 1, 7, 6, 5, 4, 3]
Reverse all, we get (ArBr)r = [3, 4, 5, 6, 7, 1, 2]Implementation:Time Complexity: O(n)References:
http://www.cs.bell-labs.com/cm/cs/pearls/s02b.pdfTags: array