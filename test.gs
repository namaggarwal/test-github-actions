class NamanTest {
  constructor(a) {
    this.a  = a;
  }

  printA() {
    console.log(this.a);
  }

}

function runthis(){
const nam = NamanTest(2);
nam.printA();
}