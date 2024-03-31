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
    } else if (typeof tree.leftChild == "object") {
      if (typeof tree.rightChild == null) {
        tree = tree.leftChild;
      } else if (typeof tree.rightChild == "object") {
        const firstChild = tree.leftChild;
        const secondChild = tree.rightChild;
        tree = undefined;
        insertTree(firstChild, tree);
        insertTree(secondChild, tree);
        return (tree = null);
      } else {
        console.log("delete right");
        tree = tree.rightChild;
      }
    }
  }
}
