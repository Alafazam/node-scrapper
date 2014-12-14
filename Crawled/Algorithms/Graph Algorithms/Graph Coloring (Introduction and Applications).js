Given a Weighted Directed Acyclic Graph and a source vertex in the graph, find the shortest paths from given source to all other vertices.
For a general weighted graph, we can calculate single source shortest distances in O(VE) time using Bellman–Ford Algorithm. For a graph with no negative weights, we can do better and calculate single source shortest distances in O(E + VLogV) time using Dijkstra’s algorithm.  Can we do even better for Directed Acyclic Graph (DAG)? We can calculate single source shortest distances in O(V+E) time for DAGs. The idea is to use Topological Sorting.We initialize distances to all vertices as infinite and distance to source as 0, then we find a topological sorting of the graph.  Topological Sorting of a graph represents a linear ordering of the graph (See below, figure (b) is a linear representation of figure (a) ). Once we have topological order (or linear representation), we one by one process all vertices in topological order.  For every vertex being processed, we update distances of its adjacent using distance of current vertex.Following figure is taken from this  source.  It shows step by step process of finding shortest paths.
Following is complete algorithm for finding shortest distances.
1) Initialize dist[] = {INF, INF, ….} and dist[s] = 0 where s is the source vertex.
2) Create a toplogical order of all vertices.
3) Do following for every vertex u in topological order.
………..Do following for every adjacent vertex v of u
………………if (dist[v] > dist[u] + weight(u, v))
………………………dist[v] = dist[u] + weight(u, v) Output:
Following are shortest distances from source 1
INF 0 2 6 5 3 
Time Complexity: Time complexity of topological sorting is O(V+E).  After finding topological order, the algorithm process all vertices and for every vertex, it runs a loop for all adjacent vertices.  Total adjacent vertices in a graph is O(E). So the inner loop runs O(V+E) times.  Therefore, overall time complexity of this algorithm is O(V+E).References:
http://www.utdallas.edu/~sizheng/CS4349.d/l-notes.d/L17.pdfPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: Graph