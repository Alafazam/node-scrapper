We strongly recommend to go through following articles as a prerequisite for this.
Red-Black Tree Introduction
Red Black Tree InsertionFollowing is the complete algorithm discussed in Red Black Tree Insertion article.Color of a NULL node is considered as BLACK.
Let x be the newly inserted node.
1) Perform standard BST insertion and make the color of newly inserted nodes as RED.
2) Do following if color of x’s parent is not BLACK or x is not root.
….a) If x’s uncle is RED (Grand parent must have been black from property 4)
……..(i) Change color of parent and uncle as BLACK.
……..(ii) color of grand parent as RED.
……..(iii) Change x = x’s grandparent, repeat steps 2 and 3 for new x.
….b) If x’s uncle is BLACK, then there can be four configurations for x, x’s parent (p) and x’s
grandparent (g).
……..i) Left Left Case (p is left child of g and x is left child of p)
……..ii) Left Right Case (p is left child of g and x is right child of p)
……..iii) Right Right Case (Mirror of case a)
……..iv) Right Left Case (Mirror of case c)
3) If x is root, change color of x as BLACK (Black height of complete tree increases by 1).In this article, C code for insertion is discussed.  Following is complete C code for insertion. Following are few important points for coding the insertion process.
1) Since we need to access uncle node to decide case, it is a good idea to have parent pointer in every node.
2) We also need to write functions for left and right rotations. These functions are similar to left and right rotations for AVL Tree insertion.   In AVL Tree, we maintain height, but here we need to maintain parent pointer and color.The  following code strictly follows the steps given in CLRS book.   B-Tree is a self-balancing search tree. In most of the other self-balancing search trees (like AVL and Red Black Trees), it is assumed that everything is in main memory. To understand use of B-Trees, we must think of huge amount of data that cannot fit in main memory. When the number of keys is high, the data is read from disk in the form of blocks. Disk access time is very high compared to main memory access time. The main idea of using B-Trees is to reduce the number of disk accesses. Most of the tree operations (search, insert, delete, max, min, ..etc ) require O(h) disk accesses where h is height of the tree. B-tree is a fat tree. Height of B-Trees is kept low by putting maximum possible keys in a B-Tree node. Generally, a B-Tree node size is kept equal to the disk block size.  Since h is low for B-Tree, total disk accesses for most of the operations are reduced significantly compared to balanced Binary Search Trees like AVL Tree, Red Black Tree, ..etc.Properties of B-Tree
1) All leaves are at same level.
2) A B-Tree is defined by the term minimum degree ‘t’. The value of t depends upon disk block size.
3) Every node except root must contain at least t-1 keys. Root may contain minimum 1 key.
4) All nodes (including root) may contain at most 2t – 1 keys.
5) Number of children of a node is equal to the number of keys in it plus 1.
6) All keys of a node are sorted in increasing order.  The child between two keys k1 and k2 contains all keys in range from k1 and k2.
7) B-Tree grows and shrinks from root which is unlike Binary Search Tree. Binary Search Trees grow downward and also shrink from downward.
8) Like other balanced Binary Search Trees, time complexity to search, insert and delete is O(Logn).Following is an example B-Tree of minimum degree 3. Note that in practical B-Trees, the value of minimum degree is much more than 3.
Search
Search is similar to search in Binary Search Tree.  Let the key to be searched be k. We start from root and recursively traverse down.  For every visited non-leaf node, if the node has key, we simply return the node.  Otherwise we recur down to the appropriate child (The child which is just before the first greater key) of the node. If we reach a leaf node and don’t find k in the leaf node, we return NULL.Traverse
Traversal is also similar to Inorder traversal of Binary Tree. We start from the leftmost child, recursively print the leftmost child, then repeat the same process for remaining children and keys. In the end, recursively print the rightmost child. The above code doesn’t contain driver program.  We will be covering the complete program in our next post on B-Tree Insertion.There are two conventions to define a B-Tree, one is to define by minimum degree (followed in Cormen book), second is define by order.  We have followed the minimum degree convention and will be following same in coming posts on B-Tree. The variable names used in the above program are also kept same as Cormen book for better readability. Insertion and Deletion
B-Trer Insertion
B-Tree DeletionReferences:
Introduction to Algorithms 3rd Edition by Clifford Stein, Thomas H. Cormen, Charles E. Leiserson, Ronald L. RivestPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Advance Data Structures, Advanced Data Structuresif a node is not a leaf node, does it always have to have 2*t child nodes? I s it possible to have 2*t-1 keys but less than 2*t child nodes? if it has then before calling c[i]->traverse or c[i]->search, c[i] should be checked against NULLcan you tell any real life application of B-tree??database’s index uses it .One slight improvement : Since, the keys in each node are sorted, I think we can use Binary search to look for the first key greater or equal to the required key. That would reduce the complexity from O(t) to O(log(t)) for each node.