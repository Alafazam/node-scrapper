An undirected graph is called Biconnected if there are two vertex-disjoint paths between any two vertices.  In a Biconnected Graph, there is a simple cycle through any two vertices.
By convention, two nodes connected by an edge form a biconnected graph, but this does not verify the above properties. For a graph with more than two vertices, the above properties must be there for it to be Biconnected.Following are some examples.





See this for more examples.


How to find if a given graph is Biconnected or not?
A connected graph is Biconnected if it is connected and doesn’t have any Articulation Point. We mainly need to check two things in a graph.
1) The graph is connected.
2) There is not articulation point in graph.We start from any vertex and do DFS traversal. In DFS traversal, we check if there is any articulation point.  If we don’t find any articulation point, then the graph is Biconnected.  Finally, we need to check whether all vertices were reachable in DFS or not. If all vertices were not reachable, then the graph is not even connected.
Following is C++ implementation of above approach.Time Complexity: The above function is a simple DFS with additional arrays. So time complexity is same as DFS which is O(V+E) for adjacency list representation of graph.References:
http://www.cs.purdue.edu/homes/ayg/CS251/slides/chap9d.pdfPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Graph