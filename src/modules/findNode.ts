export function findNode(number: number, tree: any): any {
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
