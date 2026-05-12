import Node from "./Node.js";

class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
  }
}

const linkedList = new LinkedList();

linkedList.append(10);

console.log(linkedList.head);
