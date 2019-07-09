$(() => {
  "use strict";
  // Hamburger menu
  const $hamburger = $(".hamburger");
  $hamburger.on("click", (e) => {
    $hamburger.toggleClass("is-active");
    $("#myDropdown").toggle("slow");
    $(this).toggleClass("dropdown-content");
  });
  // Photo slider
  $(".slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    focusOnSelect: true,
    autoplay: true,
    arrows: true,
    infinite: true,
    autoplaySpeed: 3000,
    dots: true,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 900,
        settings: {
          dots: false,
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ],
  });
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 5,
    arrows: false,
    fade: true,
    centerMode: true,
    infinite: true,
    asNavFor: ".slider-nav",
  });
  // Dynamic copyright year
  $("#year").html(new Date().getFullYear());
});