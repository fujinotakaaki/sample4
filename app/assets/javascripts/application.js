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

var generation;
// ライフゲームを格納する変数
var life_game;
// 呼び出す盤面（デフォルトはグライダー銃）
// const pattern = ["Clock1", "Clock2", "GliderGun", "Pentadecathlon", "Pinwhell", "Pulsar", "Pulsarx2", "Galaxy",
// 'HertzOscillator', 'Galaxyx2', 'Galaxyx2x', 'Coe\'s_p8', 'Achim\'s_p8', 'Achim\'s_p144', '60P312', 'Mix'];
// const name = pattern[pattern.length-2];
const name = 'Mix';

// １単位時間の設定
const interval = 100;
// オプション（上下左右反転、生死セル表示の変更可。回転はまだ）
var options; //オプションなしがデフォルト（コメントアウト解除でオプションの設定が可能）
options = { alive:'■', dead:'□', upside_down:false, flip:false, rotate:0 };
// options = { alive:'■', flip:true };
// options = { alive:'生', dead:'　', upside_down:false, flip:false, rotate:0 };

// 繰り返し処理の中身
function showPassage() {
  if ( generation != 0 ) { life_game.UpDate; }
  else { life_game = new LifeGame( name, options ); }
  var msg = "第" + generation + "世代（" + name + "）";   // 表示文作成
  var msg1 = life_game.GetMap;

  document.getElementById("PassageArea").innerHTML = msg; // 表示更新
  document.getElementById("PassageArea2").innerHTML = msg1; // 表示更新
  generation++;   // カウントアップ
}

// 繰り返し処理の開始
function startShowing() {
  generation = 0;   // カウンタのリセット
  PassageID = setInterval('showPassage()', 80);   // タイマーをセット(1000ms間隔)
  document.getElementById("startcount").disabled = true;   // 開始ボタンの無効化
}

// 繰り返し処理の中止
function stopShowing() {
  clearInterval( PassageID );   // タイマーのクリア
  document.getElementById("startcount").disabled = false;   // 開始ボタンの有効化
}
