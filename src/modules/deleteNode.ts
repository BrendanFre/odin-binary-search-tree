import { insertTree } from "./insertTree";

export function deleteNode(number: any, tree: any): any {
  if (tree === null || tree === undefined) {
    return null;
  } else if (tree.leftChild.data == number) {
    checkBranches(tree.leftChild);
    console.log("tree found for deletion");
  } else if (tree != undefined || tree != null) {
    return (
      deleteNode(number, tree.leftChild) || deleteNode(number, tree.rightChild)
    );
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
      tree.firstChild = null;
      tree.secondChild = null;
      // console.log(node);
      // // tree.data = node.data;
      // tree.firstChild = firstChild;
      // tree.secondChild = secondChild;
    }
    tree = null;
    insertTree(firstChild, tree) || insertTree(secondChild, tree);
    return { __return: (tree = null), tree };
  }

  /**
   *
   * @param node takes any object
   * @returns node with the correct children
   */
  function checkBranches(node: object) {
    if ("data" in node && "leftChild" in node && "rightChild" in node) {
      if (node.leftChild != null) {
        if (node.rightChild != null) {
          // Right and left child are not empty
          throw new Error("not prepped");
        } else {
          // Right child is empty
          return node.leftChild;
        }
      }
    }
  }
}
