var newArray = []

export default function rebalance(tree) {
  if (tree == null) return tree;
  newArray.push(tree.value)
  rebalance(tree.left)
  rebalance(tree.right)
  return newArray;
}