// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    const hqLocation = 42; // Headquarters location
    return Math.abs(blocks - hqLocation);
  }
  
  console.log(distanceFromHqInBlocks(43)); // Output: 1
  
  function distanceFromHqInFeet(blocks) {
    const blockInFeet = 264; // Number of feet in one block
    const hqLocation = 42; // Headquarters location in blocks
  
    if (blocks >= hqLocation) {
      return (blocks - hqLocation) * blockInFeet;
    } else {
      return (hqLocation - blocks) * blockInFeet;
    }
  }
  
  console.log(distanceFromHqInFeet(43)); // Output: 264

  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockInFeet = 264; // Number of feet in one block
  
    if (startBlock >= endBlock) {
      return (startBlock - endBlock) * blockInFeet;
    } else {
      return (endBlock - startBlock) * blockInFeet;
    }
  }
  
  console.log(distanceTravelledInFeet(34, 42)); // Output: 2112
  

  function calculatesFarePrice(start, destination) {
    const blockInFeet = 264; // Number of feet in one block
    const freeDistance = 400; // Free distance in feet
    const shortDistanceRate = 0.02; // Rate per foot for short distance
    const longDistanceRate = 25; // Flat rate for long distance
    const maxDistance = 2500; // Maximum allowed distance in feet
  
    const distanceInFeet = Math.abs(destination - start) * blockInFeet;
  
    if (distanceInFeet <= freeDistance) {
      return 0;
    } else if (distanceInFeet <= 2000) {
      return (distanceInFeet - freeDistance) * shortDistanceRate;
    } else if (distanceInFeet <= maxDistance) {
      return longDistanceRate;
    } else {
      return 'cannot travel that far';
    }
  }
  
  console.log(calculatesFarePrice(34, 42)); // Output: 8.32
  console.log(calculatesFarePrice(34, 12)); // Output: 25
  console.log(calculatesFarePrice(34, 58)); // Output: "Ride not allowed for distances over 2500 feet."

  
  