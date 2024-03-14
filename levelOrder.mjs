// let Q = [];

// export default function levelOrder(tree,callback) {
//   if (tree === null) return;
//   Q.push(tree)
//   while ((Q[Q.length - 1].left) || (Q[Q.length - 1].right)) {
//     let current = Q[Q.length s- 1]
//     console.log(current.value)
//     console.log(callback(current.value))
//     console.log(Q)
//     if (current.left != null) return levelOrder(current.left,callback)
//     if (current.right != null) return levelOrder(current.right,callback)
//     Q.pop(0)
//   }
// }

export default function levelOrder(tree,callback) {
  if (tree == null) {
    return;
  }

  let array = []
  let queue = [tree]

  while (queue.length > 0) {
    let item = queue.shift()
    let value = item.value
    if (callback) {
      array.push(callback(value))
    } else {
      array.push(value)
    } 

    if (item.left == null && item.right == null) {
      continue
    }

    if (item.left != null) {
      queue.push(item.left)
    }

    if (item.right != null) {
      queue.push(item.right)
    }
  }

  return array
}