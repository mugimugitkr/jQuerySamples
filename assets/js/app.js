// 画面の準備が出来たら
$(function() {
  
  // ddmenuの子要素のli にマウスが入ってきたら
  $('.ddmenu li').mouseenter(function() {
    // フォーカスされたliの 兄弟が持つul を非表示にする
    $(this).siblings().find('ul').slideUp();
    
    // フォーカスされたliの 小要素を 表示する
    $(this).children().slideDown('slow');
  });

  // 画面のどこかがクリックされたら
  $('html').click(function() {
    $('.ddmenu ul').slideUp();
  });



  // 画面がスクロールされたら
  $(window).scroll(function() {
    // 画面のスクロールされた量を取得
    let scrollTop = $(document).scrollTop();
    console.log(scrollTop);
    // 矢印の表示・非表示を切り替える
  })

})