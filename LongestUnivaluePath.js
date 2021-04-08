// Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root.

// The length of the path between two nodes is represented by the number of edges between them.

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

const TreeNode = (val, left, right) => {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const findLongestUniPath = (root) => {
    let currentCount = 0;
    let maxCount = 0;
    let q = [root];
    while(q.length) {
        let node = q.shift();
        console.log(node)
        if(node.left) {
            q.push(node.left);
        }
    }
}