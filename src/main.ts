import "./style.css";
import prettyPrint from "./modules/prettyPrint";
import { createTree } from "./modules/Tree";

const arr = [2, 89, 23, 40]; // => 2, 23, 40, 89
const arrLength = arr.length; // => 4

const theTree = createTree(arr);
console.log();

const finalTree = theTree.build(0, arrLength - 1);
theTree.insert(3, finalTree);
theTree.insert(24, finalTree);

prettyPrint(finalTree);

console.log(`The tree is located in ${theTree.find(2, finalTree)}`);
