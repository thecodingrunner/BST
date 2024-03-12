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
  console.log(mergeSort(array))
  return arrayToBST(mergeSort(array),start,end)
}

// Create a new tree
let tree1 = new Tree(uniquify([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]))

// Make a binary tree from tree1
let tree = treeIt(tree1.array,tree1.start,tree1.end)

// Print the binary tree
console.log(tree)

// Function for printing the binary tree out visually
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// Pretty print the binary tree
prettyPrint(tree)

