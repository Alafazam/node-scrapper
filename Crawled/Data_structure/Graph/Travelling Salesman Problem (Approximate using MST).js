An edge in an undirected connected graph is a bridge iff removing it disconnects the graph.  For a disconnected undirected graph, definition is similar, a bridge is an edge removing which increases number of connected components.
Like Articulation Points,bridges represent vulnerabilities in a connected network and are useful for designing reliable networks. For example, in a wired computer network, an articulation point indicates the critical computers and a bridge indicates the critical wires or connections.Following are some example graphs with bridges highlighted with red color.                       How to find all bridges in a given graph?
A simple approach is to one by one remove all edges and see if removal of a edge causes disconnected graph. Following are steps of simple approach for connected graph.1) For every edge (u, v), do following
…..a) Remove (u, v) from graph
..…b) See if the graph remains connected (We can either use BFS or DFS)
…..c) Add (u, v) back to the graph.Time complexity of above method is O(E*(V+E)) for a graph represented using adjacency list. Can we do better?A O(V+E) algorithm to find all Bridges
The idea is similar to O(V+E) algorithm for Articulation Points. We do DFS traversal of the given graph. In DFS tree an edge (u, v) (u is parent of v in DFS tree) is bridge if there does not exit any other alternative to reach u or an ancestor of u from subtree rooted with v. As discussed in the previous post, the value low[v] indicates earliest visited vertex reachable from subtree rooted with v.  The condition for an edge (u, v) to be a bridge is, “low[v] > disc[u]”. Following is C++ implementation of above approach.Output:
Bridges in first graph
3 4
0 3

Bridges in second graph
2 3
1 2
0 1

Bridges in third graph
1 6
Time Complexity: The above function is simple DFS with additional arrays.  So time complexity is same as DFS which is O(V+E) for adjacency list representation of graph.References:
https://www.cs.washington.edu/education/courses/421/04su/slides/artic.pdf
http://www.slideshare.net/TraianRebedea/algorithm-design-and-complexity-course-8
http://faculty.simpson.edu/lydia.sinapova/www/cmsc250/LN250_Weiss/L25-Connectivity.htm
http://www.youtube.com/watch?v=bmyyxNyZKzI                    Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Graph