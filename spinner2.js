process.stdout.write('hello from spinner1.js... \rheyyy\n');
let delay = 0;
const spinner = ['|','/','-','\\','|','/','-','\\','|'];
  for (const spin of spinner){
  setTimeout(()=>{
    process.stdout.write(`\r${spin}`);
  }, delay);
  delay += 100
};
setTimeout(()=>{
  process.stdout.write('\n');
  // console.log('')
}, delay += 200);



// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);