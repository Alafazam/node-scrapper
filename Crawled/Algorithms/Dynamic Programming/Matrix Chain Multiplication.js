Huffman coding is a lossless data compression algorithm.  The idea is to assign variable-legth codes to input characters, lengths of the assigned codes are based on the frequencies of corresponding characters.  The most frequent character gets the smallest code and the least frequent character gets the largest code.
The variable-length codes assigned to input characters are Prefix Codes, means the codes (bit sequences) are assigned in such a way that the code assigned to one character is not prefix of code assigned to any other character. This is how Huffman Coding makes sure that there is no ambiguity when decoding the generated bit stream.
Let us understand prefix codes with a counter example. Let there be four characters a, b, c and d, and their corresponding variable length codes be 00, 01, 0 and 1. This coding leads to ambiguity because code assigned to c is prefix of codes assigned to a and b. If the compressed bit stream is 0001, the de-compressed output may be “cccd” or  “ccb” or “acd” or “ab”.See this  for applications of Huffman Coding. There are mainly two major parts in Huffman Coding
1) Build a Huffman Tree from input characters.
2) Traverse the Huffman Tree and assign codes to characters.Steps to build Huffman Tree
Input is array of unique characters along with their frequency of occurrences and output is Huffman Tree.  1. Create a leaf node for each unique character and build a min heap of all leaf nodes (Min Heap is used as a priority queue. The value of frequency field is used to compare two nodes in min heap. Initially, the least frequent character is at root)2. Extract two nodes with the minimum frequency from the min heap.3. Create a new internal node with frequency equal to the sum of the two nodes frequencies. Make the first extracted node as its left child and the other extracted node as its right child. Add this node to the min heap.    4. Repeat steps#2 and #3 until the heap contains only one node. The remaining node is the root node and the tree is complete.Let us understand the algorithm with an example:

character   Frequency
    a	        5
    b           9
    c           12
    d           13
    e           16
    f           45
Step 1. Build a min heap that contains 6 nodes where each node represents root of a tree with single node.Step 2 Extract two minimum frequency nodes from min heap. Add a new internal node with frequency 5 + 9 = 14.

Now min heap contains 5 nodes where 4 nodes are roots of trees with single element each, and one heap node is root of tree with 3 elementsStep 3: Extract two minimum frequency nodes from heap. Add a new internal node with frequency 12 + 13 = 25

Now min heap contains 4 nodes where 2 nodes are roots of trees with single element each, and two heap nodes are root of tree with more than one nodes.Step 4: Extract two minimum frequency nodes. Add a new internal node with frequency 14 + 16 = 30

Now min heap contains 3 nodes.Step 5: Extract two minimum frequency nodes. Add a new internal node with frequency 25 + 30 = 55

Now min heap contains 2 nodes.Step 6: Extract two minimum frequency nodes. Add a new internal node with frequency 45 + 55 = 100

Now min heap contains only one node.Since the heap contains only one node, the algorithm stops here.Steps to print codes from Huffman Tree:
Traverse the tree formed starting from the root. Maintain an auxiliary array. While moving to the left child, write 0 to the array. While moving to the right child, write 1 to the array. Print the array when a leaf node is encountered.
The codes are as follows:

character   code-word
    f          0
    c          100
    d          101
    a          1100
    b          1101
    e          111

// C program for Huffman Coding
#include <stdio.h>
#include <stdlib.h>

// This constant can be avoided by explicitly calculating height of Huffman Tree
#define MAX_TREE_HT 100

// A Huffman tree node
struct MinHeapNode
{
    char data;  // One of the input characters
    unsigned freq;  // Frequency of the character
    struct MinHeapNode *left, *right; // Left and right child of this node
};

// A Min Heap:  Collection of min heap (or Hufmman tree) nodes
struct MinHeap
{
    unsigned size;    // Current size of min heap
    unsigned capacity;   // capacity of min heap
    struct MinHeapNode **array;  // Attay of minheap node pointers
};

// A utility function allocate a new min heap node with given character
// and frequency of the character
struct MinHeapNode* newNode(char data, unsigned freq)
{
    struct MinHeapNode* temp =
          (struct MinHeapNode*) malloc(sizeof(struct MinHeapNode));
    temp->left = temp->right = NULL;
    temp->data = data;
    temp->freq = freq;
    return temp;
}

// A utility function to create a min heap of given capacity
struct MinHeap* createMinHeap(unsigned capacity)
{
    struct MinHeap* minHeap =
         (struct MinHeap*) malloc(sizeof(struct MinHeap));
    minHeap->size = 0;  // current size is 0
    minHeap->capacity = capacity;
    minHeap->array =
     (struct MinHeapNode**)malloc(minHeap->capacity * sizeof(struct MinHeapNode*));
    return minHeap;
}

// A utility function to swap two min heap nodes
void swapMinHeapNode(st



        Greedy Algorithms - GeeksQuiz
   	
      	@import url('http://d18khu5s3lkxd9.cloudfront.net//wp-content/themes/minimoo/style.css');
	

	       
	






















<!--
function bb2_addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

bb2_addLoadEvent(function() {
	for ( i=0; i < document.forms.length; i++ ) {
		if (document.forms[i].method == 'post') {
			var myElement = document.createElement('input');
			myElement.setAttribute('type', 'hidden');
			myElement.name = 'bb2_screener_';
			myElement.value = '1418403050 111.93.6.70';
			document.forms[i].appendChild(myElement);
		}
	}
});
// -->
		


     
	
		
	   	 	
    	    	GeeksQuiz
        	
        
        	
        		Computer science mock tests for geeks        	   

  input.gsc-input {
width:200px;  
  }


  (function() {
    var cx = '009682134359037907028:f2a6aygurua';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();



       	
                      
    		    
         		
                               Home
                                Latest Questions
                               Articles
				C/C++ Programs
Contribute


	Books
		 	              
		 	  	   
			
				
				Subscribe				
			     
				
			      
		 
			
		
		

	

	

			

					
		
							
			
		
		
		
		 
  
        
      
   
   
  
    
  Greedy Algorithms
  
      
  
  Please wait while the activity loads. If this activity does not load, try refreshing your browser. Also, this page requires javascript. Please visit using a browser with javascript enabled.  
  If loading fails, click here to try again  
  
    
  

  
  
          Question 1Which of the following standard algorithms is not a Greedy algorithm?ADijkstra's shortest path algorithmBPrim's algorithmCKruskal algorithmDHuffman CodingEBellmen Ford Shortest path algorithmDiscuss itQuestion 1 Explanation:  See http://www.geeksforgeeks.org/greedy-algorithms-set-1-activity-selection-problem/  and http://www.geeksforgeeks.org/dynamic-programming-set-23-bellman-ford-algorithm/Question 2A networking company uses a compression technique to encode the message before transmitting over the network. Suppose the message contains the following characters with their frequency:

character   Frequency
    a	        5
    b           9
    c           12
    d           13
    e           16
    f           45


If the compression technique used is Huffman Coding, how many bits will be saved in the message?A224B800C576D324Discuss itQuestion 2 Explanation:  
Total number of characters in the message = 100. 
Each character takes 1 byte. So total number of bits needed = 800.

After Huffman Coding, the characters can be represented with:
f: 0
c: 100
d: 101
a: 1100
b: 1101
e: 111
Total number of bits needed = 224
Hence, number of bits saved = 800 - 224 = 576
See here for complete explanation and algorithm.
Question 3What is the time complexity of Huffman Coding?AO(N)BO(NlogN)CO(N(logN)^2)DO(N^2)Discuss itQuestion 3 Explanation:  O(nlogn) where n is the number of unique characters. If there are n nodes, extractMin() is called 2*(n – 1) times. extractMin() takes O(logn) time as it calles minHeapify(). So, overall complexity is O(nlogn).
See here for more details of the algorithm.Question 4In question #2, which of the following represents the word "dead"?A1011111100101B0100000011010CBoth A and BDNone of theseDiscuss itQuestion 4 Explanation:  The Huffman Tree generated is:



character   code-word
    f          0
    c          100
    d          101
    a          1100
    b          1101
    e          111

The word dead can be represented as:
101 111 1100 101
However, the alternative codeword can also be found by assigning 1 to the left edge and 0 to the right edge of the tree, i.e. dead can also be represented as:
010 000 0011 010
See here for more details of the algorithm.Question 5Which of the following is true about Kruskal and Prim MST algorithms?  Assume that Prim is implemented for adjacency list representation using Binary Heap and Kruskal is implemented using union by rank.AWorst case time complexity of both algorithms is same.BWorst case time complexity of Kruskal is better than PrimCWorst case time complexity of Prim is better than KruskalDiscuss itQuestion 5 Explanation:  See following

Kruskal’s Minimum Spanning Tree Algorithm

Prim’s MST for Adjacency List Representation
Question 6Which of the following is true about Huffman Coding.AHuffman coding may become lossy in some casesBHuffman Codes may not be optimal lossless codes in some casesCIn Huffman coding, no code is prefix of any other code.DAll of the aboveDiscuss itQuestion 6 Explanation:  Huffman coding is a lossless data compression algorithm. The codes assigned to input characters are Prefix Codes, means the codes  are assigned in such a way that the code assigned to one character is not prefix of code assigned to any other character. This is how Huffman Coding makes sure that there is no ambiguity when decoding.Question 7Suppose the letters a, b, c, d, e, f have probabilities 1/2, 1/4, 1/8, 1/16, 1/32, 1/32 respectively. Which of the following is the Huffman code for the letter a, b, c, d, e, f?  A 0, 10, 110, 1110, 11110, 11111 B 11, 10, 011, 010, 001, 000C11, 10, 01, 001, 0001, 0000 D110, 100, 010, 000, 001, 111 Discuss itQuestion 7 Explanation:  We get the following Huffman Tree after applying Huffman Coding Algorithm. The idea is to keep the least probable characters as low as possible by picking them first. 


The letters a, b, c, d, e, f have probabilities 
1/2, 1/4, 1/8, 1/16, 1/32, 1/32 respectively. 

                 1
               /   \
              /     \
             1/2    a(1/2)
            /  \
           /    \
          1/4  b(1/4) 
         /   \
        /     \
       1/8   c(1/8) 
      /  \
     /    \
   1/16  d(1/16)
  /  \
 e    fQuestion 8Suppose the letters a, b, c, d, e, f have probabilities 1/2, 1/4, 1/8, 1/16, 1/32, 1/32 respectively. What is the average length of Huffman codes?A3B2.1875C2.25D1.19375Discuss itQuestion 8 Explanation:  We get the following Huffman Tree after applying Huffman Coding Algorithm. The idea is to keep the least probable characters as low as possible by picking them first. 

The letters a, b, c, d, e, f have probabilities 
1/2, 1/4, 1/8, 1/16, 1/32, 1/32 respectively. 

                 1
               /   \
              /     \
             1/2    a(1/2)
            /  \
           /    \
          1/4  b(1/4) 
         /   \
        /     \
       1/8   c(1/8) 
      /  \
     /    \
   1/16  d(1/16)
  /  \
 e    f
The average length = (1*1/2 + 2*1/4 + 3*1/8 + 4*1/16 + 5*1/32 + 5*1/32)
                   = 1.9375 
                 
    
  
   
  
    
  There are 8 questions to complete.  
       
  
      
    You have completed     
    questions     
    question     
    Your score is     
    Correct     
    Wrong     
    Partial-Credit     
    You have not finished your quiz. If you leave this page, your progress will be lost.     
    Correct Answer     
    You Selected     
    Not Attempted     
    Final Score on Quiz     
    Attempted Questions Correct     
    Attempted Questions Wrong     
    Questions Not Attempted     
    Total Questions on Quiz     
    Question Details     
    Results     
    Date     
    Score     
    Hint    
    Time allowed
minutes
seconds
Time used
Answer Choice(s) Selected
Question Text


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    All doneNeed more practice!Keep trying!Not bad!Good work!Perfect!    
    
    
    

  
  
   
   











(adsbygoogle = window.adsbygoogle || []).push({});
	


    


Tweet



  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();





		
		
	 


 

 


				
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=138031159685820";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

 
		
			



(adsbygoogle = window.adsbygoogle || []).push({});

		
Categories
		
	Articles (105)

	Algorithms (21)

	C (13)

	C++ (16)

	Data Structures (29)

	DBMS (1)

	Interview Experiences (6)

	Java (2)

	Operating Systems (1)

	Searching and Sorting (10)



	Programs (35)

	Quizzes (1,865)

	Aptitude (1)

	Computer Science Quizzes (1,863)
	
	Algorithms (147)

	C (207)

	C++ (129)

	Computer Organization and Architecture (1)

	Data Structures (132)

	DBMS (2)

	GATE (1,166)

	Java (51)

	Operating Systems (28)

	

	Web technologies (1)



		

			



(adsbygoogle = window.adsbygoogle || []).push({});

		
Recent Discussions
			
		
			



(adsbygoogle = window.adsbygoogle || []).push({});






(adsbygoogle = window.adsbygoogle || []).push({});






(adsbygoogle = window.adsbygoogle || []).push({});

		
	
			   
		

		
		
		    
			  Valid XHTML Strict 1.0
		    
		    
		    
			  Powered by WordPress  & MooTools | MiniMoo 1.3.4
			  
		   						                            
		   
		   
        
		        
        // <![CDATA[
        var disqus_shortname = 'geeksquiz';
        (function () {
            var nodes = document.getElementsByTagName('span');
            for (var i = 0, url; i < nodes.length; i++) {
                if (nodes[i].className.indexOf('dsq-postid') != -1) {
                    nodes[i].parentNode.setAttribute('data-disqus-identifier', nodes[i].getAttribute('data-dsqidentifier'));
                    url = nodes[i].parentNode.href.split('#', 1);
                    if (url.length == 1) { url = url[0]; }
                    else { url = url[1]; }
                    nodes[i].parentNode.href = url + '#disqus_thread';
                }
            }
            var s = document.createElement('script'); 
            s.async = true;
            s.type = 'text/javascript';
            s.src = '//' + disqus_shortname + '.disqus.com/count.js';
            (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
        }());
        // ]]>
        
        


	(function(){
		var corecss = document.createElement('link');
		var themecss = document.createElement('link');
		var corecssurl = "http://d18khu5s3lkxd9.cloudfront.net//wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/styles/shCore.css?ver=3.0.9";
		if ( corecss.setAttribute ) {
				corecss.setAttribute( "rel", "stylesheet" );
				corecss.setAttribute( "type", "text/css" );
				corecss.setAttribute( "href", corecssurl );
		} else {
				corecss.rel = "stylesheet";
				corecss.href = corecssurl;
		}
		document.getElementsByTagName("head")[0].insertBefore( corecss, document.getElementById("syntaxhighlighteranchor") );
		var themecssurl = "http://d18khu5s3lkxd9.cloudfront.net//wp-content/plugins/syntaxhighlighter/syntaxhighlighter3/styles/shThemeDefault.css?ver=3.0.9";
		if ( themecss.setAttribute ) {
				themecss.setAttribute( "rel", "stylesheet" );
				themecss.setAttribute( "type", "text/css" );
				themecss.setAttribute( "href", themecssurl );
		} else {
				themecss.rel = "stylesheet";
				themecss.href = themecssurl;
		}
		//document.getElementById("syntaxhighlighteranchor").appendChild(themecss);
		document.getElementsByTagName("head")[0].insertBefore( themecss, document.getElementById("syntaxhighlighteranchor") );
	})();
	SyntaxHighlighter.config.strings.expandSource = '+ expand source';
	SyntaxHighlighter.config.strings.help = '?';
	SyntaxHighlighter.config.strings.alert = 'SyntaxHighlighter\n\n';
	SyntaxHighlighter.config.strings.noBrush = 'Can\'t find brush for: ';
	SyntaxHighlighter.config.strings.brushNotHtmlScript = 'Brush wasn\'t configured for html-script option: ';
	SyntaxHighlighter.defaults['gutter'] = false;
	SyntaxHighlighter.defaults['pad-line-numbers'] = false;
	SyntaxHighlighter.defaults['toolbar'] = false;
	SyntaxHighlighter.all();

				  
		 



// Code for google analytics
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-37433965-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

       

	






