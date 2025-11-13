$(function () {
  $("#main-content button").on("mouseenter", function () {
    const logo = $(this).find("svg path");
    logo.attr("fill", "#000000");
  });

  $("#main-content button").on("mouseleave", function () {
    const logo = $(this).find("svg path");
    logo.attr("fill", "#ffffff");
  });

  $("#menu .nav-link").on("click", function (e) {
    const target = $(this).attr("href");
    const offset = $(target).offset().top - $(".navbar").outerHeight();

    e.preventDefault();

    $("html, body").animate({ scrollTop: offset }, function () {
      $(".navbar-collapse").collapse("hide");
    });
  });
});
