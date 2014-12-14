The cost of a stock on each day is given in an array, find the max profit that you can make by buying and selling in those days.  For example, if the given array is {100, 180, 260, 310, 40, 535, 695}, the maximum profit can earned by buying on day 0, selling on day 3. Again buy on day 4 and sell on day 6.  If the given array of prices is sorted in decreasing order, then profit cannot be earned at all.If we are allowed to buy and sell only once, then we can use following algorithm. Maximum difference between two elements. Here we are allowed to buy and sell multiple times.  Following is algorithm for this problem.
1. Find the local minima and store it as starting index. If not exists, return.
2. Find the local maxima. and store it as ending index. If we reach the end, set the end as ending index.
3. Update the solution (Increment count of buy sell pairs)
4. Repeat the above steps if end is not reached.Output:
Buy on day : 0   Sell on day: 3
Buy on day : 4   Sell on day: 6
Time Complexity: The outer loop runs till i becomes n-1.  The inner two loops increment value of i in every iteration.  So overall time complexity is O(n)This article is compiled by Ashish Anand and reviewed by GeeksforGeeks team. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.