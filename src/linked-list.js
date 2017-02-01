const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(data) {
      let node = new Node(data);
      if(this.length == 0){
        this._head = node;
        this._tail = node;
      } else {

      }
      return this;
    }

    head() {
      if(this._head){
        return this._head.data;
      }
    }

    tail() {
      if(this._tail){
        return this._tail.data;
      }
    }

    at(index) {
      
    }

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
