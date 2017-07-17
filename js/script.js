function openMenu() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeMenu() {
    document.getElementById("mySidenav").style.width = "0";
}

function assignQR(socialIcon){
  var icon = document.getElementById('qr-icon-src');
  icon.src = "img/qr_" + socialIcon + ".png";
}


$(document).ready(function(){
  $('.slider-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          breakpoint: 768,
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
        