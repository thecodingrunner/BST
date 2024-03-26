import returnHeight from "./returnHeight.mjs"

export default function isBalanced(tree) {
  let lh;
  let rh;

  if (tree == null) {
    return 1
  }

  lh = returnHeight(tree.left)
  rh = returnHeight(tree.right) 

  if (Math.abs(lh - rh) <= 1 &&
      isBalanced(tree.left) &&
      isBalanced(tree.right)) {
        return 1
  }

  return 0
}