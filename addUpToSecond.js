//Big O: O(1)
//Always 3 operations - (* + /)

function addUpToSecond(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpToSecond(100000));
