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
//= require life_game_map
//= require life_game
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

// #########################################################################################
// 世代記憶変数
var generation;
// ##########使用する盤面の設定（デフォルトはグライダー銃）##########
const name = 'Mix';
// const pattern = ['Clock1', 'Clock2', 'GliderGun', 'Pentadecathlon', 'Pinwhell', 'Pulsar', 'Pulsarx2', 'Galaxy',
// 'HertzOscillator', 'Galaxyx2', 'Galaxyx2x', 'Coe\'s_p8', 'Achim\'s_p8', 'Achim\'s_p144', '60P312', 'Mix'];
// const name = pattern[pattern.length-1];

// ##########オプション（上下左右反転、生死セル表示の変更可。回転はまだ）##########
var options = new Object; //オプションなしがデフォルト（コメントアウト解除でオプションの設定が可能）
// options = { alive:'#', dead:'.', upside_down:false, flip:false, rotate:0 }; // 実装済みオプションとデフォルト値
options = { alive:'■', dead:'□' }; // ■□マス表示
// options = { alive:'■', flip:true };
// options = { alive:'生', dead:'　' }; // 生きてるセルだけ表示
// 単独設定
// options.alive = '生'; // 生状態セル表示
// options.dead = '　'; // 死状態セル表示
options.upside_down = true; // 上下反転表示
options.flip = true; // 左右反転表示
// options.rotate = 0; // 回転表示（反時計回りに options.rotate x 90度回転）

// ##########世代交代のインターバル設定##########
const interval = 100;

// ライフゲームを格納する変数
var life_game = new LifeGame( name, options );
// #########################################################################################

// 繰り返し処理の中身
function showPassage() {
  var msg = '第' + generation + '世代（' + name + '）';   // 世代表示文作成
  document.getElementById('PassageArea').innerHTML = msg; // 世代表示更新
  document.getElementById('PassageArea2').innerHTML = life_game.GetMap; // 盤面更新
  generation++;   // カウントアップ
  life_game.UpDate; // 世代交代
  // for ( let i = 0; i<3; i++ ) {// スキップ処理
  //   generation++;
  //   life_game.UpDate;
  // }
}

// 繰り返し処理の開始
function startShowing() {
  generation = 0;   // カウンタのリセット
  PassageID = setInterval('showPassage()', interval);   // タイマーをセット(1000ms間隔)
  document.getElementById('startcount').disabled = true;   // 開始ボタンの無効化
}

// 繰り返し処理の中止
function stopShowing() {
  clearInterval( PassageID );   // タイマーのクリア
  document.getElementById('startcount').disabled = false;   // 開始ボタンの有効化
}
