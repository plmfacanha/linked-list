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
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }
}

const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(11);
linkedList.append(12);
linkedList.append(13);

console.log("The head is: ", linkedList.head);
console.log("The tail is: ", linkedList.tail);
