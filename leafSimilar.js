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

let a = new TreeNode("1");
let b = new TreeNode("1");
let c = new TreeNode("1");
let d = new TreeNode("2");
let e = new TreeNode("2");
let f = new TreeNode("3");
let g = new TreeNode("4");
let h = new TreeNode("6");
let i = new TreeNode("10");
let j = new TreeNode("11");
let k = new TreeNode("10");

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
