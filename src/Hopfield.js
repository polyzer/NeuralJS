class THopfield {
  constructor(Boxes) {
    this.Boxes = Boxes;
    let N = Boxes.N;
    let M = Boxes.Count;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        this.weights[i][j] = 0;
      }
    }

    this.Learning();
  }
  Learning() {
    for (let i = 0; i < this.N; i++) {
      for (let j = 0; j < this.N; j++) {
        if (i === j) continue;

        for (let m = 0; m < this.M; m++) {
          this.weights[i][j] += this.Boxes[m][i] * this.Boxes[m][j];
        }
        this.weights[i][j] /= this.N;
      }
    }
  }
}
