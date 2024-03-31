export function deleteNode(number: any, tree: any): any {
  if (tree === null || tree === undefined) {
    return null;
  } else if (tree.data == number) {
    return (tree = null);
  } else if (tree != undefined || tree != null) {
    return (
      deleteNode(number, tree.leftChild) || deleteNode(number, tree.rightChild)
    );
  }
}
