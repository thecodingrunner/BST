export default function find(tree, value) {
  if (tree == null) return tree;
  // console.log(tree.value)
  // console.log(value)
  if (tree.value == value) return tree;
  
  if (tree.value > value) {
    return find(tree.left,value)
  } else if (tree.value < value) {
    return find(tree.right,value)
  }
}