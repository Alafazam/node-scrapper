Given two line segments (p1, q1) and (p2, q2), find if the given line segments intersect with each other.Before we discuss solution, let us define notion of orientation. Orientation of an ordered triplet of points in the plane can be
–counterclockwise
–clockwise
–colinear
The following diagram shows different possible orientations of (a, b, c)Note the word ‘ordered’ here. Orientation of (a, b, c) may be different from orientation of (c, b, a).How is Orientation useful here?
Two segments (p1,q1) and (p2,q2) intersect if and only if one of the following two conditions is verified1. General Case:
– (p1, q1, p2) and (p1, q1, q2) have different orientations and
– (p2, q2, p1) and (p2, q2, q1) have different orientations2. Special Case 
– (p1, q1, p2), (p1, q1, q2), (p2, q2, p1), and (p2, q2, q1) are all collinear and
– the x-projections of (p1, q1) and (p2, q2) intersect
– the y-projections of (p1, q1) and (p2, q2) intersectExamples of General Case:
Examples of Special Case:
Following is C++ implementation based on above idea.Output:
No
Yes
No
Sources:
http://www.dcs.gla.ac.uk/~pat/52233/slides/Geometry1x1.pdf
Introduction to Algorithms 3rd Edition by Clifford Stein, Thomas H. Cormen, Charles E. Leiserson, Ronald L. RivestPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: geometric algorithms, MathematicalAlgo