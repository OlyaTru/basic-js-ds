const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    let newNode = new Node(data);

    if(this._root === null) {
      this._root = newNode;
      return;
    }

    let currentNode = this._root;

    while(true) {
      if(currentNode.data === newNode.data) return;

      if(newNode.data < currentNode.data) {
        if(currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
        continue;
      }

      if(newNode.data > currentNode.data) {
        if(currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
        continue;
      }
    }

  }

  has(data) {
    if(this._root === null) return false;

    let currentNode = this._root;
    while(true) {

      if(currentNode.data === data) return true;

      if(data < currentNode.data) {
        if(currentNode.left === null) {
          return false;
        }

        currentNode = currentNode.left;
        continue;
      }

      if(data > currentNode.data) {
        if(currentNode.right === null) {
          return false;
        }

        currentNode = currentNode.right;
        continue;
      }
    }
  }

  find(data) {
    if(this._root === null) return null;

    let currentNode = this._root;
    while(true) {
      if(data === currentNode.data) {
        return currentNode;
      }

      if(data < currentNode.data) {
        if(currentNode.left !== null) {
          currentNode = currentNode.left;
        } else {
          return null;
        }
        continue;
      }

      if(data > currentNode.data) {
        if(currentNode.right !== null) {
          currentNode = currentNode.right;
        } else {
          return null;
        }
        continue;
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if(this._root === null) return null;

    let currentNode = this._root;
    while(currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if(this._root === null) return null;

    let currentNode = this._root;
    while(currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};