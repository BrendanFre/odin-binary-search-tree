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

function findNode(number: any, tree: any) {
  if (tree == null) {
    return null;
  }
  if (tree.data == number) {
    return tree;
  } else if (tree != undefined || tree != null) {
    findNode(number, tree.leftChild);
    findNode(number, tree.rightChild);
  }
  console.log(tree);
  throw new Error("Function not implemented.");
}
