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
        //checks if root exist, works as basecase and return array when tree has been traversed

        if(!root.left && !root.right) {
            arr.push(root.value)
            //pushes arr with all leaves of tree
        }
        leafNodes(root.left, arr);
        leafNodes(root.right, arr);
        //recalls function with children of root to find every leaf and holds in memory the current state of the array
        //forgot to add the arr back into the recursion for more manipulation
    }
    let arr1 = [];
    let arr2 = [];
    //arrays must exist to be manipulated within the function
    leafNodes(root1, arr1);
    leafNodes(root2, arr2);
    //calls both roots in helper function with corresponding arrays
    for(let i = 0; i < arr1.length; i ++) {
        if(arr1[i] !== arr2[i]){
            //iterates through the array checking each index to see if it matches with the corresponding index of the second array, if it doesn't result is changed to false
            return false;
        }
    }
    return true
}



console.log(leafSimilar(a, l))