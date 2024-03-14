let array = [];

export default function inOrder(tree,callback) {
  if (tree == null) return;
  inOrder(tree.left,callback)
  if (callback) {
    array.push(callback(tree.value))
  } else {
    array.push(tree.value)
  }
  inOrder(tree.right,callback)
  return array
}