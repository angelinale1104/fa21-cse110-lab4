function printSecond() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

var interval = setInterval(printSecond, 1000);
