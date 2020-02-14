


class Test {
  constructor() {
    console.log('constructor_perfomed<br>');
    this.alive = "X"
    this.dead = "Y"
    this.map = ["..................", "..................", "..................", "..................", "......#....#......", ".....##....##.....", "......#....#......", "..................", "..................", "..................", ".................."];
  }

  get play() {
    this.Print();
    console.log();
    this.MapRotation( 7 );
  }

  Print() {
    console.log(this.map.join('<br>'))
  }

  MapRotation( rot = 0 ) {
    console.log('<br>start<br>');
    // 回転後の盤面格納変数
    var rotated_map = new Array;
    const height = this.map.length;
    const width = this.map[0].length;
    for ( let x=width-1; x>=0; x-- ) {
      var row = '';
      for ( let y=0; y<height; y++ ) {
        row = row.concat(this.map[y].split('')[x])
      }
      rotated_map.push( row )
    }
    console.log('<br>finish<br>');
    this.map = rotated_map
    // this.map = new Array( width ).fill('あれれれ？？？');
    this.Print();
  }
}
// const ss = new Test;
// ss.play;
