$(document).ready(function () {
  // SERVICES PRICE
  $(".price-wrap-row__check").on("click", function () {
    var attr = $(this).attr("data-target");

    $(this).toggleClass("active").trigger("classChange");

    $(this)
      .parent()
      .parent()
      .find(".price-wrap-row__input")
      .toggleClass("active");

    $(this).parent().parent().toggleClass('checked');

    if (attr == "price-all" && $(this).hasClass("active")) {
      $(".price-wrap-row__check").addClass("active");
      $(".price-wrap-row__input").addClass("active");
    } else if (attr == "price-all") {
      $(".price-wrap-row__check").removeClass("active");
      $(".price-wrap-row__input").removeClass("active");
    }
  });

  function makeMoney(num) {
    return num.toLocaleString("ru-RU");
  }

  function changeSumCheck(element, price, count) {
    var active = element.hasClass("active");

    var sum = parseInt(
      $(".price-wrap-bottom-wrap__price span").html().replace(/\D/g, "")
    );

    if (active) {
      sum += price * count;
    } else {
      sum -= price * count;
    }

    $(".price-wrap-bottom-wrap__price span").html(makeMoney(sum));

    if (sum > 0) {
      $('.price-wrap-bottom__btn').prop('disabled', false);
    } else {
      $('.price-wrap-bottom__btn').prop('disabled', true);
    }

    return null;
  }

  function changeSumInput(element, price) {
    var active = element.siblings(".price-wrap-row__input").hasClass("active");

    if (active) {
      var plus = element.hasClass("price-plus");

      var sum = parseInt(
        $(".price-wrap-bottom-wrap__price span").html().replace(/\D/g, "")
      );

      if (plus) {
        sum += price;
      } else {
        sum -= price;
      }

      $(".price-wrap-bottom-wrap__price span").html(makeMoney(sum));
    }

    return null;
  }

  function changePriceCheck(element, price, count) {
    var active = element.hasClass("active");

    if (active) {
      element
        .parent()
        .parent()
        .find(".price-sum span")
        .html(makeMoney(price * count));
    } else {
      element.parent().parent().find(".price-sum span").html("0");
    }

    return null;
  }

  function changePriceInput(element, price, count) {
    var active = element.siblings(".price-wrap-row__input").hasClass("active");

    if (active) {
      element
        .parent()
        .parent()
        .find(".price-sum span")
        .html(makeMoney(price * count));
    }

    return null;
  }

  $(".price-wrap-row__check").on("classChange", function () {
    var price = parseInt(
      $(this)
        .parent()
        .parent()
        .find(".price-wrap-row__price--price")
        .html()
        .replace(/\D/g, "")
    );

    var count = parseInt(
      $(this).parent().parent().find(".price-wrap-row__input").html()
    );

    changePriceCheck($(this), price, count);
    changeSumCheck($(this), price, count);
  });

  $(".price-plus").on("click", function () {
    var price = parseInt(
      $(this)
        .parent()
        .parent()
        .find(".price-wrap-row__price--price")
        .html()
        .replace(/\D/g, "")
    );

    var count = parseInt($(this).siblings(".price-wrap-row__input").html());
    count += 1;

    $(this).siblings(".price-wrap-row__input").html(count);

    changePriceInput($(this), price, count);
    changeSumInput($(this), price);
  });

  $(".price-minus").on("click", function () {
    var price = parseInt(
      $(this)
        .parent()
        .parent()
        .find(".price-wrap-row__price--price")
        .html()
        .replace(/\D/g, "")
    );

    var count = parseInt($(this).siblings(".price-wrap-row__input").html());

    if (count > 1) {
      count -= 1;

      $(this).siblings(".price-wrap-row__input").html(count);

      changePriceInput($(this), price, count);
      changeSumInput($(this), price);
    }
  });

  // NEXT STEP
  $('.price-wrap-bottom__btn').on('click', function () {
    $('.price-wrap-row__check').slideToggle();
    $('.price-wrap-row__btn').slideToggle();
    $('.price-wrap__img').slideToggle();
    $('.price-wrap-row__input').toggleClass('active');
    $('.price-wrap-row:not(.price-wrap-row--head):not(.checked)').slideToggle();

    $('.price-wrap-bottom__prev').slideToggle();
    $('.price-wrap-bottom__btn').slideToggle();

    $('.price-row-wrap').slideToggle();
  });

  // PREV STEP
  $('.price-wrap-bottom__prev').on('click', function () {
    $('.price-wrap-row__check').slideToggle();
    $('.price-wrap-row__btn').slideToggle();
    $('.price-wrap__img').slideToggle();
    $('.price-wrap-row__input').toggleClass('active');
    $('.price-wrap-row:not(.price-wrap-row--head):not(.checked)').slideToggle();

    $('.price-wrap-bottom__prev').slideToggle();
    $('.price-wrap-bottom__btn').slideToggle();

    $('.price-row-wrap').slideToggle();
  });


});
