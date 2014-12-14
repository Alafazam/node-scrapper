Hamiltonian Path in an undirected graph is a path that visits each vertex exactly once. A Hamiltonian cycle (or Hamiltonian circuit) is a Hamiltonian Path such that there is an edge (in graph) from the last vertex to the first vertex of the Hamiltonian Path. Determine whether a given graph contains Hamiltonian Cycle or not. If it contains, then print the path.  Following are the input and output of the required function.Input:
A 2D array graph[V][V] where V is the number of vertices in graph and graph[V][V] is adjacency matrix representation of the graph. A value graph[i][j] is 1 if there is a direct edge from i to j, otherwise graph[i][j] is 0.Output:
An array path[V] that should contain the Hamiltonian Path. path[i] should represent the  ith vertex in the Hamiltonian Path. The code should also return false if there is no Hamiltonian Cycle in the graph.For example, a Hamiltonian Cycle in the following graph is {0, 1, 2, 4, 3, 0}. There are more Hamiltonian Cycles in the graph like {0, 3, 4, 2, 1, 0}

(0)--(1)--(2)
 |   / \   |
 |  /   \  | 
 | /     \ |
(3)-------(4)

And the following graph doesn’t contain any Hamiltonian Cycle.

(0)--(1)--(2)
 |   / \   |
 |  /   \  | 
 | /     \ |
(3)      (4) 

Naive Algorithm
Generate all possible configurations of vertices and print a configuration that satisfies the given constraints. There will be n! (n factorial) configurations.Backtracking Algorithm
Create an empty path array and add vertex 0 to it. Add other vertices, starting from the vertex 1. Before adding a vertex, check for whether it is adjacent to the previously added vertex and not already added. If we find such a vertex, we add the vertex as part of the solution. If we do not find a vertex then we return false.Implementation of Backtracking solution
Following is C/C++ implementation of the Backtracking solution.Output:

Solution Exists: Following is one Hamiltonian Cycle
 0  1  2  4  3  0

Solution does not exist

Note that the above code always prints cycle starting from 0.  Starting point should not matter as cycle can be started from any point.  If you want to change the starting point, you should make two changes to above code.
Change    “path[0] = 0;”  to “path[0] = s;” where s is your new starting point.  Also change loop “for (int v = 1; v < V; v++)” in hamCycleUtil() to “for (int v = 0; v < V; v++)”.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Backtracking, Graph