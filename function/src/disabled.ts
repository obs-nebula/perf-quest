function doWork() {
  for (let i = 0; i <= ~~(Math.random() * 4e7); i += 1) {
    //
  }
}

export function callDoWorkDisabled() {
  for (let i = 0; i < 10; i += 1) {
    doWork();
  }
}
