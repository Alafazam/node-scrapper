Find the distance between two keys in a binary tree, no parent pointers are given.  Distance between two nodes is the minimum number of edges to be traversed to reach one node from other.We strongly recommend to minimize the browser and try this yourself first.The distance between two nodes can be obtained in terms of lowest common ancestor. Following is the formula. Following is C++ implementation of above approach.  The implementation is adopted from last code provided in Lowest Common Ancestor Post. Output:
Dist(4, 5) = 2
Dist(4, 6) = 4
Dist(3, 4) = 3
Dist(2, 4) = 1
Dist(8, 5) = 5
Time Complexity: Time complexity of the above solution is O(n) as the method does a single tree traversal.Thanks to Atul Singh for providing the initial solution for this post.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above