class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default function insert(tree,value) {
  if (tree == null) {
    tree = new Node(value)
    return tree
  }

  if (value < tree.value) {
    tree.left = insert(tree.left,value)
  } else if (value > tree.value) {
    tree.right = insert(tree.right,value)
  }
  
  return tree
}