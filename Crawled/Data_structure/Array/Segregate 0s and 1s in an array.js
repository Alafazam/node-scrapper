Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.

Rotation of the above array by 2 will make arrayMETHOD 1 (Use temp array)Time complexity O(n)
Auxiliary Space: O(d)
METHOD 2 (Rotate one by one)To rotate by one, store arr[0] in a temporary variable temp,  move arr[1] to arr[0], arr[2] to arr[1] …and finally temp to arr[n-1]Let us take the same example arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2
Rotate arr[] by one 2 times
We get [2, 3, 4, 5, 6, 7, 1] after first rotation and [ 3, 4, 5, 6, 7, 1, 2] after second rotation.Time complexity: O(n*d)
Auxiliary Space: O(1)
METHOD 3 (A Juggling Algorithm)
This is an extension of method 2. Instead of moving one by one, divide the array in different sets
where number of sets is equal to GCD of n and d and move the elements within sets.
If GCD is 1 as is for the above example array (n = 7 and d =2), then elements will be moved within one set only, we just start with temp = arr[0] and keep moving arr[I+d] to arr[I] and finally store temp at the right place.Here is an example for  n =12 and d = 3.  GCD  is 3 andTime complexity: O(n)
Auxiliary Space: O(1)Please see following posts for other methods of array rotation:
Block swap algorithm for array rotation
Reversal algorithm for array rotationReferences:
http://www.cs.bell-labs.com/cm/cs/pearls/s02b.pdfPlease write comments if you find any bug in above programs/algorithms.Tags: array