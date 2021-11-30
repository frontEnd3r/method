$(document).ready(function () {
  // REVIEWS
  $(".reviews-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    lazyLoad: "ondemand",
    arrows: true,
    prevArrow:
      '<svg class="slick-arrow-prev" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.0775 12.5142C16.3154 12.2646 16.306 11.8686 16.056 11.6308C15.806 11.3927 15.4104 11.4027 15.1722 11.6524L10.625 16.4467L10.625 1.73608C10.625 1.39108 10.345 1.11108 10 1.11108C9.65505 1.11108 9.37505 1.39108 9.37505 1.73608L9.37505 16.4267L4.82755 11.6524C4.58942 11.4024 4.1938 11.3927 3.9438 11.6308C3.81505 11.7536 3.75005 11.9183 3.75005 12.0833C3.75005 12.2383 3.80723 12.3933 3.92255 12.5142L9.1163 17.9671C9.35223 18.2033 9.66598 18.3333 10 18.3333C10.3341 18.3333 10.6479 18.2033 10.8944 17.9561L16.0775 12.5142Z"/></svg>',
    nextArrow:
      '<svg class="slick-arrow-next" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.0775 12.5142C16.3154 12.2646 16.306 11.8686 16.056 11.6308C15.806 11.3927 15.4104 11.4027 15.1722 11.6524L10.625 16.4467L10.625 1.73608C10.625 1.39108 10.345 1.11108 10 1.11108C9.65505 1.11108 9.37505 1.39108 9.37505 1.73608L9.37505 16.4267L4.82755 11.6524C4.58942 11.4024 4.1938 11.3927 3.9438 11.6308C3.81505 11.7536 3.75005 11.9183 3.75005 12.0833C3.75005 12.2383 3.80723 12.3933 3.92255 12.5142L9.1163 17.9671C9.35223 18.2033 9.66598 18.3333 10 18.3333C10.3341 18.3333 10.6479 18.2033 10.8944 17.9561L16.0775 12.5142Z"/></svg>',
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });



  // BLOG SLIDER
  $(".blog .blog-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    lazyLoad: "ondemand",
    arrows: true,
    prevArrow:
      '<svg class="slick-arrow-prev" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.0775 12.5142C16.3154 12.2646 16.306 11.8686 16.056 11.6308C15.806 11.3927 15.4104 11.4027 15.1722 11.6524L10.625 16.4467L10.625 1.73608C10.625 1.39108 10.345 1.11108 10 1.11108C9.65505 1.11108 9.37505 1.39108 9.37505 1.73608L9.37505 16.4267L4.82755 11.6524C4.58942 11.4024 4.1938 11.3927 3.9438 11.6308C3.81505 11.7536 3.75005 11.9183 3.75005 12.0833C3.75005 12.2383 3.80723 12.3933 3.92255 12.5142L9.1163 17.9671C9.35223 18.2033 9.66598 18.3333 10 18.3333C10.3341 18.3333 10.6479 18.2033 10.8944 17.9561L16.0775 12.5142Z"/></svg>',
    nextArrow:
      '<svg class="slick-arrow-next" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.0775 12.5142C16.3154 12.2646 16.306 11.8686 16.056 11.6308C15.806 11.3927 15.4104 11.4027 15.1722 11.6524L10.625 16.4467L10.625 1.73608C10.625 1.39108 10.345 1.11108 10 1.11108C9.65505 1.11108 9.37505 1.39108 9.37505 1.73608L9.37505 16.4267L4.82755 11.6524C4.58942 11.4024 4.1938 11.3927 3.9438 11.6308C3.81505 11.7536 3.75005 11.9183 3.75005 12.0833C3.75005 12.2383 3.80723 12.3933 3.92255 12.5142L9.1163 17.9671C9.35223 18.2033 9.66598 18.3333 10 18.3333C10.3341 18.3333 10.6479 18.2033 10.8944 17.9561L16.0775 12.5142Z"/></svg>',
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // PARTY SLIDER
  $(".party-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    lazyLoad: "ondemand",
    arrows: true,
    prevArrow:
      '<svg class="slick-arrow-prev" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.0775 12.5142C16.3154 12.2646 16.306 11.8686 16.056 11.6308C15.806 11.3927 15.4104 11.4027 15.1722 11.6524L10.625 16.4467L10.625 1.73608C10.625 1.39108 10.345 1.11108 10 1.11108C9.65505 1.11108 9.37505 1.39108 9.37505 1.73608L9.37505 16.4267L4.82755 11.6524C4.58942 11.4024 4.1938 11.3927 3.9438 11.6308C3.81505 11.7536 3.75005 11.9183 3.75005 12.0833C3.75005 12.2383 3.80723 12.3933 3.92255 12.5142L9.1163 17.9671C9.35223 18.2033 9.66598 18.3333 10 18.3333C10.3341 18.3333 10.6479 18.2033 10.8944 17.9561L16.0775 12.5142Z"/></svg>',
    nextArrow:
      '<svg class="slick-arrow-next" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.0775 12.5142C16.3154 12.2646 16.306 11.8686 16.056 11.6308C15.806 11.3927 15.4104 11.4027 15.1722 11.6524L10.625 16.4467L10.625 1.73608C10.625 1.39108 10.345 1.11108 10 1.11108C9.65505 1.11108 9.37505 1.39108 9.37505 1.73608L9.37505 16.4267L4.82755 11.6524C4.58942 11.4024 4.1938 11.3927 3.9438 11.6308C3.81505 11.7536 3.75005 11.9183 3.75005 12.0833C3.75005 12.2383 3.80723 12.3933 3.92255 12.5142L9.1163 17.9671C9.35223 18.2033 9.66598 18.3333 10 18.3333C10.3341 18.3333 10.6479 18.2033 10.8944 17.9561L16.0775 12.5142Z"/></svg>',
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // GALLERY SLIDER
  $(".gallery-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    lazyLoad: "ondemand",
    prevArrow:
      '<svg class="slick-arrow-prev" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.0775 12.5142C16.3154 12.2646 16.306 11.8686 16.056 11.6308C15.806 11.3927 15.4104 11.4027 15.1722 11.6524L10.625 16.4467L10.625 1.73608C10.625 1.39108 10.345 1.11108 10 1.11108C9.65505 1.11108 9.37505 1.39108 9.37505 1.73608L9.37505 16.4267L4.82755 11.6524C4.58942 11.4024 4.1938 11.3927 3.9438 11.6308C3.81505 11.7536 3.75005 11.9183 3.75005 12.0833C3.75005 12.2383 3.80723 12.3933 3.92255 12.5142L9.1163 17.9671C9.35223 18.2033 9.66598 18.3333 10 18.3333C10.3341 18.3333 10.6479 18.2033 10.8944 17.9561L16.0775 12.5142Z"/></svg>',
    nextArrow:
      '<svg class="slick-arrow-next" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.0775 12.5142C16.3154 12.2646 16.306 11.8686 16.056 11.6308C15.806 11.3927 15.4104 11.4027 15.1722 11.6524L10.625 16.4467L10.625 1.73608C10.625 1.39108 10.345 1.11108 10 1.11108C9.65505 1.11108 9.37505 1.39108 9.37505 1.73608L9.37505 16.4267L4.82755 11.6524C4.58942 11.4024 4.1938 11.3927 3.9438 11.6308C3.81505 11.7536 3.75005 11.9183 3.75005 12.0833C3.75005 12.2383 3.80723 12.3933 3.92255 12.5142L9.1163 17.9671C9.35223 18.2033 9.66598 18.3333 10 18.3333C10.3341 18.3333 10.6479 18.2033 10.8944 17.9561L16.0775 12.5142Z"/></svg>',
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // FIRST SLIDER
  $(".first-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    prevArrow: $(".first-arrow-prev"),
    nextArrow: $(".first-arrow-next"),
    infinite: true,
  });

  // FIRST SLIDER NAVIGATION
  var firstSlides = $(".slick-slide:last-child .first-slide").attr(
    "data-target"
  );
  $(".first-numbers__num:not(.active):not(.slash)").text("0" + firstSlides);

  $(".first-slider").on("afterChange", function () {
    var current = $(".first .slick-active .first-slide").attr("data-target");
    $(".first-numbers__num.active").text("0" + current);
  });


  // Slider meth reviews
  $(".meth-reviews-slider").slick({
    centerMode: true,
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: true,
    speed: 900,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          centerMode: false,
          //   adaptiveHeight: false,
          speed: 300,
        },
      },
    ],
  });

  /**
   * Slick mobile adaptive height fixer
   *
   */

  if (window.innerWidth <= 1200) {
    function fixSliderHeight() {
      var currentHeight = $(
        ".meth-reviews-slider .slick-current .meth-reviews-slider-slide__inner"
      ).height();
      currentHeight += 70;
      $(".meth-reviews-slider .slick-track").height(currentHeight);
      $(".meth-reviews-slider").height(currentHeight);
      $(".meth-reviews-slider .slick-list.draggable").height(currentHeight);
      $(".meth-reviews-slider-slide.slick-slide").height(currentHeight);
    }
    $(".meth-reviews-slider").on("afterChange", function () {
      fixSliderHeight();
    });
    fixSliderHeight();
  }

  /**
   * Opacity effect and offset for next and prev slides
   */
  $(".meth-reviews-slider").on("beforeChange", function () {
    var currentSlide = $(this).slick("slickCurrentSlide") + 1;
    var nextSlide = currentSlide + 1;
    var prevSlide = currentSlide - 1;
    setTimeout(function () {
      $(".meth-reviews-slider-slide--next").removeClass(
        "meth-reviews-slider-slide--next"
      );
      $(".meth-reviews-slider-slide--prev").removeClass(
        "meth-reviews-slider-slide--prev"
      );

      $(".slick-slide.slick-current")
        .next()
        .addClass("meth-reviews-slider-slide--next");
      $(".slick-slide.slick-current")
        .next()
        .next()
        .addClass("meth-reviews-slider-slide--next");
      $(".slick-slide.slick-current")
        .prev()
        .addClass("meth-reviews-slider-slide--prev");
      $(".slick-slide.slick-current")
        .prev()
        .prev()
        .addClass("meth-reviews-slider-slide--prev");
    }, 100);
    console.log(prevSlide, currentSlide, nextSlide);
  });
  $('.slick-slide[data-slick-index="-1"]').addClass(
    "meth-reviews-slider-slide--prev"
  );
  $('.slick-slide[data-slick-index="1"]').addClass(
    "meth-reviews-slider-slide--next"
  );

  $(".meth-pack-slider").slick({
    infinite: false,
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 991,
        settings: "unslick",
      },
    ],
  });

  
});
