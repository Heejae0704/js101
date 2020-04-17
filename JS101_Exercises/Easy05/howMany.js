function countOccurrences(arr) {
  const obj = {};
  arr.forEach(el => {
    if (Object.keys(obj).includes(el)) {
      obj[el]++;
    } else obj[el] = 1;
    return null;
  });
  Object.keys(obj).forEach(key => {
    console.log(`${key} => ${obj[key]}`);
  });
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);