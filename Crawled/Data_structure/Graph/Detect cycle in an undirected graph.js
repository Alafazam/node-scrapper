Given a binary tree, print it vertically. The following example illustrates vertical order traversal.We strongly recommend to minimize the browser and try this yourself first.We have discussed a O(n2) solution in the previous post. In this post, an efficient solution based on hash map is discussed. We need to check the Horizontal Distances from root for all nodes. If two nodes have the same Horizontal Distance (HD), then they are on same vertical line. The idea of HD is simple. HD for root is 0, a right edge (edge connecting to right subtree) is considered as +1 horizontal distance and a left edge is considered as -1 horizontal distance. For example, in the above tree, HD for Node 4 is at -2, HD for Node 2 is -1, HD for 5 and 6 is 0 and HD for node 7 is +2.
We can do inorder traversal of the given Binary Tree. While traversing the tree, we can recursively calculate HDs. We initially pass the horizontal distance as 0 for root. For left subtree, we pass the Horizontal Distance as Horizontal distance of root minus 1. For right subtree, we pass the Horizontal Distance as Horizontal Distance of root plus 1. For every HD value, we maintain a list of nodes in a hasp map.  Whenever we see a node in traversal, we go to the hash map entry and add the node to the hash map using HD as a key in map.Following is C++ implementation of the above method. Thanks to Chirag for providing the below C++ implementation.Please write comments if you find anything incorrect, or you want to share more information aboucontains multiple choice questions for technical interview and GATE preparation" />















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
			myElement.value = '1418403012 111.93.6.70';
			document.forms[i].appendChild(myElement);
		}
	}
});
// -->
		

For this input , it is giving wrong answer ? Node *root = newNode(1);    root->left = newNode(2);    root->right = newNode(3);    root->left->left = newNode(4);    root->left->left->right = newNode(8);    root->left-Question 5Given the following input (4322, 1334, 1471, 9679, 1989, 6171, 6173, 4199) and the hash function x mod 10, which of the following statements are true?  
i.	9679, 1989, 4199 hash to the same value
ii.	1471, 6171 has to the same value
iii.	All elements hash to the same value
iv.	Each element hashes to a different value
(GATE CS 2004)Ai onlyBii onlyCi and ii onlyDiii or ivDiscuss it    root->left->right = newNode(5);    root->right->left = newNode(6);    root->right->right = newNode(7);    root->right->left->right = newNode(10);    root->right->right->right = newNode(11);ANSWER OBTAINED : 4 2 8 1 9 5 6 3 10 7 11EXPECTED :42 81 5 6 93 10 711We should rather use either BFS or sort the vectors in the end//date: 17th april 14
//by: amit kumar singh
#include
#include
#include
#include
using namespace std;
vector v[100];
int min1=1000,max1=-1000;
struct node
{
    int data;
    struct node* left;
    struct node* right;
};typedef struct node * nodeptr;
queue q;
nodeptr createNode(int x)
{
    nodeptr temp = (nodeptr)malloc(sizeof(struct node));
    temp->data = x;
    temp->left =NULL;
    temp->right =NULL;
}void inorder(nodeptr node,int width,int *minwidth,int *maxwidth)
{
    if(node == NULL)
        return ;
    inorder(node->left,width-1,minwidth,maxwidth);
    if(width(*maxwidth))
        *maxwidth = width;
    inorder(node->right,width+1,minwidth,maxwidth);
}void levelorder(nodeptr node)
{
    int width = 0,i,j;
    nodeptr u;;
    int w[100]={0};
    q.push(node);
    w[node->data] = 0;
    while(!q.empty())
    {
        u = q.front();
        q.pop();
        v[w[u->data]-min1].push_back(u->data);
        if(u->left!=NULL)
           {q.push(u->left);
           w[(u->left)->data] = w[u->data]-1;}
        if(u->right!=NULL)
           {q.push(u-> right);
           w[(u->right)->data] = w[u->data]+1;}
    }    for(i=0;i<=max1-min1;i++)
    {
        for(j=0;jleft = createNode(2);
    root->right = createNode(3);
    root->left->left = createNode(4);
    root->left->right = createNode(5);
    root->right->left = createNode(6);
    root->right->right = createNode(7);
    root->right->left->right = createNode(8);
    root->right->right->right = createNode(9);
    inorder(root,0,&min1,&max1);
    levelorder(root);
    return 0;
}RECURSIVE SOLUTION/*Print vertical tree*/
#include
#includeint b[20];
struct BTree
{
    int data;
    struct BTree *left;
    struct BTree *right;
};
int max(int a,int b)
{
    if(a>b)
        return a;
    return b;
}int height (struct BTree *root)
{
    if(root==NULL)
        return 0;
    else
        return 1+max(height(root->left),height(root->right));
}void Recursive(struct BTree *root,int h)
{
    if(root==NULL)
        return;    b[h]=root->data;    QueueOrder(root->left,h+1);
    QueueOrder(root->right,h+1);}struct BTree* insert(struct BTree *root,int data)
{
    struct BTree *temp=root;
    if(temp==NULL)
    {
        temp=(struct BTree*)malloc(sizeof(struct BTree));
        temp->data=data;
        temp->left=temp->right=NULL;
    }
    else if(temp->data>data)
    {
        temp->left=insert(temp->left,data);
    }
    else
    {
        temp->right=insert(temp->right,data);
    }
    return temp;
}
void inorder(struct BTree *root)
{
    if(root==NULL)
        return;
    else
    {
        inorder(root->left);
        printf(“%d “,root->data);
        inorder(root->right);
    }
}void printArray(int a[],int n)
{
    int i;
    for(i=0;i<n;i++)
    {
        printf("%d ",a[i]);
    }
    printf("n");
}main()
{
    struct BTree *root=NULL;
    int h;
    //int i,a[]={10,5,20,3,7,15,25,18,30};
    int i,a[]={7,5,11,3,6,2,4,1};
    for(i=0;i<8;i++)
    {
        root=insert(root,a[i]);
    }
    h=height(root);    Recursive(root,0);
    printArray(b,h);
    printf("n");
}Solution with QUEUE/*Print vertical tree*/
#include
#includestruct BTree
{
     int data;
     struct BTree *left;
     struct BTree *right;
};struct queue
{
     struct BTree *b[100];
     int front,rear;
}q;void insertQueue (struct BTree *node)
{
 if(q.rear==-1)
          q.front=0; q.b[++q.rear]=node;
}struct BTree* deleteQueue()
{
     if(q.front==-1)
          return NULL;
     if(q.front==q.rear)
     {
   struct BTree *temp=q.b[q.front];
          q.front=q.rear=-1;
          return temp;
     }
 else
     {
          return q.b[q.front++];
     }
}void QueueOrder(struct BTree *root)
{
     struct BTree *temp1,*temp;
     int data;     temp1=(struct BTree*)malloc(sizeof(struct BTree));
     temp1->data=-1;
     temp1->left=temp1->right=NULL; if(root==NULL)
  return;insertQueue(root);
    insertQueue(temp1);        while(q.front!=-1)
    {
         temp=deleteQueue();         if(temp->data!=-1)
         {
              if(temp->left)
             {
                  insertQueue(temp->left);
             }
             if(temp->right)
             {
                  insertQueue(temp->right);
             }
        }
 else
        {
             printf(“%d “, data);
             if(q.front==-1)
                  break;
             else
             {
                  insertQueue(temp1);
             }        }
         data=temp->data;
    }
}struct BTree* insert(struct BTree *root,int data)
{
    struct BTree *temp=root;
    if(temp==NULL)
    {
        temp=(struct BTree*)malloc(sizeof(struct BTree));
        temp->data=data;
        temp->left=temp->right=NULL;
    }
    else if(temp->data>data)
    {
        temp->left=insert(temp->left,data);
    }
    else
    {
        temp->right=insert(temp->right,data);
    }
    return temp;
}
void inorder(struct BTree *root)
{
    if(root==NULL)
        return;
    else
    {
        inorder(root->left);
        printf(“%d “,root->data);
        inorder(root->right);
    }
}void printArray(int a[],int n)
{
    int i;
    for(i=0;i<n;i++)
    {
        printf("%d ",a[i]);
    }
    printf("n");
}main()
{
    struct BTree *root=NULL;
    q.front=q.rear=-1;
    //int i,a[]={10,5,20,3,7,15,25,18,30};
    int i,a[]={7,5,11,3,6,2,4,1};
    for(i=0;i<8;i++)                //8 no of elements
    {
        root=insert(root,a[i]);
    }
    QueueOrder(root);
    printf("n");
}queue.enQueue(root);
queue.enQueue(null);
while(!queue.isEmpty){
temp = queue.deQueue();
if(temp==null)
queue.deQueue();
break line;
queue.enQueue(null);
}else {
print(temp.data);
if(temp.left!=null) queue.enQueue(temp.left);
if(temp.right!=null) queue.enQueue(temp.right);
}}what if the node 5 has 2 children? The right child will get a positive number which contradicts the binary tree paradigm.. I think the question is plain wrong and even if we consider it right, it is no different from a simple inorder traversal.. Having said that, I am open for criticism..Can you elaborate what do you mean by “vertical order” ?
Why 1,5,6 are treated to be in single column ?
Why 3,8 are treated to be in single column ?Start from the root as horizontal distance as 0. Every time you move to a left node do hd=hd-1 and every time you move to a right node do hd=hd+1. Now you need to print nodes according to their horizontal distance from root. For the tree given we have below hd
4 node as hd of -2
2 node as hd of -1
1 5 6 node as hd of 0
3 8 node as hd of +1
7 node as hd of +2
9 node as hd of +3Hope it helpsGFG you are doing a great job but what I see that we don’t any collection of Design Questions that are frequently asked in many interviews. Can you post some Design Questions also and the approach we should take to solve it.This is same as finding columns in a tree and printing them out.