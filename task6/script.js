var princeple = 10000;
var rateOfInterest = 0.05;
var numberOfinterests = 1;
var moneyInvestTimes = 10;

// formula of a Compaund of interest
// A = P (1+r/n)nt

var money =
  princeple *
  (1 + rateOfInterest / numberOfinterests) **
    (numberOfinterests * moneyInvestTimes);

console.log("The total interest you earned is INR is " +Math.round(money));
