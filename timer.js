// // Beep sounds process.stdout.write('\x07')
// const args = process.argv;
// const numbers = args.slice(2);
// const lilTimer = function(arguments) {
//   for (arg of arguments) {
//     if (arg <= 0 || arg === isNaN) {
//     return null;
//   } else {
//     setTimeout (() => {
//       process.stdout.write('\x07');
//     }, arg * 1000)
//   }
//   }
  
// }

// lilTimer(numbers)
// // process.stdout.write('\x07');
// console.log(numbers)

const numbers = process.argv.slice(2);

const scheduleBeep = function(delay) {
  if(!isNaN(Number(delay)) && delay > 0 ) {
      setTimeout(() => {
    process.stdout.write('\x07')
    console.log("my sound doesn't work so read this instead")
  }, delay * 1000);
  }

};

for (const num of numbers) {
  scheduleBeep(num);
};
