function swap(array, p1, p2=p1+1) {
  const val = array[p1];

  array[p1] = array[p2];

  array[p2] = val;
}

function compare(array, p1, p2=p1+1) {
  return array[p1] > array[p2];
}

function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;
  // for (let j = 0; j < array.length && !isSorted; j++) {
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - counter - 1; i++) {
      if (compare(array, i)) {
        // array[i] > array[i+1]
        swap(array, i);
        isSorted = false;
      }
    }
    counter++;
  }

  return array;
}
