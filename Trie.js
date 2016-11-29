/*
  Definition:
    A trie, also called digital tree and sometimes radix tree or prefix tree (as they can be searched by prefixes), is an ordered tree data structure that is used to store a dynamic set or associative array where the keys are usually strings. Unlike a binary search tree, no node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated. All the descendants of a node have a common prefix of the string associated with that node, and the root is associated with the empty string. Values are not necessarily associated with every node. Rather, values tend only to be associated with leaves, and with some inner nodes that correspond to keys of interest.

  Complexity:
    Average      
    Access  Search  Insertion Deletion
     O(k)    O(k)      O(k)     O(k)
    
    * where k is the word length.
*/

function Node(data) {
  this.data = data;
  this.isWord = false;
  this.prefixes = 0;
  this.children = {};
}

function Trie() {
  this.root = new Node('');
}

Trie.prototype.add = function(word) {
  if (!this.root) {
    return null;
  }
  this._addNode(this.root, word);
};

Trie.prototype._addNode = function(node, word) {
  if (!node || !word) {
    return null;
  }

  node.prefixes++;
  var letter = word.charAt(0);
  var child = node.children[letter];

  // if letter doesnt exist as a child
  if(!child) {
    child = new Node(letter);
    node.children[letter] = child;
  }

  var remainder = word.substring(1);
  // if this is end of the word, set 'isWord' to true
  if(!remainder) {
    child.isWord = true;
  }

  // recurse until all letters have been set
  this._addNode(child, remainder);
};
