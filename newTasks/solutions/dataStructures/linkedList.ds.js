class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  getTail() {
    let nextNode = this.head;
    let currentNode = this.head;
    while (nextNode.next) {
      nextNode = nextNode.next;
      currentNode = nextNode;
    }
    return currentNode;
  }

  add(node) {
    const tailNode = this.getTail();
    tailNode.next = node;
  }
  
  print() {
    let nextNode = this.head;
      while (nextNode.next && nextNode.next.value !== value) {
        nextNode = nextNode.next;
      }
    nextNode.next = nextNode.next.next;
  }

  remove(value) {
    let nextNode = this.head;
    while (nextNode.next && nextNode.next.value !== value) {
      nextNode = nextNode.next;
    }
    nextNode.next = nextNode.next.next;
  }
}

const list = new LinkedList(new Node("John"));
list.add(new Node("Jake"));
list.add(new Node("Jane"));
list.add(new Node("Saqo"));
list.add(new Node("Vardan"));
console.log(list)
list.remove("Jane");
console.log(list)

// console.log(list);
// list.add(1);
// list.add(2);
// list.add(3);
// const result1 = list.get(1); // Ожидаемый результат: 2
// list.remove(2);
// const result2 = list.get(2); // Ожидаемый результат: undefined
