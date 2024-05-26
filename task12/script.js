let  array = [4, 8, 2, 11, 6, 7, 10];

/// make a function to return the maximum nubmers

function maxNumber(array){
let flag = array[0];
for(let i = 0; i < array.length-1; i++) {
    if(array[i] >= flag) {
        flag = array[i];
    }
}
  console.log("max number is",flag);
}

maxNumber(array)

// make a function to sum all array elements 

function sumAll(array){
let flag=0;
for (let i = 0; i <= array.length-1; i++) {
    flag += array[i];
}
console.log("sum of all array elements is",flag);
}
sumAll(array)

/// make function count all odd numbers

function countOdd(array){
let flag = 0;

for (let i = 0; i <= array.length-1; i++) {
    if(array[i] % 2 !== 0) {
        flag++;
    }
}
console.log("count of odd numbers is",flag);

}

countOdd(array)