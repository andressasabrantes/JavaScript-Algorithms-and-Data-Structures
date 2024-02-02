//Big O: O(n)
//Number of operations is (eventually) bounded by a multiple of n (say, 10n)

function countUpAndDown(n) {
  console.log("Going up");
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (var j = n; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down, Bye!");
}

countUpAndDown(10);
