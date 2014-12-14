You can win three kinds of basketball points, 1 point, 2 points, and 3 points. Given a total score n, print out all the combination to compose n. Examples:
For n = 1, the program should print following:
1For n = 2, the program should print following:
1 1
2For n = 3, the program should print following:
1 1 1
1 2
2 1
3For n = 4, the program should print following:
1 1 1 1
1 1 2
1 2 1
1 3
2 1 1
2 2
3 1and so on …Algorithm:
At first position we can have three numbers 1 or 2 or 3.
First put 1 at first position and recursively call for n-1.
Then put 2 at first position and recursively call for n-2.
Then put 3 at first position and recursively call for n-3.
If n becomes 0 then we have formed a combination that compose n, so print the current combination.Below is a generalized implementation. In the below implementation, we can change MAX_POINT if there are higher points (more than 3) in the basketball game. Asked by AloePlease write comments if you find any bug in above code/algorithm, or find other ways to solve the same problem.Tags: MathematicalAlgo