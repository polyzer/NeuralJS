class TPerceptron {
  constructor(N) {
    this.weights = [];
    for (let el in N) {
      this.weights.push(0);
    }
  }
  calc(x) {
    let res = 0;
    for (let i = 0; i < this.weights.length; i++) {
      res = res + this.weights[i] * x[i];
    }
    return res;
  }
  sign(x) {
    if (this.calc(x) > 0) {
      return 1;
    }
    return -1;
  }
  learn(la, x, y) {
    if (y * this.calc(x) <= 0) {
      for (let i = 0; i < this.weights.length; i++) {
        this.weights[i] = this.weights[i] + la * y * x[i];
      }
    }
  }
  learning(la, T) {
    for (let i = 0; i < 100; i++) {
      T.forEach(t => {
        this.learn(la, t[0], t[1]);
      });
    }
  }
}
