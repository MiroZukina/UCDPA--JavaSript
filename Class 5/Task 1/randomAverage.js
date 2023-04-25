function randomAverage(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += Math.random();
    }
    return sum / n;
  }
  console.log("n = 1, randomAverage(n) = " + randomAverage(1));
console.log("n = 10, randomAverage(n) = " + randomAverage(10));
console.log("n = 100, randomAverage(n) = " + randomAverage(100));
console.log("n = 1000, randomAverage(n) = " + randomAverage(1000));
console.log("n = 10000, randomAverage(n) = " + randomAverage(10000));
console.log("n = 100000, randomAverage(n) = " + randomAverage(100000));
console.log("n = 1000000, randomAverage(n) = " + randomAverage(1000000));


