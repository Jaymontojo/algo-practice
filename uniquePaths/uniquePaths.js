class Field {
  constructor(size) {
    this.field = [];
    for(let row = 0; row < size; row ++){
      this.field.push([]);
      for(let col = 0; col < size; col++){
        this.field[row].push(false);
      };
    }; 
  };

  visitLocation(row, col) {
    this.field[row][col] = !this.board[row][col];
    return this.field;
  };

  hasBeenVisited(row, col) {
    return this.board [row][col];
  };
};

class UniqePaths {
  constructor(size){
    this.field = new Field(size);
    this.row = 0;
    this.col = 0;
  };

  solve(){
    return this.move(this.row, this.col);
  };

  move(row, col) {
    //tbd
  }
}