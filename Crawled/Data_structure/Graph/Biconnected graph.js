What is Minimum Spanning Tree?
Given a connected and undirected graph, a spanning tree of that graph is a subgraph that is a tree and connects all the vertices together. A single graph can have many different spanning trees. A minimum spanning tree (MST) or minimum weight spanning tree for a weighted, connected and undirected graph is a spanning tree with weight less than or equal to the weight of every other spanning tree. The weight of a spanning tree is the sum of weights given to each edge of the spanning tree.How many edges does a minimum spanning tree has?
A minimum spanning tree has (V – 1) edges where V is the number of vertices in the given  graph. What are the applications of Minimum Spanning Tree?
See this for applications of MST.Below are the steps for finding MST using Kruskal’s algorithmThe step#2 uses Union-Find algorithm to detect cycle. So we recommend to read following post as a prerequisite.
Union-Find Algorithm | Set 1 (Detect Cycle in a Graph)
Union-Find Algorithm | Set 2 (Union By Rank and Path Compression)The algorithm is a Greedy Algorithm. The Greedy Choice is to pick the smallest weight edge that does not cause a cycle in the MST constructed so far. Let us understand it with an example: Consider the below input graph. The graph contains 9 vertices and 14 edges. So, the minimum spanning tree formed will be having (9 – 1) = 8 edges. Now pick all edges one by one from sorted list of edges
1. Pick edge 7-6: No cycle is formed, include it.
2. Pick edge 8-2: No cycle is formed, include it.
3. Pick edge 6-5: No cycle is formed, include it.
4. Pick edge 0-1: No cycle is formed, include it.
5. Pick edge 2-5: No cycle is formed, include it.
6. Pick edge 8-6: Since including this edge results in cycle, discard it.7. Pick edge 2-3: No cycle is formed, include it.
8. Pick edge 7-8: Since including this edge results in cycle, discard it.9. Pick edge 0-7: No cycle is formed, include it.
10. Pick edge 1-2: Since including this edge results in cycle, discard it.11. Pick edge 3-4: No cycle is formed, include it.
Since the number of edges included equals (V – 1), the algorithm stops here.Time Complexity: O(ElogE) or O(ElogV).  Sorting of edges takes O(ELogE) time. After sorting, we iterate through all edges and apply find-union algorithm.  The find and union operations can take atmost O(LogV) time.  So overall complexity is O(ELogE + ELogV) time.  The value of E can be atmost V^2, so O(LogV) are O(LogE) same. Therefore, overall time complexity is O(ElogE) or O(ElogV)References:
http://www.ics.uci.edu/~eppstein/161/960206.html
http://en.wikipedia.org/wiki/Minimum_spanning_treeThis article is compiled by Aashish Barnwal and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Graph, Greedy Algorithm, Kruskal, Kruskal'sAlgorithm