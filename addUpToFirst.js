//Big O: O(n)
//Number os operations is (eventually) bounded by a multiple of n (say. 10 n)
//As n increases the number of operations increases as well.

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(100000));
