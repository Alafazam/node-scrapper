Like arrays, Linked List is a linear data structure.  Unlike arrays, linked list elements are not stored at contiguous location; the elements are linked using pointers.Why Linked List?
Arrays can be used to store linear data of similar types, but arrays have following limitations.
1) The size of the arrays is fixed:  So we must know the upper limit on the number of elements in advance.  Also, generally, the allocated memory is equal to the upper limit irrespective of the usage.
2) Inserting a new element in an array of elements is expensive, because room has to be created for the new elements and to create room existing elements have to shifted. For example, in a system if we maintain a sorted list of IDs in an array id[].  id[] = [1000,  1010,  1050,  2000,  2040]. And if we want to insert a new ID 1005, then to maintain the sorted order, we have to move all the elements after 1000 (excluding 1000).
Deletion is also expensive with arrays until unless some special techniques are used. For example, to delete 1010 in id[], everything after 1010 has to be moved.Advantages over arrays
1) Dynamic size
2) Ease of insertion/deletionDrawbacks:
1) Random access is not allowed.  We have to access elements sequentially starting from the first node.  So we cannot do binary search with linked lists.
2) Extra memory space for a pointer is required with each element of the list.Representation in C:
A linked list is represented by a pointer to the first node of the linked list.  The first node is called head.  If the linked list is empty, then value of head is NULL.
Each node in a list consists of at least two parts:
1) data
2) pointer to the next node
In C, we can represent a node using structures.  Below is an example of a linked list node with an integer data.First Simple Linked List in C Let us create a simple



       Write a C function to print the middle of a given linked list - GeeksforGeeks
       
          @import url('http://d2o58evtke57tz.cloudfront.net/wp-content/themes/minimoo/style.css');
    
          
    























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
			myElement.value = '1417111060 210.212.53.139 172.19.11.169';
			document.forms[i].appendChild(myElement);
		}
	}
});
// -->
		
   



    
    
        
                
                GeeksforGeeks
            
       
            
                A computer science portal for geeks            
        
           GeeksQuiz 
   Login 
           Method 1:
Traverse the whole linked list and count the no. of nodes.  Now traverse the list again till count/2 and return the node at count/2.
Method 2:
Traverse linked list using two pointers.  Move one pointer by one and other pointer by two.  When the fast pointer reaches end slow pointer will reach middle of the linked list.Output:
5->NULL
The middle element is [5]

4->5->NULL
The middle element is [5]

3->4->5->NULL
The middle element is [4]

2->3->4->5->NULL
The middle element is [4]

1->2->3->4->5->NULL
The middle element is [3]
Method 3:
Initialize mid element as head and initialize a counter as 0.  Traverse the list from head, while traversing increment the counter and change mid to mid->next whenever the counter is odd.  So the mid will move only half of the total length of the list.
Thanks to Narendra Kangralkar for suggesting this method. Output:

5->NULL
The middle element is [5]

4->5->NULL
The middle element is [5]

3->4->5->NULL
The middle element is [4]

2->3->4->5->NULL
The middle element is [4]

1->2->3->4->5->NULL
The middle element is [3]
Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.Method 2 and 3 are essentially the same. You are using two different pointers where you increment faster  linked list with 3 nodes.Function to get the middle of the linked list*/
void printMiddle(struct node *head)
{
    struct node *slow_ptr = head;
    struct node *fast_ptr = head;    if (head!=NULL)
    {
        while (fast_ptr != NULL && fast_ptr->next != NULL)
        {
            fast_ptr = fast_ptr->next->next;
            slow_ptr = slow_ptr->next;
        }
        printf(“The middle element is [%d]nn”, slow_ptr->data);
    }
/****While condition should be while (fast_ptr != NULL && fast_ptr->next->next != NULL)Is there any cpp compiler property that can be used in this problem? Please Refer  to  http://tinyurl.com/oe7dxqoall works on time complexity O(n) i prefer first method as the space complexity is less compared with other methods .@All:
We have updated the programs so that the output of both methods matches in case of even elements. We have also added more test cases in main().Thanks for your comments and views.plz correct the 3rd method its not working in case of 2 elements……It works for a list with two elements, please see http://ideone.com/gk8zC6it should print 4 in your test case but its printing 20 so its wrong.u can check your second method for the same case its printing 4 so method 3 is wrong.since we have to print mid=(n/2) in case n is even so its wrong according to this.The condition in while loop should bewhile (fast_ptr.next != NULL && fast_ptr->next.next != NULL)3rd method fail when their are only 2 number in linked list…….it is missing corner cases plz update thisIt seems to be working.  Please see http://ideone.com/gk8zC6u r storing linked list as 4->20->NULL
and so for this case output should be 4 not 20(as it is showing here http://ideone.com/gk8zC6 )..plz correct me if i m wrongWhen linked list is 4->20->NULL, we consider it as a list of two elements, 4 and 20.plz elaborate this….according to me if their is 2 element in the list and we have to find middle element then answer should be first number..not second number…so for this list answer should be (4->20->NULL) 4.
or is their case that when we have even no. of element ,we can consider mid and mid+1 both as middle element….reply soon asapSimpler implementation.Replace mptr with mid above to avoid compile errorMethod2 and Method3 seems similar to me. In both the methods, we r keeping two pointers, one moves alternatively while other actually points to middle element when other reaches end.If I am wrong..can you please point out the exact difference between both methods?Even though in case of even length linked list,you can print either of the two middle elements, But you should maintain consistency in all the methods provided.
In case of 1->2->3->4
2nd method would output 2
and the third method would output 3
We should use ( head->next!=NULL )in 3rd method.Thank you for sharing your info. I really appreciate your efforts and I will
be waiting for your next post thank you once again.If a linked list has even number of nodes, which element we should consider as middle element ?Any of the middle two elements can be considered as middle.    In case both of them are needed, the above programs can easily modified to print both.this is the same approach as above, you are incrementing pointer ‘first’ twice and ‘second’ only once…is there any advantage using the function this way?Find the middle of linked list using single pointer.void
print_middle(node_t *head)
{
        node_t *middle = NULL;
        int i;        for (i = 1; head != NULL; head = head -> next, ++i) {
                if (i == 1)
                        middle = head;
                else if (i & 1)
                        middle = middle -> next;
        }
        printf(“middledle of list: %d\n”, middle -> data);
}Isn’t it you are using head also a pointer ? i mean to say both head and middle are the pointer. what are we achieving here{
slow = head;
fast = head->next->next;while(fast->next!=NULL)
{
   slow = slow->next;
   fast = fast->next;
}cout <data << endl;}I am not sure if the fast method is actually fast as it is generally portrayed to be… the fast pointer has to traverse the entire list once and the slower one, half of it… thus the total number of nodes visited is the same 1.5N@Gowrishankar: Thanks for pointing this out.  We have updated the posts.Isnt the fast pointer travelling at the rate of two nodes at a time skipping one alternate node everytime. So isnt it that its actually faster??What is the middle of even length linkedlist?@satya482
The above implementation prints the first middle element in that case.  For example, if given linked list is 1->2->3->4->5->6, then printMiddle() prints 3. You can modify it as per your retirements.Linked List Traversal
In the previous program, we have created a simple linked list with three nodes.  Let us traverse the created list and print the data of each node.  For traversal, let us write a general purpose function printList() that prints any given list.Output:
 1  2  3
You may like to try Practice MCQ Questions on Linked ListWe will soon be publishing more posts on Linked Lists.Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.