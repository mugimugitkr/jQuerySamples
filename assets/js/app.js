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


  // 矢印がクリックされたら
  $('.arrow').click(function() {
    // 画面のTopまでスクロールする
    $('html').animate({ scrollTop: 0 }, 1000);
  })




  // 画面がスクロールされたら
  $(window).scroll(function() {
    // 画面のスクロールされた量を取得
    let scrollTop = $(document).scrollTop();
    
    let arrow = $('.arrow');

    // 矢印の表示・非表示を切り替える
    // スクロール量が500を超えたら、矢印を表示
    if (scrollTop > 500) {
      // スクロール量が500を超えたら
      arrow.fadeIn();
    } else {
      // スクロール量が500を超えていない場合
      arrow.fadeOut();
    }

  })

})