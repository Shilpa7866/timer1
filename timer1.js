let alarm = process.argv.slice(2);
console.log(alarm);
for (let sec of alarm) {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, sec * 1000);
}