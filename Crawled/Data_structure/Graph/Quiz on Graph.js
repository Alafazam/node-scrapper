Eulerian Path is a path in graph that visits every edge exactly once. Eulerian Circuit is an Eulerian Path which starts and ends on the same vertex. A graph is said to be eulerian if it has eulerian cycle.  We have discussed eulerian circuit for an undirected graph.  In this post, same is discussed for a directed graph.For example, the following graph has eulerian cycle as {1, 0, 3, 4, 0, 2, 1}
How to check if a directed graph is eulerian?
A directed graph has an eulerian cycle if following conditions are true (Source: Wiki)
1) All vertices with nonzero degree belong to a single strongly connected component.
2) In degree and out degree of every vertex is same.We can detect singly connected component using Kosaraju’s DFS based simple algorithm.
To compare in degree and out degree, we need to store in degree an out degree of every vertex.  Out degree can be obtained by size of adjacency list.  In degree can be stored by creating an array of size equal to number of vertices. Following is C++ implementation of above approach.Output:
Given directed graph is eulerian 
Time complexity of the above implementation is O(V + E) as Kosaraju’s algorithm takes O(V + E) time. After running  Kosaraju’s algorithm we traverse all vertices and compare in degree with out degree which takes O(V) time.  See following as an application of this.
Find if the given array of strings can be chained to form a circle.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.