const sentence = "Hello there from Lighthouse Labs";
let increment = 0;
//console.log(sentence.length);
for (const char of sentence) {
  
  setTimeout(() => {
    process.stdout.write(char)
  }, increment)

  increment += 100;
}


time = sentence.length * 100;
setTimeout(() => {
  console.log()
}, time);
