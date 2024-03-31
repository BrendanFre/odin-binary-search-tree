import Node from "./Node";
import { buildTree } from "./buildTree";
import { simplifyArray } from "./simplifyArray";

export function createTree(data: any) {
  const sortedArray = simplifyArray(data);
  const build = (start: number, end: number) =>
    buildTree(sortedArray, start, end);
  const insert = (number: any, tree: any) => insertTree(number, tree);
  const find = (number: any, tree: any) => findNode(number, tree);

  return { build, insert, find };
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

function findNode(number: number, tree: any) {
  console.log(
    `Tree data is ${tree.data} and is of type ${typeof tree.data} it is ${
      tree.data == number
    }`
  );
  if (tree === null) {
    console.log(`${number} is not in ${tree}`);
    return null;
  } else if (tree.data == number) {
    return console.log("found");
  } else if (tree != undefined || tree != null) {
    const leftChild = findNode(number, tree.leftChild);
    const rightChild = findNode(number, tree.rightChild);
    return null;
  }
}
