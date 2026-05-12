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

  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    let count = 0;
    let temp = this.head;

    while (temp !== null) {
      ++count;
      temp = temp.nextNode;
    }

    return count;
  }
}

const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(11);
linkedList.append(12);
linkedList.append(13);
linkedList.prepend(40);
linkedList.prepend(50);
console.log("The total elements in the list is: ", linkedList.size());

console.log("The head is: ", linkedList.head);
console.log("The tail is: ", linkedList.tail);
