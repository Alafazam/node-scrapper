There are two vessels of capacities ‘a’ and ‘b’ respectively. We have infinite water supply. Give an efficient algorithm to make exactly 1 litre of water in one of the vessels. You can throw all the water from any vessel any point of time. Assume that ‘a’ and ‘b’ are Coprimes.Following are the steps:
Let V1 be the vessel of capacity ‘a’ and V2 be the vessel of capacity ‘b’ and ‘a’ is smaller than ‘b’.
1) Do following while the amount of water in V1 is not 1.
….a) If V1 is empty, then completely fill V1
….b) Transfer water from V1 to V2.  If V2 becomes full, then keep the remaining water in V1 and empty V2
2) V1 will have 1 litre after termination of loop in step 1. Return.Following is C++ implementation of the above algorithm.Output:
Vessel 1: 3   Vessel 2: 0
Vessel 1: 3   Vessel 2: 3
Vessel 1: 3   Vessel 2: 6
Vessel 1: 2   Vessel 2: 0
Vessel 1: 3   Vessel 2: 2
Vessel 1: 3   Vessel 2: 5
Vessel 1: 1   Vessel 2: 0

How does this work? To prove that the algorithm works, we need to proof that after certain number of iterations in the while loop, we will get 1 litre in V1.
Let ‘a’ be the capacity of vessel V1 and ‘b’ be the capacity of V2.   Since we repeatedly transfer water from V1 to V2 until V2 becomes full, we will have ‘a – b (mod a)’ water in V1 when V2 becomes full first time .   Once V2 becomes full, it is emptied. We will have ‘a – 2b (mod a)’ water in V1 when V2 is full second time.  We repeat the above steps, and get ‘a – nb (mod a)’ water in V1 after the vessel V2 is filled and emptied ‘n’ times.   We need to prove that the value of ‘a – nb (mod a)’ will be 1 for a finite integer ‘n’.  To prove this, let us consider the following property of coprime numbers.
For any two coprime integers ‘a’ and ‘b’, the integer ‘b’ has a multiplicative inverse modulo ‘a’. In other words, there exists an integer ‘y’ such that   (See 3rd point here).  After ‘(a – 1)*y’ iterations, we will have ‘a – [(a-1)*y*b (mod a)]’ water in V1, the value of this expression is  ‘a – [(a – 1) * 1] mod a’ which is 1.  So the algorithm converges and we get 1 litre in V1.This article is compiled by Aashish Barnwal. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Tags: MathematicalAlgo