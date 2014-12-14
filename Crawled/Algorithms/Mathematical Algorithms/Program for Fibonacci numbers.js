Given a polygon and a point ‘p’, find if ‘p’ lies inside the polygon or not. The points lying on the border are considered inside.We strongly recommend to see the following post first.
How to check if two given line segments intersect?Following is a simple idea to check whether a point is inside or outside.

1) Draw a horizontal line to the right of each point and extend it to infinity

1) Count the number of times the line intersects with polygon edges.

2) A point is inside the polygon if either count of intersections is odd or
   point lies on an edge of polygon.  If none of the conditions is true, then 
   point lies outside.
How to handle point ‘g’ in the above figure?
Note that we should returns true if the point lies on the line or same as one of the vertices of the given polygon.  To handle this, after checking if the line from ‘p’ to extreme intersects, we check whether ‘p’ is colinear with vertices of current line of polygon.  If it is coliear, then we check if the point ‘p’ lies on current side of polygon, if it lies, we return true, else false.Following is C++ implementation of the above idea. Output:

No
Yes
Yes
Yes
No
No
Time Complexity: O(n) where n is the number of vertices in the given polygon.Source:
http://www.dcs.gla.ac.uk/~pat/52233/slides/Geometry1x1.pdfPlease write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: geometric algorithms, MathematicalAlgo