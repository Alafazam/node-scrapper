Given an array of size n, find all elements in array that appear more than n/k times.  For example, if the input arrays is {3, 1, 2, 2, 1, 2, 3, 3} and k is 4, then the output should be [2, 3]. Note that size of array is 8 (or n = 8), so we need to find all elements that appear more than 2 (or 8/4) times.  There are two elements that appear more than two times, 2 and 3.  A simple method is to pick all elements one by one. For every picked element, count its occurrences by traversing the array, if count becomes more than n/k, then print the element. Time Complexity of this method would be O(n2).A better solution is to use sorting. First, sort all elements using a O(nLogn) algorithm.  Once the array is sorted, we can find all required elements in a linear scan of array.  So overall time complexity of this method is O(nLogn) + O(n) which is O(nLogn).Following is an interesting O(nk) solution:
We can solve the above problem in O(nk) time using O(k-1) extra space.  Note that there can never be more than k-1 elements in output (Why?).  There are mainly three steps in this algorithm.1) Create a temporary array of size (k-1) to store elements and their counts (The output elements are going to be among these k-1 elements). Following is structure of temporary array elements.

struct eleCount {
    int element;
    int count;
}; 
struct eleCount temp[]; 
This step takes O(k) time.  2) Traverse through the input array and update temp[] (add/remove an element or increase/decrease count) for every traversed element.  The array temp[] stores potential (k-1) candidates at every step. This step takes O(nk) time.3) Iterate through final (k-1) potential candidates (stored in temp[]). or every element, check if it actually has count more than n/k. This step takes O(nk) time.The main step is step 2, how to maintain (k-1) potential candidates at every point? The steps used in step 2 are like famous game: Tetris.  We treat each number as a piece in Tetris, which falls down in our temporary array temp[]. Our task is to try to keep the same number stacked on the same column (count in temporary array is incremented).Now the question arises, what to do when temp[] is full and we see a new element – we remove the bottom row from stacks of elements, i.e., we decrease count of every element by 1 in temp[]. We ignore the current element.Finally, we have at most k-1 numbers in temp[].  The elements in temp are {3, 1, 2}.  Note that the counts in temp[] are useless now, the counts were needed only in step 2.  Now we need to check whether the actual counts of elements in temp[] are more than n/k (9/4) or not.  The elements 3 and 2 have counts more than 9/4.  So we print 3 and 2.Note that the algorithm doesn’t miss any output element.  There can be two possibilities, many occurrences are together or spread across the array.  If occurrences are together, then count will be high and won’t become 0.  If occurrences are spread, then the element would come again in temp[]. Following is C++ implementation of above algorithm. Output:

First Test
Number:4 Count:3

Second Test
Number:2 Count:2

Third Test
Number:2 Count:2

Fourth Test
Number:2 Count:2
Number:3 Count:2
Time Complexity: O(nk)
Auxiliary Space: O(k)Generally asked variations of this problem are, find all elements that appear n/3 times or n/4 times in O(n) time complexity and O(1) extra space.Hashing can also be an efficient solution. With a good hash function, we can solve the above problem in O(n) time on average.  Extra space required hashing would be higher than O(k).  Also, hashing cannot be used to solve above variations with O(1) extra space.Exercise:
The above problem can be solved in O(nLogk) time with the help of more appropriate data structures than array for auxiliary storage of k-1 elements.  Suggest a O(nLogk) approach.This article is contributed by Kushagra Jaiswal. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above