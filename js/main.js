//navbar

const bars = document.querySelector('.bars');
const navBar = document.querySelector('#nav-bar');
const dropOne = document.querySelector('.navbar__drop-one');
const dropTwo = document.querySelector('.navbar__drop-two');

bars.addEventListener('click', () => {
  console.log(navBar)
  navBar.classList.toggle('active');
  bars.classList.toggle('rotate');
})

//body

if ($(window).width() < 700) {
  var servicesCardsClass = $('.popular-items section');
  servicesCardsClass.removeClass('services-cards');
  servicesCardsClass.addClass('popular-items__carousel');

}

$('.popular-items__carousel').slick({
  mobileFirst: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<span class="popular-items__priv_arrow"><img src="img/slick-carousel/arrow_1.png"><span>',
  nextArrow: '<span class="popular-items__next_arrow"><img src="img/slick-carousel/arrow_2.png"><span>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
  ]
});

$('.featured-products__carousel').slick({
    mobileFirst: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<span class="featured-products__priv_arrow"><img src="img/slick-carousel/arrow_1.png"><span>',
    nextArrow: '<span class="featured-products__next_arrow"><img src="img/slick-carousel/arrow_2.png"><span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });

if ($(window).width() <= 700) {
  var footerCategoriest = $('.footer-desktop-design__div-list-categoriest');
  footerCategoriest.attr('id', 'collapseOne')

  var footerAbout = $('.footer-desktop-design__div-list-about');
  footerAbout.attr('id', 'collapseTwo')
}

if ($(window).width() > 700) {
  var footerCategoriest = $('.footer-desktop-design__div-list-categoriest');
  footerCategoriest.attr('class', 'show')

  var footerAbout = $('.footer-desktop-design__div-list-about');
  footerAbout.attr('class', 'show')
}

jQuery(function($){
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  $(window).resize(function() {
    if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
      location.reload();
      return;
    }
  });
});