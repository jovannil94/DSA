// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
// Two binary trees are considered leaf-similar if their leaf value sequence is the same.
// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

let a = new TreeNode("a");
let b = new TreeNode("b");
let c = new TreeNode("c");
let d = new TreeNode("d");
let e = new TreeNode("e");
let f = new TreeNode("f");
let g = new TreeNode("g");
let h = new TreeNode("h");
let i = new TreeNode("i");
let j = new TreeNode("j");
let k = new TreeNode("k");

a.left = b;
a.right = g;

b.left = c;
b.right = f;

c.left = d;
c.right = e;

g.left = h;
g.right = k;

h.left = i;
h.right = j;

const leafSimilar = (root1, root2) => {

}

const leafNodes = (root) => {
    if(!root) return;

    leafNodes(root.left);
    leafNodes(root.right);
    if(!root.left && !root.right) {
        console.log(root.value)
    }
}

leafNodes(a)