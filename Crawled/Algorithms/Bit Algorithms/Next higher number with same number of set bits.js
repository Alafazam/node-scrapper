MS Excel columns has a pattern like A, B, C, … ,Z, AA, AB, AC,…. ,AZ, BA, BB, … ZZ, AAA, AAB …..  etc.  In other words, column 1 is named as “A”, column 2 as “B”, column 27 as “AA”.Given a column number, find its corresponding Excel column name.  Following are more examples.We strongly recommend to minimize the browser and try this yourself first.Thanks to Mrigank Dembla for suggesting the below solution in a comment.Suppose we have a number n, let’s say 28. so corresponding to it we need to print the column name. We need to take remainder with 26. If remainder with 26 comes out to be 0 (meaning 26, 52 and so on) then we put ‘Z’ in the output string and new n becomes n/26 -1 because here we are considering 26 to be ‘Z’ while in actual it’s 25th with respect to ‘A’.Similarly if the remainder comes out to be non zero. (like 1, 2, 3 and so on) then we need to just insert the char accordingly in the string and do n = n/26.Finally we reverse the string and print. Example:
n = 700Remainder (n%26) is 24.  So we put ‘X’ in output string and n becomes n/26 which is 26.  Remainder (26%26) is 0.  So we put ‘Z’ in output string and n becomes n/26 -1 which is 0.Following is C++ implementation of above approach. Output

Z
AY
AZ
CB
YZ
ZZ
AAC
This article is contributed by Kartik. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above