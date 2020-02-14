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

// 世代記憶変数（ここで宣言しないと必ずエラーになる）
// 関数内で宣言しても無意味だった（if文でundefinedだったら値を入れる方法も通じなかった）
// ただ、intervalいけた
var generation; //宣言なくてもいけるやん

// 繰り返し処理の中身
function showPassage() {
  var msg = '第' + generation + '世代（' + options.name + '）';   // 世代表示文作成
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
  generation = 0;   // カウンタのリセット（ここでvar宣言するとエラー吐く、宣言しなくてもいけるくせに、、、）
  // if ( isNaN(interval) ) { var interval = 500; }
  // この文があるとエラーintervalがundefined扱いになる（なんで？）
  // なぜかconstだとエラーになる
  PassageID = setInterval('showPassage()', interval);   // タイマーをセット(1000ms間隔)
  document.getElementById('startcount').disabled = true;   // 開始ボタンの無効化
}

// 繰り返し処理の中止
function stopShowing() {
  clearInterval( PassageID );   // タイマーのクリア
  document.getElementById('startcount').disabled = false;   // 開始ボタンの有効化
}

// #########################################################################################
// #########################################################################################
$(function(){
  $('.box1').css({
    'background-color': '#889464',
    'height': '114px',
    'width': '514px'
  });
});
$(function(){
  $('h1').css({
    'background-color': 'forestgreen',
    'color': 'red'
  });
});

$(function() {
  $('.box1').on('click', function() {
    $(this).slideUp(800);
  });
});
