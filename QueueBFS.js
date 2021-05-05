//BFS using queue

//Queue and functions
class Queue {
    constructor() {
      this.arr = [];
    }
    enqueue(value) {
      this.arr.push(value);
    }
    dequeue() {
      return this.arr.shift();
    }
    peek() {
      const firstIndex = 0;
      return this.arr[firstIndex];
    }
    isEmpty() {
      return this.arr.length === 0;
    }
}

//Creating nodes for tree
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

//Create tree
let a = new TreeNode("A");
let b = new TreeNode("B");
let c = new TreeNode("C");
let d = new TreeNode("D");
let e = new TreeNode("E");
let f = new TreeNode("F");
let g = new TreeNode("G");
let h = new TreeNode("H");
let i = new TreeNode("I");
let j = new TreeNode("J");
let k = new TreeNode("K");

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

//BFS using standard array methods

const BFS = (root) => {
    //must start from root
    let q = [root];
    while(q.length) {
        //removes first value in queue
        let node = q.shift();
        console.log(node.value);
        if(node.left) {
            q.push(node.left);
        }
        if(node.right) {
            q.push(node.right);
        }
    }
}

//BFS using queue implementations
const qBFS = (root) => {
  let q = new Queue();
  q.enqueue(root);
  while(!q.isEmpty()) {
    let node = q.dequeue();
    console.log(node.value);
    if(node.left) {
      q.enqueue(node.left);
    }
    if(node.right) {
      q.enqueue(node.right);
    }
  }
  console.log(q)
}


// BFS(a);
qBFS(a);