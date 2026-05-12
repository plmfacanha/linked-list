import Node from "./Node.js";

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
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
    if (this._head === null) {
      return;
    }

    return this._head.value;
  }

  tail() {
    if (this._tail === null) {
      return;
    }

    return this._tail.value;
  }

  at(index) {
    let count = 0;
    let temp = this._head;

    while (temp !== null) {
      if (count === index) return temp.value;

      ++count;
      temp = temp.nextNode;
    }

    return;
  }

  pop() {
    if (this._head === null) {
      return;
    }

    let popValue = this._head.value;
    this._head = this._head.nextNode;

    if (this._head === null) {
      this._tail = null;
    }

    return popValue;
  }

  contains(value) {
    let temp = this._head;

    while (temp !== null) {
      if (temp.value === value) return true;

      temp = temp.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let i = 0;
    let temp = this._head;

    while (temp !== null) {
      if (temp.value === value) return i;

      ++i;
      temp = temp.nextNode;
    }

    return -1;
  }

  toString() {
    let str = "";
    let temp = this._head;

    if (temp === null) {
      return "";
    }

    while (temp !== null) {
      str += `(${temp.value}) -> `;

      temp = temp.nextNode;
    }

    str += " null";

    return str;
  }
}

const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(11);
linkedList.append(12);
linkedList.prepend(40);
linkedList.prepend(50);

// console.log("The total elements in the list is: ", linkedList.size());
console.log("The node value popped is: ", linkedList.pop());
// console.log("The head value is: ", linkedList.head());
// console.log("The tail value is: ", linkedList.tail());
// console.log("The list contains? ", linkedList.contains(11));
// console.log("The list contains? ", linkedList.contains(50));
// console.log("The list contains? ", linkedList.contains(40));
// console.log("The index for the value is: ", linkedList.findIndex(12));
// console.log("The index for the value is: ", linkedList.findIndex(100));
console.log("The list is: ", linkedList.toString());
