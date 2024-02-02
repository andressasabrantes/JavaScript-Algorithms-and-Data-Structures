//Big O: O(n²)
//O(n) operation inside of an O(n) operation => O(n) * O(n) = O(n²)

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; i++) {
      console.log(i, j);
    }
  }
}

printAllPairs(1);
