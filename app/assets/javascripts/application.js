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
//= require life_game_map
//= require life_game

// 秒数カウント用変数
var generation;
// ライフゲームを格納する変数
var life_game;
// 呼び出す盤面（デフォルトはグライダー銃）
const name = 'グライダー銃';
// １単位時間の設定
const interval = 100;
// オプション（反転だけ実装済み、回転はまだ）
const options = { reverse:false }
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
  PassageID = setInterval('showPassage()', interval);   // タイマーをセット(1000ms間隔)
  document.getElementById("startcount").disabled = true;   // 開始ボタンの無効化
}

// 繰り返し処理の中止
function stopShowing() {
  clearInterval( PassageID );   // タイマーのクリア
  document.getElementById("startcount").disabled = false;   // 開始ボタンの有効化
}
