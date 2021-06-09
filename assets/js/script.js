jQuery(function ($) {

  // ----- NAVBAR SMOOTH SCROLL ----- //

  // MENU SCROLLING WITH ACTIVE ITEM SELECTED

  // Pemilih Cache
  var lastId,
    topMenu = $(".rotect-main-nav"),
    topMenuHeight = topMenu.outerHeight() + 13,
    // Semua Daftar Bagian Item
    menuItems = topMenu.find('a[href^=\\#]'),
    // Menyesuaikan Bagian Item
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  // Animasi Scroll Yang Ditekan Untuk Bagian Item
  menuItems.click(function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 32;
    jQuery('html, body').stop().animate({
      scrollTop: offsetTop
    }, 1500);
    jQuery('.navbar-collapse').removeClass('in');
    e.preventDefault();
  });

  // Proses Scroll
  jQuery(window).scroll(function () {
    // Posisi Scroll Pada Container
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Menyingkirkan Bagian Item Saat Ini
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Mendapat ID Yang Akan Diakses
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove Kelas Yang Aktif
      menuItems
        .parent().removeClass("active")
        .end().filter("[href=\\#" + id + "]").parent().addClass("active");
    }
  });

  // ----- TOP BUTTON SMOOTH SCROLL ----- //

  // Memeriksa apakah penampilan ada di paling atas. Jika tidak, maka munculkan tombol TOP.

  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 300) {
      jQuery('.scrollTopBtn').fadeIn();
    } else {
      jQuery('.scrollTopBtn').fadeOut();
    }
  });

  // Menekan tombol TOP untuk scroll penampilan ke paling atas.

  jQuery('.scrollTopBtn').click(function () {
    jQuery('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  // ----- DEVELOPERS SLICK SLIDER ----- //

  jQuery('.rotect-developers-nav').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});
