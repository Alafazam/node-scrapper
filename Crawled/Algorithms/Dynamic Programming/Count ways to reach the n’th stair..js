You are given a set of n types of rectangular 3-D boxes, where the i^th box has height h(i), width w(i) and depth d(i) (all real numbers). You want to create a stack of boxes which is as tall as possible, but you can only stack a box on top of another box if the dimensions of the 2-D base of the lower box are each strictly larger than those of the 2-D base of the higher box. Of course, you can rotate a box so that any side functions as its base. It is also allowable to use multiple instances of the same type of box.Source: http://people.csail.mit.edu/bdean/6.046/dp/. The link also has video for explanation of solution.The Box Stacking problem is a variation of LIS problem. We need to build a maximum height stack. Following are the key points to note in the problem statement:
1) A box can be placed on top of another box only if both width and depth of the upper placed box are smaller than width and depth of the lower box respectively.
2) We can rotate boxes. For example, if there is a box with dimensions {1x2x3} where 1 is height, 2×3 is base, then there can be three possibilities, {1x2x3}, {2x1x3} and {3x1x2}.
3) We can use multiple instances of boxes. What it means is, we can have two different rotations of a box as part of our maximum height stack.Following is the solution based on DP solution of LIS problem.1) Generate all 3 rotations of all boxes. The size of rotation array becomes 3 times the size of original array. For simplicity, we consider depth as always smaller than or equal to width. 2) Sort the above generated 3n boxes in decreasing order of base area.3) After sorting the boxes, the problem is same as LIS with following optimal substructure property.
MSH(i) = Maximum possible Stack Height with box i at top of stack
MSH(i) = { Max ( MSH(j) ) + height(i) } where j < i and width(j) > width(i) and depth(j) > depth(i).
If there is no such j then MSH(i) = height(i)4) To get overall maximum height, we return max(MSH(i)) where 0 < i < nFollowing is C++ implementation of the above solution.Output:
The maximum possible height of stack is 60
In the above program, given input boxes are  {4, 6, 7}, {1, 2, 3}, {4, 5, 6}, {10, 12, 32}.  Following are all rotations of the boxes in decreasing order of base area.

   10 x 12 x 32
   12 x 10 x 32
   32 x 10 x 12
   4 x 6 x 7
   4 x 5 x 6
   6 x 4 x 7
   5 x 4 x 6
   7 x 4 x 6
   6 x 4 x 5
   1 x 2 x 3
   2 x 1 x 3
   3 x 1 x 2
The height 60 is obtained by boxes { {3, 1, 2}, {1, 2, 3}, {6, 4, 5}, {4, 5, 6}, {4, 6, 7},  {32, 10, 12}, {10, 12, 32}}Time Complexity: O(n^2)
Auxiliary Space: O(n)Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: Dynamic Programming