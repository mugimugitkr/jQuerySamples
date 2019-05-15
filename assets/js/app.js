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


   // 矢印がクリックされたら
  $('.arrow').click(function() {
    // 画面のTopまでスクロールする
    $('html').animate({scrollTop: 0}, 1000);
  });

  // 画面がスクロールされたら
  $(window).scroll(function() {
    
    // 画面のスクロールされた量を取得
    let scrollTop = $(document).scrollTop();

    // 矢印の表示・非表示を切り替える
    // スクロール量が500pxを超えたら、矢印を表示
    if (scrollTop > 500) {
      // スクロール量が500を超えたら
      $('.arrow').fadeIn();
    } else {
      // スクロール量が500を超えていない
      $('.arrow').fadeOut();
    }

    // section2を取得
    let section2 = $('.section2');

    // section2の表示位置（上の部分）を取得
    let section2Top = section2.offset().top;

    if (scrollTop > section2Top - 100) {
      // スクロール量がsection2のTopをこえた場合
      $('.hello-scroll').fadeIn();
    } else {
      // スクロール量がsection2のTopをこえていない場合
      $('.hello-scroll').fadeOut();
    }

  })
});