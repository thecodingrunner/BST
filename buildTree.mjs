export default function buildTree(array) {
  // Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Convert merge sorted array into binary tree
function arrayToBST(array,start,end) {
  if (start > end) return null;
  let mid = Math.floor((start + end)/2);
  let root = new Node(array[mid])
  root.left = arrayToBST(array,start,mid-1)
  root.right = arrayToBST(array,mid+1,end)
  return root
} 

// Tree class for conversion
class Tree {
  constructor(array) {
    this.array = array;
    this.start = 0;
    this.end = array.length - 1;
  }
}

// Convert input array to array with only unique values
function uniquify(array) {
  let uniq = array.filter(function(item, pos) {
    return array.indexOf(item) == pos;
  })
  return uniq
}

// Merge sort function
function mergeSort(array) {
  if (array.length < 2) {
    return array
  }
  const mid = Math.floor(array.length/2)
  const leftArr = array.slice(0,mid)
  const rightArr = array.slice(mid)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

// Merge function
function merge(leftArr, rightArr) {
  const sortedArr = []
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr]
}

// Function for converting array into balanced binary tree, using previously defined functions
function treeIt(array,start,end) {
  return arrayToBST(mergeSort(array),start,end)
}

// Create a new tree
let tree = new Tree(uniquify(array))

// Make a binary tree from tree1
return treeIt(tree.array,tree.start,tree.end)
}