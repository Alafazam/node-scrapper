Given a Binary tree and a key in the binary tree, find the node right to the given key.  If there is no node on right side, then return NULL.  Expected time complexity is O(n) where n is the number of nodes in the given binary tree.For example, consider the following Binary Tree.  Output for 2 is 6, output for 4 is 5. Output for 10, 6 and 5 is NULL. We strongly recommend you to minimize the browser and try this yourself first.Solution: The idea is to do level order traversal of given Binary Tree.  When we find the given key, we just check if the next node in level order traversal is of same level, if yes, we return the next node, otherwise return NULL.Output:
No next right node found for 10
Next Right of 2 is 6
No next right node found for 6
No next right node found for 5
Next Right of 8 is 4
Next Right of 4 is 5
Time Complexity: The above code is a simple BFS traversal code which visits every enqueue and dequeues a node at most once. Therefore, the time complexity is O(n) where n is the number of nodes in the given binary tree.Exercise:  Write a function to find left node of a given node. If there is no node on the left side, then return NULL.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above