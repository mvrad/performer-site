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
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    focusOnSelect: true,
    autoplay: true,
    arrows: true,
    centerMode: true,
    infinite: true,
    dots: false,
    autoplaySpeed: 3000
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