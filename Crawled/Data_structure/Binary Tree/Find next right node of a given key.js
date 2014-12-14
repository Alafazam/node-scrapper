You are given a set of links, e.g.
a ---> b
b ---> c
b ---> d
a ---> e 
Print the tree that would form when each pair of these links that has the same character as start and end point is joined together. You have to maintain fidelity w.r.t. the height of nodes, i.e. nodes at height n from root should be printed at same row or column. For set of links given above, tree printed should be –

-->a
   |-->b
   |   |-->c
   |   |-->d
   |-->e
Note that these links need not form a single tree; they could form, ahem, a forest. Consider the following links
a ---> b
a ---> g
b ---> c
c ---> d
d ---> e
c ---> f
z ---> y
y ---> x
x ---> w
The output would be following forest.You can assume that given links can form a tree or forest of trees only, and there are no duplicates among links.Solution: The idea is to maintain two arrays, one array for tree nodes and other for trees themselves (we call this array forest). An element of the node array contains the TreeNode object that corresponds to respective character. An element of the forest array contains Tree object that corresponds to respective root of tree.It should be obvious that the crucial part is creating the forest here, once it is created, printing it out in required format is straightforward. To create the forest, following procedure is used –It should be clear that this procedure runs in linear time in number of nodes as well as of links – it makes only one pass over the links. It also requires linear space in terms of alphabet size.Following is Java implementation of above algorithm.  In the following implementation characters are assumed to be only lower case characters from ‘a’ to ‘z’.Output:

------------ Forest 1 ----------------
-->a
   |-->b
   |   |-->c
   |   |-->d
   |-->e

------------ Forest 2 ----------------
-->a
   |-->b
   |   |-->c
   |   |   |-->d
   |   |   |   |-->e
   |   |   |-->f
   |-->g

-->z
   |-->y
   |   |-->x
   |   |   |-->w
Exercise:
In the above implementation, endpoints of input links are assumed to be from set of only 26 characters. Extend the implementation where endpoints are strings of any length.This article is contributed by Ciphe.  Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above