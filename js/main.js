$(function () {
  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar").addClass("navbar-scrol");
    } else {
      $(".navbar").removeClass("navbar-scrol");
    }
  });
});
