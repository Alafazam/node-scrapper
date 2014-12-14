To delete a tree we must traverse all the nodes of the tree and delete them one by one.  So which traversal we should use – Inorder or Preorder or Postorder.  Answer is simple – Postorder, because before deleting the parent node we should delete its children nodes firstWe can delete tree with other traversals also with extra space complexity but why should we go for other traversals if we have Postorder available which does the work without storing anything in same time complexity.For the following tree nodes are deleted in order – 4, 5, 2, 3, 1Example TreeProgramThe above deleteTree() function deletes the tree, but doesn’t change root to NULL which may cause problems if the user of deleteTree() doesn’t change root to NULL and tires to access values using root pointer.  We can modify the deleteTree() function to take reference to the root node so that this problem doesn’t occur.  See the following code. Time Complexity:  O(n)
Space Complexity:  If we don’t consider size of stack for function calls then O(1)  otherwise O(n)Tags: Delete Tree, Tree Traveral, Trees