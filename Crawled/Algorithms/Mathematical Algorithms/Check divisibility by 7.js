Algorithm:
This method can be derived from (but predates) Newton–Raphson method. Implementation:Example:

n = 4 /*n itself is used for initial approximation*/
Initialize x = 4, y = 1
Next Approximation x = (x + y)/2 (= 2.500000), 
y = n/x  (=1.600000)
Next Approximation x = 2.050000,
y = 1.951220
Next Approximation x = 2.000610,
y = 1.999390
Next Approximation x = 2.000000, 
y = 2.000000
Terminate as (x - y) > e now.

If we are sure that n is a perfect square, then we can use following method. The method can go in infinite loop for non-perfect-square numbers. For example, for 3 the below while loop will never terminate.
References;
http://en.wikipedia.org/wiki/Square_root
http://en.wikipedia.org/wiki/Babylonian_method#Babylonian_methodAsked by SnehalPlease write comments if you find any bug in the above program/algorithm, or if you want to share more information about Babylonian method. Tags: MathematicalAlgo