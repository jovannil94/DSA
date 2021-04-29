// DFS Depth First Search

//DFS will search through a tree by viewing the first child of a given node, starting from the left until it cannot traverse any further


//         (A)
//      (B)     (G)
//   (C)  (F) (H) (K)
// (D)(E)    (I)(J)


//In-Order will print the tree reading left to right, starting from the bottom left node, work up to the parent and down to the right child, back up to the next parent until root, then come travese the right children of root in the same order.
//Result = (Left Child Left Up) D, C, E, B, F, (Root) A, (Right Child Left Up) I, H, J, G, K

const inOrderPrint = (root) => {
    if (!root) return;
    
    inOrderPrint(root.left)
    console.log(root.value)
    inOrderPrint(root.right)
}

//Pre-order will print the tree starting from root, working down the left children, until the end, print children to the right then move on to the children right of the root and repeat the same process.
//Result = (Root) A, (Left Down) B, C, D, E, F, (Right Down) G, H, I, J, K

const preOrderPrint = (root) => {
    if (!root) return;

    console.log(root.value);
    preOrderPrint(root.left);
    preOrderPrint(root.right);
}

//Post-order will print the tree starting from bottom left node, work up the parent, down to the next child, up parent until root, not print root, then go down the right child, traversing left to right, finally printing parent.
//Result = (Left Up) D, E, C, F, B, (Right Up) I, J, H, K, G, (Root) A

const postOrderPrint = (root) => {
    if (!root) return;

    postOrderPrint(root.left);
    postOrderPrint(root.right);
    console.log(root.value);
}