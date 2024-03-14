let H = 0;

export default function depth(tree,value) {
  // find the node of the value 
  // incrementally increase a valiable each time then return when node found
  if (tree == null) return tree;

  if (tree.value == value) return H;
  
  if (tree.value > value) {
    H++
    return depth(tree.left,value)
  } else if (tree.value < value) {
    H++
    return depth(tree.right,value)
  }
}