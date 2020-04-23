$(function () {
    $(document).scroll(function () {
        //defines $nav as the css class bg-light
        var $nav = $(".bg-transparent");
        //defines $navLink as the css class a.nav-link
        var $navLink = $("a.nav-link");
        //defines $navBrand as the css class .navbar-brand
        var $navBrand = $(".navbar-brand");
        //adds the scrolled css class to the bg-light css class when the user has
        //scrolled further than the navbar's height.
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $navLink.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $navBrand.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  