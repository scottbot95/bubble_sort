function split(array) {
  const pivot = Math.floor(array.length / 2);
  let left = array.slice(0, pivot);
  let right = array.slice(pivot);

  return [left, right];
}

function merge(arr1, arr2) {
  let merged = [];
  let i = 0, j = 0;
  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i++]);
    } else {
      merged.push(arr2[j++]);
    }
  }
  if (i !== arr1.length) {
    merged.push(...(arr1.slice(i)));
  } else {
    merged.push(...(arr2.slice(j)));
  }

  return merged;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let halves = split(array);
  let left = mergeSort(halves[0]);
  let right = mergeSort(halves[1]);

  return merge(left, right);
}
