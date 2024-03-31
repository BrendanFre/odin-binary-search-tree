import { insertTree } from "./insertTree";

export function deleteNode(number: any, tree: any): any {
  if (tree === null || tree === undefined) {
    return null;
  } else if (tree.data == number) {
    console.log("tree found for deletion");
    deletionNode(number, tree);
  } else if (tree != undefined || tree != null) {
    return (
      deleteNode(number, tree.leftChild) || deleteNode(number, tree.rightChild)
    );
  }

  function deletionNode(number: any, tree: any) {
    if (tree.leftChild == null && tree.rightChild == null) {
      console.log(`Node containing ${number} has been deleteed.`);
      return (tree = null);
    } else if (tree.leftChild != null) {
      console.log("left child is an object");
      if (typeof tree.rightChild == null) {
        console.log("update left");
        tree = tree.leftChild;
      } else if (typeof tree.rightChild == "object") {
        let __return;
        ({ __return, tree } = moveBranches(tree));
        return __return;
      }
    } else {
      console.log("delete right");
      tree.data = tree.rightChild.data;
      tree.leftChild = tree.rightChild.leftChild;
      tree.rightChild = tree.rightChild.leftChild;
    }
  }
}
function moveBranches(tree: any) {
  console.log(`Two branches`);
  const firstChild = tree.leftChild;
  const secondChild = tree.rightChild;
  tree.data = null;
  if (firstChild.data > secondChild.data) {
    tree.data = firstChild.data;
    tree.firstChild = firstChild.firstChild;
    tree.secondChild = firstChild.secondChild;
  } else {
    const node = tree.secondChild;
    console.log(node);
    // tree.data = node.data;
    tree.firstChild = firstChild;
    tree.secondChild = secondChild;
  }
  tree = null;
  insertTree(firstChild, tree) || insertTree(secondChild, tree);
  return { __return: (tree = null), tree };
}
