export default function returnHeight(tree) {
  if (tree === null) return -1;
  return Math.max(returnHeight(tree.left),returnHeight(tree.right)) + 1
}