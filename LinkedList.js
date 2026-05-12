import Node from "./Node.js";

class LinkedList {
  constructor(head = null, tail = null) {
    this._head = head;
    this._tail = tail;
  }

  append(value) {
    const newNode = new Node(value);

    if (this._head === null) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail.nextNode = newNode;
      this._tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this._head === null) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      newNode.nextNode = this._head;
      this._head = newNode;
    }
  }

  size() {
    let count = 0;
    let temp = this._head;

    while (temp !== null) {
      ++count;
      temp = temp.nextNode;
    }

    return count;
  }

  head() {
    if (this._he_headd === null) {
      return;
    }

    return this._head.value;
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
console.log("The head value is: ", linkedList.head());
