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

let l = new TreeNode("a");
let m = new TreeNode("b");
let n = new TreeNode("c");
let o = new TreeNode("d");
let p = new TreeNode("e");
let q = new TreeNode("f");
let r = new TreeNode("g");
let s = new TreeNode("h");
let t = new TreeNode("i");
let u = new TreeNode("j");
let v = new TreeNode("k");

l.left = m;
l.right = r;

m.left = n;
m.right = q;

n.left = o;
n.right = p;

r.left = s;
r.right = v;

s.left = t;
s.right = u;

const leafSimilar = (root1, root2) => {
    const leafNodes = (root, arr) => {
        if(!root) return arr;

        if(!root.left && !root.right) {
            arr.push(root.value)
        }
        leafNodes(root.left, arr);
        leafNodes(root.right, arr);
        //forgot to add the arr back into the recursion for more manipulation
    }
    let arr1 = [];
    let arr2 = [];
    let result = true;
    leafNodes(root1, arr1);
    leafNodes(root2, arr2);
    for(let i = 0; i < arr1.length; i ++) {
        if(arr1[i] !== arr2[i]){
            result = false;
        }
    }
    return result
}



console.log(leafSimilar(a, l))