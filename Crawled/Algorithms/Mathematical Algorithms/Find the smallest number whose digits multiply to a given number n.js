Given an array of size n, generate and print all possible combinations of r elements in array.  For example, if input array is {1, 2, 3, 4} and r is 2, then output should be {1, 2}, {1, 3}, {1, 4}, {2, 3}, {2, 4} and {3, 4}.Following are two methods to do this. Method 1 (Fix Elements and Recur)
We create a temporary array ‘data[]’ which stores all outputs one by one. The idea is to start from first index (index = 0) in data[], one by one fix elements at this index and recur for remaining indexes.  Let the input array be {1, 2, 3, 4, 5} and r be 3.  We first fix 1 at index 0 in data[], then recur for remaining indexes, then we fix 2 at index 0 and recur.  Finally, we fix 3 and recur for remaining indexes.  When number of elements in data[] becomes equal to r (size of a combination), we print data[].Following diagram shows recursion tree for same input.Following is C++ implementation of above approach.Output:
1 2 3
1 2 4
1 2 5
1 3 4
1 3 5
1 4 5
2 3 4
2 3 5
2 4 5
3 4 5
How to handle duplicates?
Note that the above method doesn’t handle duplicates. For example, if input array is {1, 2, 1} and r is 2, then the program prints {1, 2} and {2, 1} as two different combinations. We can avoid duplicates by adding following two additional things to above code.
1) Add code to sort the array before calling combinationUtil() in printCombination()
2) Add following lines at the end of for loop in combinationUtil()See this for an implementation that handles duplicates.
Method 2 (Include and Exclude every element)
Like the above method, We create a temporary array data[]. The idea here is similar to Subset Sum Problem.  We one by one consider every element of input array, and recur for two cases:1) The element is included in current combination (We put the element in data[] and increment next available index in data[])
2) The element is excluded in current combination (We do not put the element and do not change index)When number of elements in data[] become equal to r (size of a combination), we print it.This method is mainly based on Pascal’s Identity, i.e. ncr = n-1cr + n-1cr-1Following is C++ implementation of method 2.Output:
1 2 3
1 2 4
1 2 5
1 3 4
1 3 5
1 4 5
2 3 4
2 3 5
2 4 5
3 4 5
How to handle duplicates in method 2?
Like method 1, we can following two things to handle duplicates.
1) Add code to sort the array before calling combinationUtil() in printCombination()
2) Add following lines between two recursive calls of combinationUtil() in combinationUtil()See this for an implementation that handles duplicates.This article is contributed by Bateesh. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: MathematicalAlgo, Recursion