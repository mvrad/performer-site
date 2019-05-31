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
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: ".slider-for",
    focusOnSelect: true,
    autoplay: true,
    arrows: true,
    centerMode: true,
    centerPadding: '100px',
    infinite: true,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false
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