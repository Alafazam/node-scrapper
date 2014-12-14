We recommend to read following post as a prerequisite for this.Greedy Algorithms | Set 3 (Huffman Coding)Time complexity of the algorithm discussed in above post is O(nLogn).  If we know that the given array is sorted (by non-decreasing order of frequency), we can generate Huffman codes in O(n) time. Following is a O(n) algorithm for sorted input.1.  Create two empty queues.2. Create a leaf node for each unique character and Enqueue it to the first queue in non-decreasing order of frequency. Initially second queue is empty.3. Dequeue two nodes with the minimum frequency by examining the front of both queues.  Repeat following steps two times
…..a) If second queue is empty, dequeue from first queue.
…..b) If first queue is empty, dequeue from second queue.
…..c) Else, compare the front of two queues and dequeue the minimum. 4. Create a new internal node with frequency equal to the sum of the two nodes frequencies. Make the first Dequeued node as its left child and the second Dequeued node as right child. Enqueue this node to second queue.5. Repeat steps#3 and #4 until there is more than one node in the queues. The remaining node is the root node and the tree is complete.Output:
f: 0
c: 100
d: 101
a: 1100
b: 1101
e: 111
Time complexity: O(n)If the input is not sorted, it need to be sorted first before it can be processed by the above algorithm. Sorting can be done using heap-sort or merge-sort both of which run in Theta(nlogn). So, the overall time complexity becomes O(nlogn) for unsorted input.Reference:
http://en.wikipedia.org/wiki/Huffman_codingThis article is compiled by Aashish Barnwal and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Greedy Algorithm, Huffman Coding