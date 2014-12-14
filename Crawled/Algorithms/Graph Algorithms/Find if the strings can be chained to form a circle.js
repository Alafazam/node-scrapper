Given a directed graph, find out if a vertex j is reachable from another vertex i for all vertex pairs (i, j) in the given graph.  Here reachable mean that there is a path from vertex i to j.  The reach-ability matrix is called transitive closure of a graph.
The graph is given in the form of adjacency matrix say ‘graph[V][V]’ where graph[i][j] is 1 if there is an edge from vertex i to vertex j or i is equal to j, otherwise graph[i][j] is 0.Floyd Warshall Algorithm can be used, we can calculate the distance matrix dist[V][V] using Floyd Warshall, if dist[i][j] is infinite, then j is not reachable from i, otherwise j is reachable and value of dist[i][j] will be less than V.
Instead of directly using Floyd Warshall, we can optimize it in terms of space and time,  for this particular problem. Following are the optimizations:1) Instead of integer resultant matrix (dist[V][V] in floyd warshall), we can create a boolean reach-ability matrix reach[V][V] (we save space).  The value reach[i][j] will be 1 if j is reachable from i, otherwise 0.2) Instead of using arithmetic operations, we can use logical operations. For arithmetic operation ‘+’, logical and ‘&&’ is used, and for min, logical or ‘||’ is used.  (We save time by a constant factor. Time complexity is same though)Output:
Following matrix is transitive closure of the given graph
1 1 1 1
0 1 1 1
0 0 1 1
0 0 0 1

Time Complexity: O(V^3) where V is number of vertices in the given graph.References:
Introduction to Algorithms by Clifford Stein, Thomas H. Cormen, Charles E. Leiserson, Ronald L.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Graph