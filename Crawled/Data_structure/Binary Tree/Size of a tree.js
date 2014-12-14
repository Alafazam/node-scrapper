Difficulty Level:  RookieWhy Tree?
Unlike Array and Linked List, which are linear data structures, tree is hierarchical (or non-linear) data structure. 1)	One reason to use trees might be because you want to store information that naturally forms a hierarchy. For example, the file system on a computer: file system
———–2)	If we organize keys in form of a tree (with some ordering e.g., BST), we can search for a given key in moderate time (quicker than Linked List and slower than arrays). Self-balancing search trees like AVL and Red-Black trees guarantee an upper bound of O(Logn) for search.3)	We can insert/delete keys in moderate time (quicker than Arrays and slower than Unordered Linked Lists). Self-balancing search trees like AVL and Red-Black trees guarantee an upper bound of O(Logn) for insertion/deletion.4)	 Like Linked Lists and unlike Arrays, Pointer implementation of trees don’t have an upper limit on number of nodes as nodes are linked using pointers.As per Wikipedia, following are the common uses of tree.
1.	Manipulate hierarchical data.
2.	Make information easy to search (see tree traversal).
3.	Manipulate sorted lists of data.
4.	As a workflow for compositing digital images for visual effects.
5.	Router algorithms References:
http://www.cs.bu.edu/teaching/c/tree/binary/
http://en.wikipedia.org/wiki/Tree_%28data_structure%29#Common_usesPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.