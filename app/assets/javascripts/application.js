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
//= require jquery.min
//= require life_game_map
//= require life_game
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

// 世代記憶変数
var generation = 0;

// 繰り返し処理の中身
function showPassage() {
  var msg = '第' + generation + '世代（ No.' + ( life_game_number + 1) + ' : ' + options.name + '）';   // 世代表示文作成
  document.getElementById('PassageArea').innerHTML = msg; // 世代表示更新
  document.getElementById('PassageArea2').innerHTML = life_game.GetMap; // 盤面更新
  generation++;   // カウントアップ
  life_game.UpDate; // 世代交代
}

// 繰り返し処理の開始
function startShowing() {
  PassageID = setInterval('showPassage()', interval);   // 世代交代の間隔の設定
  document.getElementById('startcount').disabled = true;   // 開始ボタンの無効化
}

// 繰り返し処理の中止
function stopShowing() {
  clearInterval( PassageID );   // タイマーのクリア
  document.getElementById('startcount').disabled = false;   // 開始ボタンの有効化
}

// 盤面変更処理
function next_map() {
  generation = 0;
  life_game_number++
  life_game_number = life_game_number%pattern_count
  options.name = pattern[life_game_number];
  life_game = new LifeGame( options );
}

// #########################################################################################
// #########################################################################################
$(function(){
  $('h1').css({
    'background-color': 'lightgreen',
    'color': 'dimgray'
  });
});
