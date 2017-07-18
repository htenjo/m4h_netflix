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
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
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

$(function() {
    $(".video").click(function () {
      var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
      $(theModal).on('hidden.bs.modal', function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
    });
  });
        