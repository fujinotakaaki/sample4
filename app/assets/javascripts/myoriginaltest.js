
class Test{
  constructor(){
    console.log('uno');
    this.alive = "X"
    this.dead = "Y"
    this.map = ["......##....", "......##....", "............", "....####....", "##.#....#...", "##.#.##.#...", "...#...##.##", "...#....#.##", "....####....", "............", "....##......", "....##......"];
  }

  get play(){
    this.ChangeInitialMap();
  }

  ChangeInitialMap() {
    console.log('start');
    // 盤面更新後の格納変数
    var apply_format_map = new Array;
    // 更新前の盤面の各行
    var row1 = new Array;
    // 更新前の盤面の各行を配列にsplitしたもの
    var row2 = new String;
    // 生状態表示
    const alive = this.alive;
    // 死状態表示
    const dead = this.dead;
    // 変更する文字列を格納する変数
    var char = new String
    // 各行取得処理
    while ( this.map.length !=0 ) {
      // 各行取得
      row1 = this.map.shift()
      // row1書き出し
      console.log('row1=', row1);
      // 各行配列化合
      row2 = row1.split('');
      // row2書き出し
      console.log('row2=', row2);
      // 更新後の行の文字列化
      var row3 = new String;
      // 文字列化された行を先頭から処理
      while (row2.length != 0) {
        // 変換する文字の決定
        if ( row2.shift() == "#") { char = alive; }
        else { char = dead; }
        // 更新後の行にセルの状態を追加
        row3 = row3.concat( char )
      }
      // row3書き出し
      console.log('row3=', row3);
      apply_format_map.push( row3 )
    }
    console.log('finish');
  }
}
// const ss = new Test;
// ss.play;
