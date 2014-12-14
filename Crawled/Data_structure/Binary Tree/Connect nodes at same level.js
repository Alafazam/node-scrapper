Given a binary tree and a number, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals the given number. Return false if no such path can be found. For example, in the above tree root to leaf paths exist with following sums.21 –>  10 – 8 – 3
23 –>  10 – 8 – 5
14 –>  10 – 2 – 2So the returned value should be true only for numbers 21, 23 and 14. For any other number, returned value should be false.Algorithm:
Recursively check if left or right child has path sum equal to ( number – value at current node)Implementation:Time Complexity: O(n)References:
http://cslibrary.stanford.edu/110/BinaryTrees.htmlAuthor: Tushar Roy
Please write comments if you find any bug in above code/algorithm, or find other ways to solve the same problem