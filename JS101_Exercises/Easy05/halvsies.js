// check the idx of the half
// two loops: one from zero to half index
// the other from half-index + 1 to the end

function halvsies(arr) {
  if (arr.length === 0) return [[], []];
  const halfIndex = Math.ceil(arr.length / 2);
  const firstHalf = arr.slice(0, halfIndex);
  const secondHalf = arr.length === 1 ?
  [] : arr.slice(halfIndex, arr.length);
  console.log([firstHalf, secondHalf]);
  return [firstHalf, secondHalf];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]