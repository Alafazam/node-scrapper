Given a string, find the longest substring which is palindrome.  For example, if the given string is “forgeeksskeegfor”, the output should be “geeksskeeg”.Method 1 ( Brute Force ) 
The simple approach is to check each substring whether the substring is a palindrome or not.  We can run three loops, the outer two loops pick all substrings one by one by fixing the corner characters, the inner loop checks whether the picked substring is palindrome or not.Time complexity: O ( n^3 )
Auxiliary complexity: O ( 1 )Method 2 ( Dynamic Programming ) 
The time complexity can be reduced by storing results of subproblems. The idea is similar to this post.  We maintain a boolean table[n][n] that is filled in bottom up manner.  The value of table[i][j] is true, if the substring is palindrome, otherwise false.  To calculate table[i][j], we first check the value of table[i+1][j-1], if the value is true and str[i] is same as str[j], then we make table[i][j] true.  Otherwise, the value of table[i][j] is made false.Output:
Longest palindrome substring is: geeksskeeg
Length is: 10
Time complexity: O ( n^2 )
Auxiliary Space: O ( n^2 ) We will soon be adding more optimized methods as separate posts.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Dynamic Programming