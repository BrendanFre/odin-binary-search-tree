import Node from "./Node";

export function insertTree(number: any, tree: any) {
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
