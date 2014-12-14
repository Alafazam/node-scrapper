A suffix array is a sorted array of all suffixes of a given string. The definition is similar to Suffix Tree which is compressed trie of all suffixes of the given text.We have discussed Naive algorithm for construction of suffix array.  The Naive algorithm is to consider all suffixes, sort them using a O(nLogn) sorting algorithm and while sorting, maintain original indexes.  Time complexity of the Naive algorithm is O(n2Logn) where n is the number of characters in the input string.In this post, a O(nLogn) algorithm for suffix array construction is discussed.   Let us first discuss a O(n * Logn * Logn) algorithm for simplicity. The idea is to use the fact that strings that are to be sorted are suffixes of a single string.
We first sort all suffixes according to first character, then according to first 2 characters, then first 4 characters and so on while the number of characters to be considered is smaller than 2n.  The important point is, if we have sorted suffixes according to first 2i characters, then we can sort suffixes according to first 2i+1 characters in O(nLogn) time using a nLogn sorting algorithm like Merge Sort.  This is possible as two suffixes can be compared in O(1) time (we need to compare only two values, see the below example and code).
The sort function is called O(Logn) times (Note that we increase number of characters to be considered in powers of 2).  Therefore overall time complexity becomes O(nLognLogn).  See http://www.stanford.edu/class/cs97si/suffix-array.pdf for more details.Let us build suffix array the example string “banana” using above algorithm.Sort according to first two characters Assign a rank to all suffixes using ASCII value of first character.   A simple way to assign rank is to do “str[i] – ‘a'” for ith suffix of strp[]

Index     Suffix            Rank
 0        banana             1   
 1        anana              0 
 2        nana               13 
 3        ana                0
 4        na                 13
 5        a                  0 
For every character, we also store rank of next adjacent character, i.e., the rank of character at str[i + 1] (This is needed to sort the suffixes according to first 2 characters).  If a character is last character, we store next rank as -1Sort all Suffixes according to rank and adjacent rank. Rank is considered as first digit or MSD, and adjacent rank is considered as second digit.

Index    Suffix            Rank          Next Rank 
 5        a                  0              -1
 1        anana              0               13    
 3        ana                0               13
 0        banana             1               0
 2        nana               13              0
 4        na                 13              0  
Sort according to first four character
Assign new ranks to all suffixes. To assign new ranks, we consider the sorted suffixes one by one.  Assign 0 as new rank to first suffix. For assigning ranks to remaining suffixes, we consider rank pair of suffix just before the current suffix.  If previous rank pair of a suffix is same as previous rank of suffix just before it, then assign it same rank.  Otherwise assign rank of previous suffix plus one.For every suffix str[i], also store rank of next suffix at str[i + 2].  If there is no next suffix at i + 2, we store next rank as -1Sort all Suffixes according to rank and next rank. Output:
Following is suffix array for banana
5 3 1 0 4 2
Note that the above algorithm uses standard sort function and therefore time complexity is O(nLognLogn).  We can use Radix Sort here to reduce the time complexity to O(nLogn).  Please note that suffx arrays can be constructed in O(n) time also. We will soon be discussing O(n) algorithms.References:
http://www.stanford.edu/class/cs97si/suffix-array.pdf
http://www.cbcb.umd.edu/confcour/Fall2012/lec14b.pdfPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Advance Data Structures, Advanced Data Structures