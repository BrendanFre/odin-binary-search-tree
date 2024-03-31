import { buildTree } from "./buildTree";
import { deleteNode } from "./deleteNode";
import { findNode } from "./findNode";
import { insertTree } from "./insertTree";
import { simplifyArray } from "./simplifyArray";

export function createTree(data: any) {
  const sortedArray = simplifyArray(data);
  const build = (start: number, end: number) =>
    buildTree(sortedArray, start, end);
  const insert = (number: any, tree: any) => insertTree(number, tree);
  const find = (number: any, tree: any) => findNode(number, tree);
  const deletion = (number: any, tree: any) => deleteNode(number, tree);

  return { build, insert, find, deletion };
}
