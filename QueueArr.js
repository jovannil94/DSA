//Functions within a Queue using an array

//All functions are O(1)

//Enqueue inserts a value into the end of the queue
//ex: ["a", "b"] <--- "c"
//ex: ["a", "b", "c"]
// enqueue(value) {
//  this.arr.push(value);
// }

//Dequeue removes the value in the front of the queue
//ex : ["a", "b", "c"] ---> "a"
//ex : ["b", "c"]
// dequeue() {
//  return this.arr.shift();
// }

//Peek returns the first value of the queue without removing it 
//ex: ["a", "b", "c"] peek() = "a"
// peek() {
//     const firstIndex = 0;
//     return this.arr[firstIndex];
// }

//isEmpty checks if the queue is empty 
//ex: returns boolean
// isEmpty() {
//     return this.arr.length === 0;
// }

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

let q = new Queue();
q.enqueue("1");
q.enqueue("2");
q.enqueue("3");
q.dequeue();
console.log(q.peek());
console.log(q.isEmpty());
console.log(q)