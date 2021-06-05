/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      let previousHead = this.head;
      this.head = newNode;
      this.head.next = previousHead;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.tail) throw "List is empty.";
    let oldTail = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return oldTail.val;
    } else {
      let currentNode = this.head;
      let counter = 0;
      while (counter <= this.length) {
        if (currentNode.next == oldTail) {
          currentNode.next = null;
          this.tail = currentNode;
          this.length -= 1;
          return oldTail.val;
        }
        counter += 1;
        currentNode = currentNode.next;
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) throw "List is empty.";
    let oldHead = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return oldHead.val;
    } else {
      let newHead = this.head.next;
      this.head = newHead;
      this.length -= 1;
      return oldHead.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (!this.head) throw "List is empty.";
    if (idx == 1 && idx == this.length) {
      return this.head.val;
    }
    if (idx > this.length - 1) {
      throw new Error("Invalid index.");
    }
    let currentNode = this.head;
    let counter = 0;
    while (counter <= this.length) {
      if (counter == idx) {
        return currentNode.val;
      }
      counter += 1;
      currentNode = currentNode.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (!this.head) throw "List is empty.";
    if (idx == 0 && this.length == 1) {
      this.head.val = val;
      return;
    }
    if (idx > this.length - 1) {
      throw new Error("Invalid index.");
    }
    let currentNode = this.head;
    let counter = 0;
    while (counter <= this.length) {
      if (counter == idx) {
        currentNode.val = val;
        return;
      }
      counter += 1;
      currentNode = currentNode.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let currentNode = this.head;
    let previousNode;
    let counter = 0;
    if (this.length != 0 && idx > this.length) {
      throw new Error("Invalid index.");
    }
    while (counter <= this.length) {
      if (counter == idx) {
        if (idx == 0) {
          this.unshift(val);
          return;
        } else if (idx == this.length) {
          this.push(val);
          return;
        } else {
          let newNode = new Node(val);
          previousNode.next = newNode;
          newNode.next = currentNode;
          this.length += 1;
          return;
        }
      }
      counter += 1;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  // [0,1,2] => removeAt(1)
  // >>> [0,2]

  removeAt(idx) {
    if (idx == 0) {
      this.shift();
      return;
    } else if (idx == this.length - 1) {
      this.pop();
      return;
    }
    if (idx >= this.length) {
      throw new Error("Invalid index.");
    }
    let currentNode = this.head;
    let previousNode;
    let counter = 0;
    while (counter < this.length) {
      if (counter == idx) {
        previousNode.next = currentNode.next;
        this.length -= 1;
        return;
      }
      counter += 1;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0;
    let currentNode = this.head;
    let counter = 0;
    if (this.length == 0) return 0;
    while (counter < this.length) {
      total += currentNode.val;

      counter += 1;
      currentNode = currentNode.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
