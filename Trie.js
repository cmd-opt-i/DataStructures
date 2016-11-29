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
  if (!child) {
    child = new Node(letter);
    node.children[letter] = child;
  }

  var remainder = word.substring(1);
  // if this is end of the word, set 'isWord' to true
  if (!remainder) {
    child.isWord = true;
  }

  // recurse until all letters have been set
  this._addNode(child, remainder);
};

Trie.prototype.remove = function(word) {
  if (!this.root) {
    return;
  }

  if (this.contains(word)) {
    this._removeNode(this.root, word);
  }
};

Trie.prototype._removeNode = function(node, word) {
  if (!node || !word) {
    return;
  }

  node.prefixes--;
  var letter = word.charAt(0);
  var child = node.children[letter];

  if (child) {
    var remainder = word.substring(1);

    if (remainder) {
      if(child.prefixes === 1) {
        delete node.children[letter];
      } else {
        this._removeNode(child, remainder);
      }
    } else {
      if(child.prefixes === 0) {
        delete node.children[letter];
      } else {
        child.isWord = false;
      }
    }
  }
};

Trie.prototype.contains = function(word) {
  if (!this.root) {
    return false;
  }
  return this._contains(this.root, word);
};

Trie.prototype._contains = function(node, word) {
  if (!node || !word) {
    return false;
  }

  var letter = word.charAt(0);
  var child = node.children[letter];
  
  if (child) {
    var remainder = word.substring(1);

    // if no more letters in 'word' and flag 'isWord' is true, then this is a word
    if (!remainder && child.isWord) {
      return true;
    } else {
      return this._contains(child, remainder);
    }
  } else {
    return false;
  }
};

Trie.prototype.countWords = function() {
  if (!this.root) {
    return console.log('No root node found');
  }

  var queue = [this.root];
  var counter = 0;

  while (queue.length) {
    var node = queue.shift();

    if (node.isWord) {
      counter++;
    }

    for (var child in node.children) {
      if (node.children.hasOwnProperty(child)) {
        queue.push(node.children[child]);
      }
    }
  }

  return counter;
};

Trie.prototype.getWords = function() {
  var words = [];
  var word = '';
  this._getWords(this.root, words, word);
  return words;
};

Trie.prototype._getWords = function(node, words, word) {
  for (var child in node.children) {
    if (node.children.hasOwnProperty(child)) {
      word += child;

      if (node.children[child].isWord) {
        words.push(word);
      }

      this._getWords(node.children[child], words, word);
      word = word.substring(0, word.length - 1);
    }
  }
};

Trie.prototype.print = function() {
  if (!this.root) {
    return console.log('No root node found');
  }

  var newline = new Node('|');
  var queue = [this.root, newline];
  var string = '';
  
  while (queue.length) {
    var node = queue.shift();
    string += node.data.toString() + ' ';

    if (node === newline && queue.length) {
      queue.push(newline);
    }

    for (var child in node.children) {
      if (node.children.hasOwnProperty(child)) {
        queue.push(node.children[child]);
      }
    }
  }

  console.log(string.slice(0, -2).trim());
};

Trie.prototype.printByLevel = function() {
  if (!this.root) {
    return console.log('No root node found');
  }

  var newline = new Node('\n');
  var queue = [this.root, newline];
  var string = '';
  
  while (queue.length) {
    var node = queue.shift();
    string += node.data.toString() + (node.data !== '\n' ? ' ' : '');

    if (node === newline && queue.length) {
      queue.push(newline);
    }

    for (var child in node.children) {
      if (node.children.hasOwnProperty(child)) {
        queue.push(node.children[child]);
      }
    }
  }

  console.log(string.trim());
};
