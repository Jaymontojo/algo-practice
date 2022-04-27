class Field {
  constructor(size) {
    this.field = [];
    for(let row = 0; row < size; row ++){
      this.field.push([]);
      for(let col = 0; col < size; col++){
        this.field[row].push(false);
      };
    }; 
  }
};