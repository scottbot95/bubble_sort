function split(array) {
  const pivot = Math.floor(array.length / 2);
  let left = array.slice(0, pivot);
  let right = array.slice(pivot);

  return [left, right];
}
