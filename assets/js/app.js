// 画面の準備が出来たら
$(function() {
  
  // ddmenuの子要素のli にマウスが入ってきたら
  $('.ddmenu li').mouseenter(function() {
    // フォーカスされたliの 兄弟が持つul を非表示にする
    $(this).siblings().find('ul').hide();
    
    // フォーカスされたliの 小要素を 表示する
    $(this).children().slideDown('slow');
  });

  // 画面のどこかがクリックされたら
  $('html').click(function() {

    $('.ddmenu ul').slideUp();
  
  });

})