let array = [];

export default function postOrder(tree,callback) {
  if (tree == null) return;
  postOrder(tree.left,callback)
  postOrder(tree.right,callback)
  if (callback) {
    array.push(callback(tree.value))
  } else {
    array.push(tree.value)
  }
  return array
}