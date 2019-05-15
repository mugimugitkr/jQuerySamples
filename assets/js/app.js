// 画面の準備が出来たら
$(function() {
  
  // ddmenuの子要素のli にマウスが入ってきたら
  $('.ddmenu li').mouseenter(function() {
    // フォーカスされたliの 小要素を
    $(this).children().slideDown();
  });
})