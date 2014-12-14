Given two values k1 and k2 (where k1 < k2) and a root pointer to a Binary Search Tree. Print all the keys of tree in range k1 to k2.  i.e. print all x such that k1For example, if k1 = 10 and k2 = 22, then your function should print 12, 20 and 22.Thanks to bhasker  for suggesting the following solution.Algorithm:
1) If value of root’s key is greater than k1, then recursively call in left subtree.
2) If value of root’s key is in range, then print the root’s key.
3) If value of root’s key is smaller than k2, then recursively call in right subtree.Implementation:Output:
12 20 22Time Complexity: O(n) where n is the total number of keys in tree. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.