import Node from "./Node";
import { buildTree } from "./buildTree";
import { simplifyArray } from "./simplifyArray";

// export default function (data: Array<any>) {
//   const build = () => {
//     buildTree(data);
//   };
//   const insert = () => {
//     insertTree(data);
//   };
//   return { build, insert };
// }
// function insertTree(data: any[]) {
//   throw new Error("Function not implemented.");
// }

export function createTree(data: any) {
  const sortedArray = simplifyArray(data);
  const build = (start: number, end: number) =>
    buildTree(sortedArray, start, end);
  const insert = (number: any, tree: any) => insertTree(number, tree);

  return { build, insert };
}

function insertTree(number: any, tree: any) {
  console.log(number);
  console.log(`${typeof tree}`);
  if (tree == undefined || tree == null) {
    console.log(`data is not defined`);
    return Node(number);
  } else if (tree.hasOwnProperty("data")) {
    const existingValue = tree.data;
    console.log(`existing value = ${existingValue}`);
    if (number < existingValue) {
      console.log(`number is smaller`);
      leftChild();
    } else {
      rightChild();
    }
  }

  function rightChild() {
    if (tree.rightChild == null) {
      const n = Node(number);
      tree.rightChild = n;
    } else {
      insertTree(number, tree.rightChild);
    }
  }

  function leftChild() {
    if (tree.leftChild == null) {
      const n = Node(number);
      tree.leftChild = n;
    } else {
      insertTree(number, tree.leftChild);
    }
  }
}

// throw new Error("Function not implemented.");

/*  check value against root node.
  if node is null, replace with new node.
  else if node value is greater than value rerun formula on left child
  else if node value is lower than value rerun formila on right child.
  else if node is same value exit
*/
