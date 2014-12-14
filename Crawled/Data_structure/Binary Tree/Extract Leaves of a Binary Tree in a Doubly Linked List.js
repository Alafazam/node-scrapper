Consider a coding system for alphabets to integers where ‘a’ is represented as 1, ‘b’ as 2, .. ‘z’ as 26. Given an array of digits (1 to 9) as input, write a function that prints all valid interpretations of input array. Examples

Input: {1, 1}
Output: ("aa", 'k") 
[2 interpretations: aa(1, 1), k(11)]

Input: {1, 2, 1}
Output: ("aba", "au", "la") 
[3 interpretations: aba(1,2,1), au(1,21), la(12,1)]

Input: {9, 1, 8}
Output: {"iah", "ir"} 
[2 interpretations: iah(9,1,8), ir(9,18)]
Please note we cannot change order of array. That means {1,2,1} cannot become {2,1,1}
On first look it looks like a problem of permutation/combination.  But on closer look you will figure out that this is an interesting tree problem.
The idea here is string can take at-most two paths:
1.  Proces single digit
2.  Process two digits
That means we can use binary tree here.   Processing with single digit will be left child and two digits will be right child.   If value two digits is greater than 26 then our right child will be null as we don’t have alphabet for greater than 26.Let’s understand with an example .Array  a = {1,2,1}.  Below diagram shows that how our tree grows.Braces {} contain array still pending for processing.   Note that with every level, our array size decreases.  If you will see carefully, it is not hard to find that tree height is always n (array size)
How to print all strings (interpretations)?   Output strings are leaf node of tree. i.e for {1,2,1}, output is {aba  au  la}.
We can conclude that there are mainly two steps to print all interpretations of given integer array. Step 1:  Create a binary tree with all possible interpretations in leaf nodes.Step 2:  Print all leaf nodes from the binary tree created in step 1.Following is Java implementation of above algorithm.Output:
aacd  amd  kcd  
aaa  ak  ka  
bf  z  
ab  l  
a  j  
  
abba  abu  ava  lba  lu  

Exercise:
1.  What is the time complexity of this solution?  [Hint  :  size of tree  +  finding leaf nodes]
2.  Can we store leaf nodes at the time of tree creation so that no need to run loop again for leaf node fetching?
3.  How can we reduce extra space? This article is compiled by Varun Jain. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: Facebook