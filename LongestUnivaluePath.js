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

//           (A=1)
//      (B=1)     (G=4)
//   (C=1)  (F=3) (H=6) (K=10)
// (D=2)(E=2)  (I=10)(J=11)

// const TreeNode = (val, left, right) => {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
// }

// const findLongestUniPath = (root) => {
//     let longestCount = 0;
//     let currentCount = 0;
//     let path = [];
//     if (!root) return;

//     if(root.value === root.left.value) {
//         if(currentCount > longestCount) {
//             longestCount = currentCount;
//         }
//         currentCount ++;
//         path.push(root.value);
//         findLongestUniPath(root.left);
//     }

//     if(root.value === root.right.value) {
//         if(currentCount > longestCount) {
//             longestCount = currentCount;
//         }
//         currentCount ++;
//         path.push(root.value);
//         findLongestUniPath(root.right);
//     }
//     return [longestCount, path]
// }

// console.log(findLongestUniPath(a))

const findLongestUniPath = (root) => {
    return dfs(root);
    //helper function
    //returns number of edges between nodes that have same value and have child/parent relations
}

const dfs = (root) => {
    if(root === null) return 0;
    let leftPathCount = dfs(root.left);
    let rightPathCount = dfs(root.right);
    //goes down left and right from root to cover binary tree
    //checks will have the longest path of left or right, holding memory
    if(root.left !== null && root.value === root.left.value) {
        leftPathCount += 1;
    }
    if(root.right !== null && root.value === root.right.value) {
        rightPathCount += 1;
    }
    //checks if child exist and if its value is the same as parents, recalls function (recursion) and adds 1 indicating path has two nodes with the same valuess
    //if not the same, function continues without altering checks
    return Math.max(leftPathCount, rightPathCount);
    //both checks are filled and using max to find which is greater and then is assigned to count which is returned
}

console.log(findLongestUniPath(a));
//returns the length of the path not the number of nodes ex: two nodes is 1 edge