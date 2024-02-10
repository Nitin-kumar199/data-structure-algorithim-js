/// classes

class Cookie {
  constructor(color) {
    this.color = color;
  }
  //getter
  getColor() {
    return this.color;
  }
  //setter
  setColor(color) {
    this.color = color;
  }
}

let cookieOne = new Cookie("green");

let cookieTwo = new Cookie("blue");
//console.log(cookieOne.getColor());
//console.log(cookieTwo.getColor());
cookieOne.setColor("Yellow");
cookieTwo.setColor("red");
//console.log(cookieOne.getColor());
//console.log(cookieTwo.getColor());

//linkedList

// class LinkedList {
//   constructor(value) {}
//   push(value) {}
//   unshift(value) {}
//   insert(index, value) {}
//   remove(index) {}
//   pop() {}
//   shift() {}
// }
// let myLinkedList = new LinkedList(23);
// myLinkedList.push(7);
// myLinkedList.unshift(3);
// myLinkedList.insert(1, 3);
// myLinkedList.remove(1);
// myLinkedList.pop();
// myLinkedList.shift();

// pointers
//this example when not using pointers
// let num1 = 5;
// let num2 = num1;
//console.log(num1, " ", num2);
// num1 = 10;
//console.log(num1, " ", num2);
//this example with pointers

// let obj1 = {
//   value: 11,
// };
// let obj2 = obj1;

//console.log(obj1);
//console.log(obj2);
// obj1.value = 22;
//console.log(obj1);
//console.log(obj2);

//linked list
//linked list had Head and tail and the tail points to the null value
//push O(1)
//pop O(n)
//shift O(1)
//Unshift O(1)
//Insert O(n)
//Delete O(n)
//lookup by Index O(n)
// lookup by Value O(n)

//***Arrays */
// push O(1)
// pop O(1)
// shift O(n)
// Unshift O(n)
// Insert O(n)
// Delete O(n)
// lookup by Index O(1)
// lookup by value O(n)

//constructor
// class LinkedList {
//   //constructor create new Node
//   constructor(value) {}
//   //push create new Node add Node to end
//   push(value) {}
//   //unshift create new Node add Node to beginning
//   unshift(value) {}
//   //insert create new Node insert Node
//   insert(index, value) {}
// }

// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

// const newNode = new Node(4)
// class LinkedList{
//   constructor(value){
//     const newNode = new Node(value)
//     this.head = value;
//     this.tail = value;
//     this.length = 1;
//   }
// }
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// {
//   value = 4
//   next = null
// }
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  //adding value at the last
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //removing value at the end
  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  //adding value at the first
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  //removing value at the first
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  //getting value by index
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  //set the value at the index
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  //adding between the indexes
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;
    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    const before = this.get(index - 1);
    const temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}
let myLinkedLists = new LinkedList(10);
// console.log(myLinkedLists);
myLinkedLists.push(20);
myLinkedLists.push(30);
myLinkedLists.push(40);
// console.log(myLinkedLists);
// myLinkedLists.pop();
// console.log(myLinkedLists);
// myLinkedLists.pop();
// console.log(myLinkedLists);
// myLinkedLists.push(3);
// myLinkedLists.push(23);
// myLinkedLists.push(7);
// myLinkedLists.unshift(9);
// myLinkedLists.push(1);
// myLinkedLists.shift();
// myLinkedLists.shift();
// console.log(myLinkedLists.get(2));
// console.log(myLinkedLists);
// console.log(myLinkedLists.set(1, 100));
// console.log(myLinkedLists.get(1));
// console.log(myLinkedLists.remove(1));
// console.log(myLinkedLists);

console.log(myLinkedLists.reverse());
