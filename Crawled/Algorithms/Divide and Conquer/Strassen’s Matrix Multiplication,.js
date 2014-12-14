Backtracking is an algorithmic paradigm that tries different solutions until finds a solution that “works”. Problems which are typically solved using backtracking technique have following property in common.  These problems can only be solved by trying every possible configuration and each configuration is tried only once.  A Naive solution for these problems is to try all configurations and output a configuration that follows given problem constraints.  Backtracking works in incremental way and is an optimization over the Naive solution where all possible configurations are generated and tried.For example, consider the following Knight’s Tour problem.
The knight is placed on the first block of an empty board and, moving according to the rules of chess, must visit each square exactly once. Let us first discuss the Naive algorithm for this problem and then the Backtracking algorithm.Naive Algorithm for Knight’s tour
The Naive Algorithm is to generate all tours one by one and check if the generated tour satisfies the constraints. Backtracking works in an incremental way to attack problems.  Typically, we start from an empty solution vector and one by one add items  (Meaning of item varies from problem to problem. In context of Knight’s tour problem, an item is a Knight’s move). When we add an item, we check if adding the current item violates the problem constraint, if it does then we remove the item  and try other alternatives. If none of the alternatives work out then we go to previous stage and remove the item added in the previous stage. If we reach the initial stage back then we say that no solution exists. If adding an item doesn’t violate constraints then we recursively add items one by one. If the solution vector becomes complete then we print the solution.Backtracking Algorithm for Knight’s tour
Following is the Backtracking algorithm for Knight’s tour problem. Following is C implementation for Knight’s tour problem.  It prints one of the possible solutions in 2D matrix form.  Basically, the output is a 2D 8*8 matrix with numbers from 0 to 63 and these numbers show steps made by Knight.Output:

  0  59  38  33  30  17   8  63
 37  34  31  60   9  62  29  16
 58   1  36  39  32  27  18   7
 35  48  41  26  61  10  15  28
 42  57   2  49  40  23   6  19
 47  50  45  54  25  20  11  14
 56  43  52   3  22  13  24   5
 51  46  55  44  53   4  21  12

Note that Backtracking is not the best solution for the Knight’s tour problem.  See this for other better solutions. The purpose of this post is to explain Backtracking with an example.References:
http://see.stanford.edu/materials/icspacs106b/H19-RecBacktrackExamples.pdf
http://www.cis.upenn.edu/~matuszek/cit594-2009/Lectures/35-backtracking.ppt
http://mathworld.wolfram.com/KnightsTour.html
http://en.wikipedia.org/wiki/Knight%27s_tourPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Backtracking