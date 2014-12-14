Given an array A[] consisting 0s, 1s and 2s, write a function that sorts A[]. The functions should put all 0s first, then all 1s and all 2s in last.Example
Input =   {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1};
Output = {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}The problem is similar to our old post Segregate 0s and 1s in an array, and both of these problems are variation of famous Dutch national flag problem.The problem was posed with three colours, here `0′, `1′ and `2′. The array is divided into four sections:The unknown region is shrunk while maintaining these conditions— Dutch National Flag Algorithm, or 3-way Partitioning —  // <![CDATA[
function dnf(N)
 { var a = new Array(N+1);
   var i;
   document.theForm3.opt.value = '';
   document.theForm3.trace.value = '';
   for(i=1; i <= N; i++)
      a[i] = Math.round(100*Math.random()) % 3;
   for(i = 1; i <= N; i++) document.theForm3.opt.value += ' '+a[i];</p>
<p>   var Lo = 1, Mid = 1, Hi = N;
   while( Mid-0 <= Hi )
   // inv: a[1..Lo-1]=0 &#038;&#038; a[Lo..Mid-1]=1 &#038;&#038; a[Hi+1..N]=2,  a[Mid..Hi] unknown.
    { if(a[Mid]-0 == 0)
       { var temp=a[Mid]; a[Mid]=a[Lo]; a[Lo]=temp;
	 Lo++; // the zeros' section grew
	 Mid++;
       }
      else if(a[Mid]-0 == 1)
         Mid++; // ones' section grew
      else// ==2
       { var temp=a[Hi]; a[Hi]=a[Mid]; a[Mid]=temp;
	 Hi--; // the twos' section grew
       }</p>
<p>      for(i = 1; i <= N; i++)
         if( i-0 < Mid || i-0 > Hi)
	    document.theForm3.trace.value += ' '+a[i];
         else
	    document.theForm3.trace.value += '  ';
      document.theForm3.trace.value += '\n';
    }
 }
// ]]&gt;[YOU NEED A JavaScript ENABLED BOWSER!!!]Part way through the process, some red, white and blue elements are known and are in the “right” place. The section of unknown elements, a[Mid..Hi], is shrunk by examining a[Mid]:Examine a[Mid]. There are three possibilities: a[Mid] is (0) red, (1) white or (2) blue.
Case (0) a[Mid] is red, swap a[Lo] and a[Mid]; Lo++; Mid++Case (1) a[Mid] is white, Mid++Case (2) a[Mid] is blue, swap a[Mid] and a[Hi]; Hi–Continue until Mid>Hi.Time Complexity: O(n)The above code performs unnecessary swaps for inputs like 0 0 0 0 1 1 1 2 2 2 2 2 : lo=4 and mid=7 and hi=11. In present code: first 7 exchanged with 11 and hi become 10 and mid is still pointing to 7. again same operation is till the mid 

while ((a[hi]==2) && hi >= mid)
    –hi;
if (hi < mid)
    break;

Thanks to rka for suggesting this change.
Source:
http://www.csse.monash.edu.au/~lloyd/tildeAlgDS/Sort/Flag/
Please write comments if you find the above code/algorithm incorrect, or find better ways to solve the same problem.
		
 
 




(adsbygoogle = window.adsbygoogle || []).push({});




 
 
 
Related Topics:K’th Smallest/Largest Element in Unsorted Array | Set 3 (Worst Case Linear Time)Find Index of 0 to be replaced with 1 to get longest continuous sequence of 1s in a binary arrayK’th Smallest/Largest Element in Unsorted Array | Set 2 (Expected Linear Time)K’th Smallest/Largest Element in Unsorted Array | Set 1Time complexity of insertion sort when there are O(n) inversions?How to check if two given sets are disjoint?Minimum Number of Platforms Required for a Railway/Bus StationFind the closest pair from two sorted arrays
 


Tweet



  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();






				Thanks to rka for suggesting this change.Source:
http://www.csse.monash.edu.au/~lloyd/tildeAlgDS/Sort/Flag/Please write comments if you find the above code/algorithm incorrect, or find better ways to solve the same problem.