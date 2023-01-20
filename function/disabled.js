function doWork() {
  for (let i = 0; i <= Math.floor(Math.random() * 40000000); i += 1) {

  }
}

function callDoWork() {
  for (let i = 0; i < 10; i += 1) {
    doWork();
  }
}

module.exports = {
  callDoWork
}