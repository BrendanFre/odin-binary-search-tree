export function deleteNode(number: any, tree: any): any {
  if (tree === null || tree === undefined) {
    return null;
  } else if (tree.data == number) {
    console.log("tree found");
    deletion(number, tree);
  } else if (tree != undefined || tree != null) {
    return (
      deleteNode(number, tree.leftChild) || deleteNode(number, tree.rightChild)
    );
  }

  function deletion(number: any, tree: any) {
    if (tree.leftChild == null && tree.rightChild == null) {
      console.log(`Node containing ${number} has been deleteed.`);
      return (tree = null);
    } else if (typeof tree.leftChild == "object") {
      if (typeof tree.leftChild == null) {
        tree = tree.leftChild;
      } else {
        const firstChild = tree.leftChild;
        const secondChild = tree.rightChild;
        tree = undefined;
        tree.insert(firstChild, tree);
        tree.insert(secondChild, tree);
        return (tree = null);
      }
    }
  }
}
