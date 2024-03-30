import Node from "./Node";

export const buildTree: Function = (
  array: Array<number>,
  start: any,
  end: any
) => {
  if (start > end) {
    return null;
  } else {
    // Calculate middle point of array
    const mid: any = Math.floor((start + end) / 2);
    // Create new node
    const node = Node(array[mid]);
    node.leftChild = buildTree(array, start, mid - 1);
    node.rightChild = buildTree(array, mid + 1, end);

    return node;
  }
};
