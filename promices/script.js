// how to make promice

// const promice1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (true) {
//       res("hello max");
//     } else {
//       rej("hello sujay");
//     }
//   }, 2000);
// });

// const promice2 = new Promise((res, rej) => {
//   function addition(vale1, val2) {
//     if (vale1 % val2 == 0) {
//       res();
//     } else {
//       rej();
//     }
//   }
//   setTimeout(() => {
//     addition(4, 4);
//   }, 2000);
// });

// promice1
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((data) => {
//     console.log(data);
//   }).finally((err) => {
//     console.log(err);
//   })
//   console.log(promice1);

//   console.log("sujay");

// promice2.then(() => {
//       console.log("hello");
// }).catch(() => {
//   console.log("hello sujay");
// }).finally((err) => {
//   console.log("cAL RAHA HAI");
// });

// promices 3
var masseg = document.querySelector(".data");

function promices(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject(`Dividing ${a}  by ${b}...\n
      Error: Division by zero is not allowed
      `);
      } else {
        resolve(`Dividing ${a}  by ${b}...\n
          result: ${a / b}
        `);
      }
    },2000);
  });
}

promices(10, 2)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

promices(10, 0)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

promices(10, 4)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
promices(18, 2)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
promices(9, 3)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
