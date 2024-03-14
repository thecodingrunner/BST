let H = 10;

export default function height(tree,value) {
  if (tree == null) return 0;
  var leftHeight = height(tree.left,value)
  var rightHeight = height(tree.right,value)
  var ans = parseInt(Math.max(leftHeight,rightHeight) + 1)
  if (tree.value == value) {
    H = ans
  }
  // return ans
  return H
}

// this module need going over