class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default function del(tree, value) {
  if (tree == null) {
    return tree
  }

  if (tree.value > value) {
    tree.left = del(tree.left,value)
    return tree
  } else if (tree.value < value) {
    tree.right = del(tree.right,value)
    return tree
  }

  if (tree.left === null) {
    return tree = tree.right
  } else if (tree.right === null) {
    return tree = tree.left
  }

  // if both children
  // go to right child 
  // go to furthest left child 
  // swap that child with the top value 
  // delete that child



  if ((tree.left) && (tree.right)) {
    let succParent = tree
    let succ = tree.right
    while (succ.left !== null) {
      succParent = succ
      succ = succ.left
    }

    if (succParent !== tree) {
      succParent.left = succ.right;
    } else {
      succParent.right = succ.right;
    }
    
    tree.value = succ.value
    return tree
  }
}