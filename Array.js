/*
  Complexity:

    - Average      
    Access  Search  Insertion Deletion
     O(1)    O(n)     O(1)      O(n)
*/

function MyArray() {
  return this.array = [];
};

MyArray.prototype.add = function(data) {
  this.array.push(data);
};

MyArray.prototype.remove = function(data) {
  this.array = this.array.filter(function(curr) {
    return curr !== data;
  });
};

MyArray.prototype.search = function(data) {
  var foundIndex = this.array.indexOf(data);
  // ~ will convert a 0 to a -1 and will pass the test
  if (~foundIndex) {
    return foundIndex;
  }

  return null;
}

MyArray.prototype.getIndexAt = function(index) {
  return this.array[index];
}

MyArray.prototype.length = function() {
  return this.array.length;
}

MyArray.prototype.print = function() {
  console.log(this.array.join(' '));
}
