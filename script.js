(function () {
  // ANNIMATION ON SCROLL INITIALIZE
  AOS.init();

  var navMain = $(".navbar-collapse");

  navMain.on("click", "a", null, function () {
    navMain.collapse("hide");
  });

  $(document).ready(function () {
    $(window).on("scroll", function () {
      //   console.log($(this).scrollTop());
      if ($(this).scrollTop() >= 200) {
        // set to new image
        $(".navbar-brand img").attr("src", "./images/DU.png");
        $(".navbar-brand img").addClass("navbar-brand-img-half");
        $(".navbar-brand img").removeClass("navbar-brand img");
      } else {
        //back to default
        $(".navbar-brand img").attr("src", "./images/DU-FULL.png");
        $(".navbar-brand img").removeClass("navbar-brand-img-half");
        $(".navbar-brand img").addClass("navbar-brand img");
      }
    });
  });
})();
