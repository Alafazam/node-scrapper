A Bipartite Graph is a graph whose vertices can be divided into two independent sets, U and V such that every edge (u, v) either connects a vertex from U to V or a vertex from V to U.  In other words, for every edge (u, v), either u belongs to U and v to V, or u belongs to V and v to U. We can also say that there is no edge that connects vertices of same set.A bipartite graph is possible if the graph coloring is possible using two colors such that vertices in a set are colored with the same color. Note that it is possible to color a cycle graph with even cycle using two colors.  For example, see the following graph.It is not possible to color a cycle graph with odd cycle using two colors.
Algorithm to check if a graph is Bipartite:
One approach is to check whether the graph is 2-colorable or not using backtracking algorithm m coloring problem.
Following is a simple algorithm to find out whether a given graph is Birpartite or not using Breadth First Search (BFS).
1.	Assign RED color to the source vertex (putting into set U).
2.	Color all the neighbors with BLUE color (putting into set V).
3.	Color all neighbor’s neighbor with RED color (putting into set U).
4.	This way, assign color to all vertices such that it satisfies all the constraints of m way coloring problem where m = 2.
5.      While assigning colors, if we find a neighbor which is colored with same color as current vertex, then the graph cannot be colored with 2 vertices (or graph is not Bipartite)  Output:
Yes
Refer this for C implementation of the same.Time Complexity of the above approach is same as that Breadth First Search. In above implementation is O(V^2) where V is number of vertices.  If graph is represented using adjacency list, then the complexity becomes O(V+E).Exercise:
1. Can DFS algorithm be used to check the bipartite-ness of a graph? If yes, how?
2. The above algorithm works if the graph is strongly connected. Extend above code to work for graph with more than one component.References:
http://en.wikipedia.org/wiki/Graph_coloring
http://en.wikipedia.org/wiki/Bipartite_graphThis article is compiled by Aashish Barnwal. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: Graph