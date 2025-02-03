/** Exercise 01 - Coins **/

// Add your function here

calculateChange = (change) => {
  let dollar = 0;
  let quarter = 0;
  let dime = 0;
  let nickel = 0;
  let penny = 0;
  change = Math.round(change * 100);
  if (change > 10000) {
    return "Error: value is too large";
  } else {
    while (change >= 1) {
      if (change >= 100) {
        change -= 100;
        dollar += 1;
      } else if (change >= 25) {
        change -= 25;
        quarter += 1;
      } else if (change >= 10) {
        change -= 10;
        dime += 1;
      } else if (change >= 5) {
        change -= 5;
        nickel += 1;
      } else {
        change -= 1;
        penny += 1;
      }
    }
    let result = [];
    if (dollar > 0) result.push(`${dollar} dollar${dollar > 1 ? "s" : ""}`);
    if (quarter > 0) result.push(`${quarter} quarter${quarter > 1 ? "s" : ""}`);
    if (dime > 0) result.push(`${dime} dime${dime > 1 ? "s" : ""}`);
    if (nickel > 0) result.push(`${nickel} nickel${nickel > 1 ? "s" : ""}`);
    if (penny > 0) result.push(`${penny} penn${penny === 1 ? "y" : "ies"}`);

    return result.join(", ") || "No change needed";
  }
};
// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
