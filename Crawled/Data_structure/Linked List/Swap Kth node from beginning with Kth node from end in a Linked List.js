Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.Difficulty Level: Rookie Examples:The main part of the problem is to maintain proper links between nodes, make sure that all corner cases are handled.  Following is C implementation of function skipMdeleteN() that skips M nodes and delete N nodes till end of list. It is assumed that M cannot be 0.Output:
M = 2, N = 3
Given Linked list is :
1 2 3 4 5 6 7 8 9 10

Linked list after deletion is :
1 2 6 7
Time Complexity: O(n) where n is number of nodes in linked list.This article is contributed by Chandra Prakash. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above