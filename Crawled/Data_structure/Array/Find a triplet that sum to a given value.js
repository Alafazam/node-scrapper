Given an unsorted array of size n. Array elements are in range from 1 to n.  One number from set {1, 2, …n} is missing and one number occurs twice in array. Find these two numbers.Examples:Method 1 (Use Sorting)
1) Sort the input array.
2) Traverse the array and check for missing and repeating.Time Complexity: O(nLogn)Thanks to LoneShadow for suggesting this method.Method 2 (Use count array)
1) Create a temp array temp[] of size n with all initial values as 0.
2) Traverse the input array arr[], and do following for each arr[i]
……a)  if(temp[arr[i]] == 0) temp[arr[i]] = 1;
……b)  if(temp[arr[i]] == 1) output “arr[i]”   //repeating
3) Traverse temp[] and output the array element having value as 0 (This is the missing element)Time Complexity: O(n)
Auxiliary Space: O(n)Method 3 (Use elements as Index and mark the visited places)
Traverse the array.  While traversing, use absolute value of every element as index and make the value at this index as negative to mark it visited.  If something is already marked negative then this is the repeating element.  To find missing, traverse the array again and look for a positive value.Time Complexity: O(n)Thanks to Manish Mishra for suggesting this method. Method 4 (Make two equations)
Let x be the missing and y be the repeating element.1) Get sum of all numbers.
Sum of array computed  S = n(n+1)/2 – x + y
2) Get product of all numbers.
Product of array computed P = 1*2*3*…*n * y / x
3) The above two steps give us two equations, we can solve the equations and get the values of x and y.Time Complexity: O(n)Thanks to disappearedng for suggesting this solution.  This method can cause arithmetic overflow as we calculate product and sum of all array elements. See this  for changes suggested by john  to reduce the chances of overflow.Method 5 (Use XOR)
Let x and y be the desired output elements.
Calculate XOR of all the array elements.XOR the result with all numbers from 1 to nIn the result xor1, all elements would nullify each other except x and y. All the bits that are set in xor1 will be set in either x or y. So if we take any set bit (We have chosen the rightmost set bit in code) of xor1 and divide the elements of the array in two sets – one set of elements with same bit set and other set with same bit not set. By doing so, we will get x in one set and y in another set. Now if we do XOR of all the elements in first set, we will get x, and by doing same in other set we will get y.Time Complexity: O(n)This method doesn’t cause overflow, but it doesn’t tell which one occurs twice and which one is missing.  We can add one more step that checks which one is missing and which one is repeating. This can be easily done in O(n) time.Please write comments if you find the above codes/algorithms incorrect, or find other ways to solve the same problem.