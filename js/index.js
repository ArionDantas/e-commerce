var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    var carouselWidth = $(".carousel-inner .inner-css")[0].scrollWidth;
    var cardWidth = $(".carousel-item .item-css").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next .next-css").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner .inner-css").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev .prev-css").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner .inner-css").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }