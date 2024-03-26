import find from "./find.mjs";
import returnHeight from "./returnHeight.mjs"

export default function height(tree,value) {
  return returnHeight(find(tree,value))
}