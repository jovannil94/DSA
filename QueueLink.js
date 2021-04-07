//Functions within a Queue using a Linked List

//Push inserts a value at the start of the Linked List
//ex: "a-->b-->c" insert "1"
//ex: "1-->a-->b-->c" 1 becomes the new head, previous head becomes .next, also previous head becomes tail if none exist, then add length
// push(value) {
//     let newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     if (!this.tail) {
//       this.tail = newNode;
//     }
//     this.length++; 
// }

//Append inserts a value at the end of the Linked List
//ex: "a-->b-->c" insert "1"
//ex: "a-->b-->c-->1" check if list has a head (value becomes head if not), assign tail.next to value, now the value becomes the tail, add length
// append(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//       return;
//     }
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
// }

//Print displays the link list in a way that humans can read with structure
//ex : "1 -> 2 -> 3" A string that assigns a pointer to the head adding to the string, if pointer.next isn't null continues through the list adding to the string until pointer.next is null logs string
// print() { 
//     let display = "";
//     let pointer = this.head;
//     while(pointer !== null) {
//       display += pointer.value 
//       if (pointer.next !== null) {
//         display += " -> ";
//       }
//       pointer = pointer.next;
//     }
//     console.log(display);    
// }

//Get will return value of a node at a certain index indicated, otherwise undefined
//ex: "1 -> 2 -> 3" get(2)
//ex: "3" counter starts at index 0, meanwhile the counter is greater than the index we traverse through the list until equal, return value when counter = index
// get(index) {
//     let counter = 0;
//     let pointer = this.head;
//       if (index > this.length - 1) return
//       while (counter < index) {
//         pointer = pointer.next;
//         counter++;
//       }
//     return pointer.value;
// }

//Pop removes last node from Linked List
//ex: "1 -> 2 -> 3" pop()
//ex: "1 -> 2" iterates through list until .next.next doesn't exist, removes .next and assigns a new tail, deletedTail is then returned
// pop() {
//   const deletedTail = this.tail;
//   if (this.head === this.tail) {
//     this.head = null;
//     this.tail = null;
//     this.length--;
//     return deletedTail.value;
//   }
//   let currentNode = this.head;
//   while (currentNode.next) {
//     if (!currentNode.next.next) {
//       currentNode.next = null;
//     } else {
//       currentNode = currentNode.next;
//     }
//   }
//   this.tail = currentNode;
//   this.length--;
//   return deletedTail.value;
// }

//Creating a Queue using a LinkedList
//Creating Nodes
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Creating LinkedList
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Enqueue a Queue
  //Must append a LinkedList to act as a enqueue
  enqueue(value){
    let newNode = new Node(value);
    
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    const firstOut = this.head;

    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return console.log("Dequeued = " + firstOut.value.value);;
    }

    this.head = this.head.next;
    this.length--;
    return console.log("Dequeued = " + firstOut.value.value);
  }

  print() {
    let display = "";
    let pointer = this.head;
  
    while(pointer !== null) {
      //needed a double value because value is the name of the key and needed to print actual value of said key
      display += pointer.value.value 
      if (pointer.next !== null) {
        display += " -> ";
      }
      pointer = pointer.next;
    }
    if(display === "") {
      console.log("Linkedlist is empty");
    } else {
      console.log(display);
    }
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

let q = new LinkedList();
q.enqueue(node1);
// q.enqueue(node2);
// q.enqueue(node3);
q.dequeue();
q.print();