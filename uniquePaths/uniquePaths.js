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