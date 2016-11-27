/*
  Definition:
    A Hash Table (Hash Map) is a data structure used to implement an associative array, a structure that can map keys to values. A Hash Table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
    
    Note: Considered the more efficient data structure for lookup.

  Complexity:
    Average      
    Access  Search  Insertion Deletion
      -      O(1)      O(1)     O(1)
*/

var HashTable = function(size) {
  this.storage = [];
  this.storageLimit = size;
}

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this.storageLimit);

  // create a new bucket
  if (this.storage[index] === undefined) {
    this.storage[index] = [[key, value]];
  } else {
    var inserted = false;

    // checks all tuples inside of this bucket for that 'key'
    // Ex: storage[[key, value], [key, value], [key, value]];
    for (var i = 0; i < this.storage[index].length; i++) {
      // overwrite key and turn on flag
      if (this.storage[index][i][0] === key) {
        storage[index][i][1] = value;
        inserted = true;
      }
    }

    // if tuple does not exist push new tuple
    // Ex: tuple = [key, value]
    if (inserted === false) {
      storage[index].push([key,value]);
    }
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this.storageLimit);

  // bucket does not exist return 'undefined'
  if (storage[index] === undefined) {
    return undefined;
  } else {

    // search tuples in bucket for the specific 'key'
    for (var i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === key) {
        return storage[index][i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this.storageLimit);

  // if bucket only has one tuple with matching 'key', delete
  if (storage[index].length === 1 && storage[index][0][0] === key) {
    delete storage[index];
  } else {

    // search through all tuples and remove matching 'key'
    for (var i = 0; i < storage[index]; i++) {
      if (storage[index][i][0] ===  key) {
        delete storage[index][i];
      }
    }
  }
};

var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;

  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  
  return hash % max;
};
