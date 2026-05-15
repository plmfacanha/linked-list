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
    let currentIndex = 0;
    let temp = this._head;

    while (temp !== null) {
      if (currentIndex === index) return temp.value;

      ++currentIndex;
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

  getNodeAt(index) {
    let currentIndex = 0;
    let temp = this._head;

    while (temp !== null) {
      if (index === currentIndex) {
        return temp;
      }
      temp = temp.nextNode;
    }

    return;
  }

  insertAt(index, ...values) {
    if (index < 0 || index >= this.size()) {
      throw new RangeError("Out of bounds");
    }

    const maxLength = this.size() - 1;
    let temp = this._head.nextNode;
    let currentIndex = 1;

    values.toReversed().map((value) => {
      if (index === 0) {
        this.prepend(value);
      } else if (index === maxLength) {
        this.append(value);
      } else {
        const newNode = new Node(value);

        while (temp !== null) {
          if (index === currentIndex) {
            const prevNode = this.getNodeAt(index - 1);
            const currentNode = this.getNodeAt(index);

            newNode.nextNode = currentNode;
            prevNode.nextNode = newNode;
          }

          temp = temp.nextNode;
        }
      }
    });
  }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

list.insertAt(1, 10, 11);
console.log(list.toString());
