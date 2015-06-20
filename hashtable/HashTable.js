'use strict';

var __ = require("../utils");

class HashTable {
  constructor(tableLength) {
    tableLength = tableLength || 137;
    this.table = new Array(137);
  }

  toHash( data ) {
    const H = 37;
    var tableLength = this.table.length,
        hash = 0;
    for(let i = 0, len = data.length; i < len; i++) {
      hash = (H * hash + data.charCodeAt(i))
    }
    hash = hash % tableLength;

    if(hash < 0)
      hash += tableLength;

    return hash;
  }

  simpleHash( data ) {
    var total = 0;
    for(let i = 0, len = data.length; i < len; i++) {
      total += data.charCodeAt(i);
    }

    return total % this.table.length;
  }

  insert( data ) {
    var pos = this.toHash(data);
    this.table[pos] = data;
  }

  showDistribution() {
    __.each(this.table, function(data, index) {
      console.log(index + " : " + data)
    });
  }
}

module.exports = HashTable;
