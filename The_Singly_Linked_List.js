/*
  Definition:
    A Singly Linked List is a linear collection of data elements, called nodes pointing to the next node by means of pointer. It is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) to the next node in the sequence.

  Note: Linked Lists are among the simplest and most common data structures because it allows for efficient insertion or removal of elements from any position in the sequence.

  Complexity:
    Average
    Access  Search  Insertion Deletion
     O(n)    O(n)      O(1)     O(1)
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}

SinglyLinkedList.prototype.add = function(data) {
  var node = new Node(data);

  // 1st node, add to 'head' and 'tail'
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    // point prev 'tail's next to new node, and tail to new node
    this.tail.next = node;
    this.tail = node;
  }

  this.numberOfValues++;
};

SinglyLinkedList.prototype.remove = function(data) {
  var previous = this.head;
  var current = this.head;

  while (current) {
    // data is found
    if (current.data === data) {
      
      // if this is a 'head', make new 'head' point to next
      if (current === this.head) {
        this.head = this.head.next;
      }

      // if this is a 'tail', make new tail point to the previous node
      if (current === this.tail) {
        this.tail = previous;
      }

      // connect list and keep searching
      previous.next = current.next;
      this.numberOfValues--;
    } else {
      // data not found
      previous = current;
    }

    // search next node
    current = current.next;
  }
};

SinglyLinkedList.prototype.insertAfter = function(data, toNodeData) {
  var current = this.head;

  while (current) {

    if (current.data === toNodeData) {
      var node = new Node(data);

      if (current === this.tail) {
        this.tail.next = node;
        this.tail = node;
      } else {
        node.next = current.next;
        current.next = node;
      }

      this.numberOfValues++;
    }

    current = current.next;
  }
};

SinglyLinkedList.prototype.traverse = function(fn) {
  var current = this.head;

  while (current) {

    if (fn) {
      fn(current);
    }

    current = current.next;
  }
};

SinglyLinkedList.prototype.length = function() {
  return this.numberOfValues;
};

SinglyLinkedList.prototype.print = function() {
  var string = '';
  var current = this.head;

  while (current) {
    string += current.data + ' ';
    current = current.next;
  }

  console.log(string.trim());
};

var singlyLinkedList = new SinglyLinkedList();
