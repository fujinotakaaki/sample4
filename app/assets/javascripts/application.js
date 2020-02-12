// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
/*
// js版メインのライフゲームコード
class LifeGame {
  // デフォルトなんてない =>時計になります
  constructor( name = "default", options={ alive:"#", dead:"." } ){
    // 生きたセルの表記
    if ( options.alive==undefined ) { this.alive = "#"; }
    else{ this.alive = options.alive; } // options['alive']も表記としてOK
    // 死んだセルの表記
    // （※死んだセルは"#"に変更すると、正しく動作しません。）
    if ( options.dead==undefined ) { this.dead = "."; }
    else{ this.dead = options.dead; } // options['dead']も表記としてOK
    // # 現世代配列
    this.map = new Array;
    // # 新世代配列
    this.new_map = new Array;

    // 初期盤面ロード・格納
    // this.map = new LifeGameMap( name, options );
    this.map = ["................................................", "................................................", ".......................##.......................", ".......................##.......................", "................................................", "................................................", "................................................", "..........##....................................", ".........#..#............##.....................", "..........##.............#......................", ".........................#............#.........", "..........................#..........#.#........", ".....................................#.#........", "......................................#.........", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "...................................#..#.........", "....................................###.........", "...##......................................##...", "...##......................................##...", ".........###....................................", ".........#..#...................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", ".........#......................................", "........#.#.....................................", "........#.#..........#..........................", ".........#............#.........................", "......................#.............##..........", ".....................##............#..#.........", "....................................##..........", "................................................", "................................................", "................................................", ".......................##.......................", ".......................##.......................", "................................................", "................................................"];
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
    this.map = this.new_map;
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
      if ( this.InOrOut(t,s) && !this.AliveCellJudge(t,s) ) { cell_count++; }
    }
    // 返す値のデフォルトの設定
    var str = this.alive;
    // 次世代の対象セルの状態決定
    if ( cell_count != 3 && (cell_count!=2 || this.AliveCellJudge(y,x)) ) { str = this.dead; }
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

  AliveCellJudge(y,x) {
    // return !( this.map[y][x]==this.alive );
    var alive = this.map[y][x];
    return !( alive==this.alive || alive=="#" );
  }

  // マップ内外判定
  InOrOut(y,x) {
    // # はみ出してたらfalseにしたい
    return (0<=y && y<this.height && 0<=x && x<this.width);
  }
} // class
*/

// 世代変数
var generation;
// ライフゲームを格納する変数
// var life_game;

// 繰り返し処理の中身
function showPassage() {
  // if ( generation != 0 ) { life_game.UpDate; }
  // else {
  //   life_game = new LifeGame();
  // }
  var msg = "第" + generation + "世代（ 60P312 ）";   // 表示文作成
  // var msg1 = life_game.GetMap;
  document.getElementById("PassageArea").innerHTML = msg; // 表示更新
  // document.getElementById("PassageArea2").innerHTML = msg1; // 表示更新
  generation++;   // カウントアップ
}

// 繰り返し処理の開始
function startShowing() {
  generation = 0;   // カウンタのリセット
  PassageID = setInterval('showPassage()', 100);   // タイマーをセット(1000ms間隔)
  document.getElementById("startcount").disabled = true;   // 開始ボタンの無効化
}

// 繰り返し処理の中止
function stopShowing() {
  clearInterval( PassageID );   // タイマーのクリア
  document.getElementById("startcount").disabled = false;   // 開始ボタンの有効化
}
