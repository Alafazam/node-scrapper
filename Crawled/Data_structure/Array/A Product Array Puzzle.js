Asked By Binod
 
Question:
Print the elements of an array in the decreasing frequency if 2 numbers have same frequency then print the one which came 1st
E.g. 2 5 2 8 5 6 8 8 output: 8 8 8 2 2 5 5 6.
METHOD 1 (Use Sorting)Example:There is one issue with above approach (thanks to ankit for pointing this out). If we modify the input to 5 2 2 8 5 6 8 8, then we should get 8 8 8 5 5 2 2 6 and not 8 8 8 2 2 5 5 6 as will be the case.
To handle this, we should use indexes in step 3, if two counts are same then we should first process(or print) the element with lower index.  In step 1, we should store the indexes instead of elements.
METHOD 2(Use BST and Sorting)
1. Insert elements in BST one by one and if an element is already present then increment the count of the node. Node of the Binary Search Tree (used in this approach) will be as follows.2.Store the first indexes and corresponding counts of BST in a 2D array.
3 Sort the 2D array according to counts (and use indexes in case of tie).Time Complexity: O(nlogn) if a Self Balancing Binary Search Tree is used.
METHOD 3(Use Hashing and Sorting)
Using a hashing mechanism, we can store the elements (also first index) and their counts in a hash. Finally, sort the hash elements according to their counts.
These are just our thoughts about solving the problem and may not be the optimal way of solving. We are open for better solutions.
Related Linkshttp://www.trunix.org/programlama/c/kandr2/krx604.htmlhttp://drhanson.s3.amazonaws.com/storage/documents/common.pdfhttp://www.cc.gatech.edu/classes/semantics/misc/pp2.pdfTags: array