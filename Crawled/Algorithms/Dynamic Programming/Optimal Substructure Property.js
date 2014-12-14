Consider the following C implementation of Binary Search function, is there anything wrong in this?The above looks fine except one subtle thing, the expression “m = (l+r)/2″. It fails for large values of l and r. Specifically, it fails if the sum of low and high is greater than the maximum positive int value (231 – 1). The sum overflows to a negative value, and the value stays negative when divided by two. In C this causes an array index out of bounds with unpredictable results.What is the way to resolve this problem?
Following is one way:

        int mid = low + ((high - low) / 2); 
Probably faster, and arguably as clear is (works only in Java, refer this):

        int mid = (low + high) >>> 1; 
In C and C++ (where you don’t have the >>> operator), you can do this:

        mid = ((unsigned int)low + (unsigned int)high)) >> 1 
The similar problem appears in Merge Sort as well. The above content is taken from google reasearch blog. Please refer this as well, it points out that the above solutions may not always work.The above problem occurs when array length is 230 or greater and the search repeatedly moves to second half of the array.  This much size of array is not likely to appear most of the time.  For example, when we try the below program with 32 bit Code Blocks compiler, we get compiler error.Output:
error: size of array 'arr' is too large
Even when we try boolean array, the program compiles fine, but crashes when run in Windows 7.0 and Code Blocks 32 bit compilerOutput: No compiler error, but crashes at run time.Sources:
http://googleresearch.blogspot.in/2006/06/extra-extra-read-all-about-it-nearly.html
http://locklessinc.com/articles/binary_search/This article is contributed by Abhay Rathi. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above