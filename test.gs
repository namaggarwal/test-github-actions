class NamanTest {
  constructor(a) {
    this.a = a;
  }

  printA() {
    console.log(this.a);
  }
}

function runthis() {
  const nam = new NamanTest(2);
  nam.printA();
}
