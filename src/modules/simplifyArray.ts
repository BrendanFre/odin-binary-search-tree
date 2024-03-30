export const simplifyArray = (array: number[]) => {
  array.sort(function (a, b) {
    return a - b;
  });
  const noDuplicates: Array<number> = [];
  array.forEach((currentItem) => {
    if (!noDuplicates.includes(currentItem)) {
      noDuplicates.push(currentItem);
    }
  });
  return noDuplicates;
};
