/// Find the sum of all its digits ex ( number is 135 then 1+3+5 = 9)

// var number = 135;
let number = 135;
let sum = 0;
while(number != 0){
  let reminder= number % 10;
  sum = sum + reminder;
  number = Math.floor(number/10);
}
console.log("the sum of all digits " + sum);


// Check if it is an Armstrong number.
// An Armstrong number is one whose sum of digits raised to the power three equals the number ( ex 153 => 1^3 + 5^3 + 3^3 = 153 )



let  number2 = 153;
const number3=153;
let sum2=0;
while(number2 != 0){
  let reminder= number2 % 10;
  sum2 = sum2 + (reminder*reminder*reminder);
  number2 = Math.floor(number2/10);
}
if(number3 === sum2){
  console.log("the nuber is armstrong number " +sum2);
}else{
  console.log("the nuimber is not a armstrong number " +sum2);
}


/// the chek this number is a prime or not 

let number4 = 153;
let count = 0;
for (let i =1; i <= number4; i++) {
  if(number4 % i ===0){
    console.log(" the factor of a numer "+i);
    count++;
  }
}

if(count === 2){
  console.log("the number is a prime number " +number4);
}else{
  console.log("the number is not a prime number " +number4);
}

