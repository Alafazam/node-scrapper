Majority Element: A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element).Write a function which takes an array and emits the majority element (if it exists), otherwise prints NONE as follows:METHOD 1 (Basic)
The basic solution is to have two loops and keep track of maximum count for all different elements. If maximum count becomes greater than n/2 then break the loops and return the element having maximum count. If maximum count doesn’t become more than n/2 then majority element doesn’t exist.  Time Complexity:  O(n*n).
Auxiliary Space :  O(1). 
METHOD 2 (Using Binary Search Tree)
Thanks to Sachin Midha for suggesting this solution.Node of the Binary Search Tree (used in this approach) will be as follows.Insert elements in BST one by one and if an element is already present then increment the count of the node.  At any stage, if count of a node becomes more than n/2 then return.
The method works well for the cases where n/2+1 occurrences of the majority element is present in the starting of the array, for example {1, 1, 1, 1, 1, 2, 3, 4}.

Time Complexity: If a binary search tree is used then time complexity will be O(n^2).  If a self-balancing-binary-search tree is used then O(nlogn)
Auxiliary Space:  O(n) 
METHOD 3 (Using Moore’s Voting Algorithm)This is a two step process.
1. Get an element occurring most of the time in the array. This phase will make sure that if there is a majority element then it will return that only.
2. Check if the element obtained from above step is majority element. 1. Finding a Candidate:
The algorithm for first phase that works in O(n) is known as Moore’s Voting Algorithm. Basic idea of the algorithm is if we cancel out each occurrence of an element e with all the other elements that are different from e then e will exist till end if it is a majority element. Above algorithm loops through each element and maintains a count of a[maj_index], If next element is same then increments the count, if next element is not same then decrements the count, and if the count reaches 0 then changes the maj_index to the current element and sets count to 1.
First Phase algorithm gives us a candidate element. In second phase we need to check if the candidate is really a majority element. Second phase is simple and can be easily done in O(n). We just need to check if count of the candidate element is greater than n/2.Example:
A[] = 2, 2, 3, 5, 2, 2, 6
Initialize:
maj_index = 0, count = 1 –> candidate ‘2?
2, 2, 3, 5, 2, 2, 6Same as a[maj_index] => count = 2
2, 2, 3, 5, 2, 2, 6Different from a[maj_index] => count = 1
2, 2, 3, 5, 2, 2, 6Different from a[maj_index] => count = 0
Since count = 0, change candidate for majority element to 5 => maj_index = 3, count = 1
2, 2, 3, 5, 2, 2, 6Different from a[maj_index] => count = 0
Since count = 0, change candidate for majority element to 2 => maj_index = 4
2, 2, 3, 5, 2, 2, 6Same as a[maj_index] => count = 2
2, 2, 3, 5, 2, 2, 6Different from a[maj_index] => count = 1Finally candidate for majority element is 2.First step uses Moore’s Voting Algorithm to get a candidate for majority element.  2. Check if the element obtained in step 1 is majority

printMajority (a[], size)
1.  Find the candidate for majority
2.  If candidate is majority. i.e., appears more than n/2 times.
       Print the candidate
3.  Else
       Print "NONE"

Implementation of method 3:Time Complexity: O(n)
Auxiliary Space : O(1)Now give a try to below question
Given an array of 2n elements of which n elements are same and the remaining n elements are all different. Write a C program to find out the value which is present n times in the array. There is no restriction on the elements in the array. They are random (In particular they not sequential).Tags: Majority Element, Moore's Voting Algorithm