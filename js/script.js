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
    dots: false,
    focusOnSelect: true,
    autoplay: true,
    centerMode: true,
    arrows: false,
    infinite: true,
    dots: true,
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