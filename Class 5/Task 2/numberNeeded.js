function consecutiveHeads(numberNeeded) {
  let numHeads = 0;
  let numTosses = 0;
  
  while (numHeads < numberNeeded) {
    const toss = Math.floor(Math.random() * 2);
    numTosses++;
    
    if (toss === 1) {
      numHeads++;
    } else {
      numHeads = 0;
    }
  }
  
  console.log(`It took ${numTosses} tosses to get ${numberNeeded} consecutive heads.`);
}
consecutiveHeads(3);
