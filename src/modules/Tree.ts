import { buildTree } from "./buildTree";
import { insertTree } from "./insertTree";
import { simplifyArray } from "./simplifyArray";

export function createTree(data: any) {
  const sortedArray = simplifyArray(data);
  const build = (start: number, end: number) =>
    buildTree(sortedArray, start, end);
  const insert = (number: any, tree: any) => insertTree(number, tree);
  const find = (number: any, tree: any) => findNode(number, tree);

  return { build, insert, find };
}

function findNode(number: number, tree: any) {
  if (tree === null || tree === undefined) {
    return null;
  } else if (tree.data == number) {
    return JSON.stringify(tree);
  } else if (tree != undefined || tree != null) {
    return (
      findNode(number, tree.leftChild) || findNode(number, tree.rightChild)
    );
  }
}
