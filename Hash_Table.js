/*
  Definition:
    A Hash Table (Hash Map) is a data structure used to implement an associative array, a structure that can map keys to values. A Hash Table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
    
    Note: Considered the more efficient data structure for lookup.

  Complexity:
    Average      
    Access  Search  Insertion Deletion
      -      O(1)      O(1)     O(1)
*/

function HashTable(size) {
  this.values = {};
  this.numberOfValues = 0;
  this.size = size;
}
