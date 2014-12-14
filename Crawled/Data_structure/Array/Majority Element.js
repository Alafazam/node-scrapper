Given a book of words. Assume you have enough main memory to accommodate all words. design a data structure to find top K maximum occurring words. The data structure should be dynamic so that new words can be added. A simple solution is to use Hashing.  Hash all words one by one in a hash table. If a word is already present, then increment its count. Finally, traverse through the hash table and return the k words with maximum counts.We can use Trie and Min Heap to get the k most frequent words efficiently. The idea is to use Trie for searching existing words adding new words efficiently.  Trie also stores count of occurrences of words. A Min Heap of size k is used to keep track of k most frequent words at any point of time(Use of Min Heap is same as we used it to find k largest elements in this post).
Trie and Min Heap are linked with each other by storing an additional field in Trie ‘indexMinHeap’ and a pointer ‘trNode’ in Min Heap. The value of ‘indexMinHeap’ is maintained as -1 for the words which are currently not in Min Heap (or currently not among the top k frequent words).  For the words which are present in Min Heap, ‘indexMinHeap’ contains, index of the word in Min Heap.   The pointer ‘trNode’ in Min Heap points to the leaf node corresponding to the word in Trie.Following is the complete process to print k most frequent words from a file.Read all words one by one.  For every word, insert it into Trie. Increase the counter of the word, if already exists.  Now, we need to insert this word in min heap also. For insertion in min heap, 3 cases arise:1. The word is already present. We just increase the corresponding frequency value in min heap and call minHeapify() for the index obtained by “indexMinHeap” field in Trie. When the min heap nodes are being swapped, we change the corresponding minHeapIndex in the Trie. Remember each node of the min heap is also having pointer to Trie leaf node.2. The minHeap is not full. we will insert the new word into min heap & update the root node in the min heap node & min heap index in Trie leaf node. Now, call buildMinHeap().3. The min heap is full. Two sub-cases arise.
….3.1  The frequency of the new word inserted is less than the frequency of the word stored in the head of min heap. Do nothing.….3.2 The frequency of the new word inserted is greater than the frequency of the word stored in the head of min heap. Replace & update the fields. Make sure to update the corresponding min heap index of the “word to be replaced” in Trie with -1 as the word is no longer in min heap.4. Finally, Min Heap will have the k most frequent words of all words present in given file.  So we just need to print all words present in Min Heap.Output:
your : 3
well : 3
and : 4
to : 4
Geeks : 6

The above output is for a file with following content.
Welcome to the world of Geeks 
This portal has been created to provide well written well thought and well explained 
solutions for selected questions If you like Geeks for Geeks and would like to contribute 
here is your chance You can write article and mail your article to contribute at 
geeksforgeeks org See your article appearing on the Geeks for Geeks main page and help 
thousands of other Geeks


Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Advance Data Structures