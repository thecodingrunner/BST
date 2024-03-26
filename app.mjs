import insert from "./insert.mjs"
import del from "./delete.mjs"
import find from "./find.mjs"
import levelOrder from "./levelOrder.mjs"
import inOrder from "./inOrder.mjs"
import preOrder from "./preOrder.mjs"
import postOrder from "./postOrder.mjs"
import depth from "./depth.mjs"
import height from "./height.mjs"
import isBalanced from "./isBalanced.mjs"
import rebalance from "./rebalance.mjs"
import buildTree from "./buildTree.mjs"
import prettyPrint from "./prettyPrint.mjs"
import randomArray from "./randomArray.mjs"


// Driver program 
function driver() {
  let array = randomArray(50,100)
  console.log(array)
  let tree = buildTree(array) 
  console.log(`Balance check 1 (should be balanced): ${isBalanced(tree)}`)
  console.log(`Level order array (initial): ${levelOrder(tree)}`)
  console.log(`In order array (initial): ${inOrder(tree)}`)
  console.log(`Pre order array (initial): ${preOrder(tree)}`)
  console.log(`Post order array (initial): ${postOrder(tree)}`)
  insert(tree,105)
  insert(tree,109)
  insert(tree,126)
  console.log(`Balance check 2 (should be unbalanced): ${isBalanced(tree)}`)
  tree = buildTree(rebalance(tree))
  console.log(`Balance check 3 (should be balanced): ${isBalanced(tree)}`)
  console.log(`Level order array (final): ${levelOrder(tree)}`)
  console.log(`In order array (final): ${inOrder(tree)}`)
  console.log(`Pre order array (final): ${preOrder(tree)}`)
  console.log(`Post order array (final): ${postOrder(tree)}`)
  prettyPrint(tree)
}

driver()