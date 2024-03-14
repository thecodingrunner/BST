let array = [];

export default function preOrder(tree,callback) {
  if (tree == null) return;
  if (callback) {
    array.push(callback(tree.value))
  } else {
    array.push(tree.value)
  }
  preOrder(tree.left,callback)
  preOrder(tree.right,callback)
  return array
}