A binary search tree (BST) is a node based binary tree data structure which has the following properties.
• The left subtree of a node contains only nodes with keys less than the node’s key.
• The right subtree of a node contains only nodes with keys greater than the node’s key.
• Both the left and right subtrees must also be binary search trees.From the above properties it naturally follows that:
• Each node (item in the tree) has a distinct key.
METHOD 1 (Simple but Wrong)
Following is a simple program. For each node, check if left node of it is smaller than the node and right node of it is greater than the node.This approach is wrong as this will return true for below binary tree (and below tree is not a BST because 4 is in left subtree of 3)
 

METHOD 2 (Correct but not efficient)
For each node, check if max value in left subtree is smaller than the node and min value in right subtree greater than the node.It is assumed that you have helper functions minValue() and maxValue() that return the min or max int value from a non-empty tree
METHOD 3 (Correct and Efficient)
Method 2 above runs slowly since it traverses over some parts of the tree many times. A better solution looks at each node only once. The trick is to write a utility helper function isBSTUtil(struct node* node, int min, int max) that traverses down the tree keeping track of the narrowing min and max allowed values as it goes, looking at each node only once. The initial values for min and max should be INT_MIN and INT_MAX — they narrow from there. Implementation:Time Complexity: O(n)
Auxiliary Space : O(1) if Function Call Stack size is not considered, otherwise O(n)METHOD 4(Using In-Order Traversal)
Thanks to LJW489  for suggesting this method.
1) Do In-Order Traversal of the given tree and store the result in a temp array.
3) Check if the temp array is sorted in ascending order, if it is, then the tree is BST.Time Complexity: O(n)We can avoid the use of Auxiliary Array.  While doing In-Order traversal, we can keep track of previously visited node.  If the value of the currently visited node is less than the previous value, then tree is not BST.  Thanks to ygos for this space optimization.The use of static variable can also be avoided by using reference to prev node as a parameter (Similar to this post).Sources:
http://en.wikipedia.org/wiki/Binary_search_tree
http://cslibrary.stanford.edu/110/BinaryTrees.htmlPlease write comments if you find any bug in the above programs/algorithms or other ways to solve the same problem. The following is definition of Binary Search Tree(BST) according to WikiPediaBinary Search Tree, is a node-based binary tree data structure which has the following properties:The above properties of Binary Search Tree provide an ordering among keys so that the operations like search, minimum and maximum can be done fast.  If there is no ordering, then we may have to compare every key to search a given key.Searching a key
To search a given key in Bianry Search Tree, we first compare it with root, if the key is present at root, we return root.  If key is greater than root’s key, we recur for right subtree of root node.  Otherwise we recur for left subtree.Insertion of a key
A new key is always inserted at leaf.  We start searching a key from root till we hit a leaf node.  Once a leaf node is found, the new node is added as a child of the leaf node.Output:
20 30 40 50 60 70 80
Time Complexity: The worst case time complexity of search and insert operations is O(h) where h is height of Binary Search Tree.  In worst case, we may have to travel from root to the deepest leaf node.  The height of a skewed tree may become n and the time complexity of search and insert operation may become O(n).Quiz on Binary Search TreePlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above