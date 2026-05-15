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

  insertAt(...values) {
    return values;
  }
}

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

// console.log(list.insertAt(10, 12, 13));
