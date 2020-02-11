
// js版メインのライフゲームコード
class LifeGame {
  // デフォルトなんてない =>時計になります
  constructor( name = "default", options={ reverse:false, rotate:false} ){
    // 生きたセルの表記
    this.alive = "#";
    // 死んだセルの表記
    this.dead = ".";
    // # 現世代配列
    this.map = new Array;
    // # 新世代配列
    this.new_map = new Array;

    // 初期盤面ロード・格納
    this.map = new LifeGameMap( name, options );
    // 高さ決定
    this.height = this.map.length;
    // 幅決定
    this.width = this.map[0].length;
  }

  // 盤面の更新と得取
  get UpDate(){
    this.GenerationChange();
  }

  // 盤面のHTML出力用盤面取得メソッド
  get GetMap() {
    return this.map.join("<br>");
  }

  // private
  // # 世代交代操作
  GenerationChange() {
    // # 本処理
    // # マップ上部から開始(y=0)
    for (let y = 0; y < this.height; y++) {
      var row = new String;
      // # マップ左から開始(x=0)
      for (let x = 0; x < this.width; x++) {
        row = row.concat(this.DeadOrAlive(y,x));
      }
      // # 各行の操作が終了したら新世代配列に追加
      this.new_map.push(row);
    }
    // 新世代を現在世代に反映
    this.map = this.new_map
    // # 新世代配列
    this.new_map = new Array;
  }


  // セルの誕生、生存、過疎、過密処理
  DeadOrAlive(y,x) {
    // 周辺セル座標の配列取得
    var around = this.AroundCombination(y,x);
    // 調査対象セルのうち生きたセルの数
    var cell_count = 0;
    // 周辺セルの調査
    while ( around.length != 0 ) {
      var [t,s] = around.shift();
      // 生きたセルがあればカウントアップ
      if ( this.InOrOut(t,s) && this.map[t][s]==this.alive ) { cell_count++; }
    }
    // 返す値のデフォルトの設定
    var str = this.alive;
    // 次世代の対象セルの状態決定
    if ( cell_count != 3 && (cell_count!=2 || this.map[y][x]!=this.alive) ) { str = this.dead; }
    return str;
  }
  // 周辺セル座標の配列作成
  AroundCombination(y,x){
    var arr = new Array;
    for (let t = -1; t <= 1; t++) {
      for (let s = -1; s <= 1; s++) {
        if (s!==0 || t!==0) {arr.push([y+t, x+s]);}
      }
    }
    return arr;
  }

  // AliveCellJudge(y,x) {
  //
  // }

  // マップ内外判定
  InOrOut(y,x) {
    // # はみ出してたらfalseにしたい
    return (0<=y && y<this.height && 0<=x && x<this.width);
  }
} // class
