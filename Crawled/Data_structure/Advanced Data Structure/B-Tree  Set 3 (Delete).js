Given a dictionary of words and an input string, find the longest prefix of the string which is also a word in dictionary.Examples:Solution
We build a Trie of all dictionary words. Once the Trie is built, traverse through it using characters of input string. If prefix matches a dictionary word, store current length and look for a longer match.  Finally, return the longest match.
Following is Java implementation of the above solution based. Output:

caterer:   cater
basement:   basement
are:   are
arex:   are
basemexz:   base
xyz:   

Time Complexity: Time complexity of finding the longest prefix is O(n) where n is length of the input string.   Refer this for time complexity of building the Trie.This article is compiled by Ravi Chandra Enaganti. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: Advance Data Structures, Java