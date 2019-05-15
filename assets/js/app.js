// 画面が準備ができたら
$(function() {

  // ddmenuの子要素のli にマウスが入ってきたら
  $('.ddmenu li').mouseenter(function() {
    // フォーカスされたliの 兄弟が持つul を非表示にする
    $(this).siblings().find('ul').slideUp();


    // フォーカスされたliの 小要素(ul)を 表示する
    $(this).children().slideDown('fast');
  });

  // 画面のどこかがクリックされたら
  $('html').click(function() {
    // ナビゲーションを非表示にする
    $('.ddmenu ul').slideUp();
  });

})