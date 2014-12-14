Given a linked list of 0s, 1s and 2s, sort it.Source: Microsoft Interview | Set 1Following steps can be used to sort the given linked list.
1) Traverse the list and count the number of 0s, 1s and 2s. Let the counts be n1, n2 and n3 respectively.
2) Traverse the list again, fill the first n1 nodes with 0, then n2 nodes with 1 and finally n3 nodes with 2.Output:
Linked List Before Sorting
2  1  2  1  1  2  0  1  0
Linked List After Sorting
0  0  1  1  1  1  2  2  2
Time Complexity: O(n)
Auxiliary Space: O(1)This article is compiled by Narendra Kangralkar. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.