Given an undirected graph and a number m, determine if the graph can be colored with at most m colors such that no two adjacent vertices of the graph are colored with same color. Here coloring of a graph means assignment of colors to all vertices. Input:
1) A 2D array graph[V][V] where V is the number of vertices in graph and graph[V][V] is adjacency matrix representation of the graph. A value graph[i][j] is 1 if there is a direct edge from i to j, otherwise graph[i][j] is 0.
2) An integer m which is maximum number of colors that can be used.Output:
An array color[V] that should have numbers from 1 to m. color[i] should represent the color assigned to the ith vertex. The code should also return false if the graph cannot be colored with m colors.Following is an example graph (from Wiki page ) that can be colored with 3 colors.
Naive Algorithm
Generate all possible configurations of colors and print a configuration that satisfies the given constraints.There will be V^m configurations of colors.Backtracking Algorithm
The idea is to assign colors one by one to different vertices, starting from the vertex 0. Before assigning a color, we check for safety by considering already assigned colors to the adjacent vertices. If we find a color assignment which is safe, we mark the color assignment as part of solution. If we do not a find color due to clashes then we backtrack and return false.Implementation of Backtracking solutionOutput:

Solution Exists: Following are the assigned colors
 1  2  3  2

References:
http://en.wikipedia.org/wiki/Graph_coloringPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Backtracking