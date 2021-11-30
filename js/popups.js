$(document).ready(function () {
  var utm = $('#utm').val();

  //   function getCookie(name) {
  //     var matches = document.cookie.match(new RegExp(
  //     "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  //     ));
  //     return matches ? decodeURIComponent(matches[1]) : undefined;
  //   }

  //   function writeCookie() {
  //       var date = new Date;
  //       date.setDate(date.getDate() + 1);    
  //       document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();        
  //   }

  //   var alertwin = getCookie("alertwin");
  //   if ($('body').hasClass('page-template-page-party')) {
  //   // alertwin != "no" && 
  // 	  var open_sale_count = 0; 

  //       $(document).mouseleave(function(e){
  //           if (open_sale_count < 1) {
  //               $(".popups").fadeIn().css("display", "flex");
  //       		  $(".popup[data-target=order-party]").fadeIn(); 
  //               writeCookie();
  // 			  open_sale_count = 1;
  //           }    
  //       }); 

  // 	  window.setTimeout(function() {
  // 		  if (open_sale_count < 1) {
  // 			  $(".popups").fadeIn().css("display", "flex");
  // 			  $(".popup[data-target=order-party]").fadeIn(); 
  // 			  writeCookie();
  // 			  open_sale_count = 1;
  // 		  }
  //       }, 40000);
  //   }

  function sendParty(title, name, lastname, tel) {
    if (title == undefined) {
      title = "";
    }
    if (name == undefined) {
      name = "";
    }
    if (lastname == undefined) {
      lastname = "";
    }
    if (tel == undefined) {
      tel = "";
    }

    $.ajax({
      url: "https://prosovetnik.com/send-party.php",
      type: "post",
      dataType: "json",
      data: {
        name: name,
        lastname: lastname,
        tel: tel,
        title: title,
        utm: utm,
      },
      success: function (data) { },
    });

    location = "https://prosovetnik.com/thanks/";
  }

  function sendOrderCall(title, name, tel, messenger) {
    if (title == undefined) {
      title = "";
    }
    if (name == undefined) {
      name = "";
    }
    if (tel == undefined) {
      tel = "";
    }
    if (messenger == undefined) {
      messenger = "";
    }

    $.ajax({
      url: "https://prosovetnik.com/order-call.php",
      type: "post",
      dataType: "json",
      data: {
        name: name,
        tel: tel,
        messenger: messenger,
        title: title,
        utm: utm,
      },
      success: function (data) { },
    });

    $(".popup").hide();
    $(".quiz").hide();
    $(".popup[data-target=popup-thanks]").fadeIn();
  }

  function sendTest(title, name, tel, messenger, result) {
    if (title == undefined) {
      title = "";
    }
    if (name == undefined) {
      name = "";
    }
    if (tel == undefined) {
      tel = "";
    }
    if (messenger == undefined) {
      messenger = "";
    }
    if (result == undefined) {
      result = "";
    }

    $.ajax({
      url: "https://prosovetnik.com/order-test.php",
      type: "post",
      dataType: "json",
      data: {
        name: name,
        tel: tel,
        messenger: messenger,
        result: result,
        title: title,
        utm: utm,
      },
      success: function (data) { },
    });

    $(".popup").hide();
    $(".quiz").hide();
    $(".popup[data-target=popup-thanks]").fadeIn();
  }

  function sendQuestion(title, name, lastname, tel) {
    if (title == undefined) {
      title = "";
    }
    if (name == undefined) {
      name = "";
    }
    if (tel == undefined) {
      tel = "";
    }
    if (lastname == undefined) {
      lastname = "";
    }

    $.ajax({
      url: "https://prosovetnik.com/order-question.php",
      type: "post",
      dataType: "json",
      data: {
        name: name,
        lastname: lastname,
        tel: tel,
        title: title,
        utm: utm,
      },
      success: function (data) { },
    });

    $(".popup").hide();
    $(".quiz").hide();
    $(".popups").fadeIn().css("display", "flex");
    $(".popup[data-target=popup-thanks]").fadeIn();
  }

  function sendUs(title, name, city, tel, email, message) {
    if (title == undefined) {
      title = "";
    }
    if (name == undefined) {
      name = "";
    }
    if (tel == undefined) {
      tel = "";
    }
    if (city == undefined) {
      city = "";
    }
    if (email == undefined) {
      email = "";
    }
    if (message == undefined) {
      message = "";
    }

    $.ajax({
      url: "https://prosovetnik.com/order-us.php",
      type: "post",
      dataType: "json",
      data: {
        name: name,
        city: city,
        tel: tel,
        email: email,
        title: title,
        message: message,
        utm: utm,
      },
      success: function (data) { },
    });

    $(".popup").hide();
    $(".quiz").hide();
    $(".popups").fadeIn().css("display", "flex");
    $(".popup[data-target=popup-thanks]").fadeIn();
  }

  function sendConsult(
    title,
    name,
    lastname,
    tel,
    messenger,
    service,
    advisor
  ) {
    if (title == undefined) {
      title = "";
    }
    if (name == undefined) {
      name = "";
    }
    if (lastname == undefined) {
      lastname = "";
    }
    if (tel == undefined) {
      tel = "";
    }
    if (messenger == undefined) {
      messenger = "";
    }
    if (service == undefined) {
      service = "";
    }
    if (advisor == undefined) {
      advisor = "";
    }

    $.ajax({
      url: "https://prosovetnik.com/order-consult.php",
      type: "post",
      dataType: "json",
      data: {
        name: name,
        lastname: lastname,
        tel: tel,
        messenger: messenger,
        title: title,
        service: service,
        advisor: advisor,
        utm: utm,
      },
      success: function (data) { },
    });

    $(".popup").hide();
    $(".quiz").hide();
    $(".popup[data-target=popup-thanks]").fadeIn();
  }

  function sendConsultPay(
    title,
    name,
    lastname,
    tel,
    service,
    advisor,
    type,
    promocode,
    sum,
    stock
  ) {
    if (title == undefined) {
      title = "";
    }
    if (name == undefined) {
      name = "";
    }
    if (lastname == undefined) {
      lastname = "";
    }
    if (tel == undefined) {
      tel = "";
    }
    if (service == undefined) {
      service = "";
    }
    if (advisor == undefined) {
      advisor = "";
    }
    if (type == undefined) {
      type = "";
    }
    if (promocode == undefined) {
      promocode = "";
    }
    if (sum == undefined) {
      sum = "";
    }
    if (stock == undefined) {
      stock = "";
    }

    $.ajax({
      url: "https://prosovetnik.com/pay-consult.php",
      type: "post",
      dataType: "json",
      data: {
        name: name,
        lastname: lastname,
        tel: tel,
        title: title,
        service: service,
        advisor: advisor,
        type: type,
        promocode: promocode,
        sum: sum,
        stock: stock,
        utm: utm,
      },
      success: function (data) { },
    });

    closePopups();
  }

  function sendCalc(
    title,
    name,
    lastname,
    tel,
    email,
    city,
    services,
    advisor,
    sum
  ) {
    if (title == undefined) {
      title = "";
    }
    if (name == undefined) {
      name = "";
    }
    if (lastname == undefined) {
      lastname = "";
    }
    if (tel == undefined) {
      tel = "";
    }
    if (email == undefined) {
      email = "";
    }
    if (city == undefined) {
      city = "";
    }
    if (services == undefined) {
      services = "";
    }
    if (advisor == undefined) {
      advisor = "";
    }
    if (sum == undefined) {
      sum = "";
    }

    $.ajax({
      url: "https://prosovetnik.com/send-calc.php",
      type: "post",
      dataType: "json",
      data: {
        name: name,
        lastname: lastname,
        tel: tel,
        email: email,
        city: city,
        title: title,
        advisor: advisor,
        sum: sum,
        services: services,
        utm: utm,
      },
      success: function (data) { },
    });

    $(".popup").hide();
    $(".quiz").hide();
    $(".popups").fadeIn().css("display", "flex");
    $(".popup[data-target=popup-thanks]").fadeIn();
  }

  function closePopups() {
    $(".popup").hide();
    $(".quiz").hide();
    $(".popups").fadeOut();

    // RESET QUIZ 
    quizBalance = 0;
    quizUserName = "";
    quizResult = "";
    $(".quiz:not([data-target=quiz-final]) .quiz-choice").removeClass('active');
    $(".quiz .quiz-card").removeClass('active');
    $(".quiz .quiz-start-form")[0].reset();
    $(".quiz .quiz-form")[0].reset();

    $(".quiz-wrap__name").text('');
    $(".quiz-wrap__result").text('');
    $(".quiz-wrap__line-title").text('');
    $(".quiz-wrap__desc").hide();
  }


  // POPUPS CLOSE AND OPEN
  $(".popup__close").on("click", function () {
    closePopups();
  });

  $(".popup__close-btn").on("click", function () {
    closePopups();
  });

  $(".popups-overlay").on("click", function () {
    closePopups();
  });

  $(".popup-open").on("click", function () {
    var target = $(this).attr("data-target");

    if (target) {
      $(".popup").hide();

      $(".popups").fadeIn().css("display", "flex");
      $(".popup[data-target=" + target + "]").fadeIn();
    }
  });

  // ORDER CALL
  $(".popup[data-target=order-call] .popup-form").on("submit", function (e) {
    e.preventDefault();

    var title = $(this).parent().attr("data-meta");
    var user_name = $(this).find("input[name=user-name]").val();
    var user_tel = $(this).find("input[name=user-tel]").val();
    var user_choice = $(this)
      .find(".popup-form-choice-card.active")
      .attr("data-target");

    sendOrderCall(title, user_name, user_tel, user_choice);
    ym(76990609, "reachGoal", "order-call");

    $(this)[0].reset();
    return false;
  });

  // QUIZ
  $(".quiz-form").on("submit", function (e) {
    e.preventDefault();

    var title = $(this).attr("data-meta");
    var user_name = $(this).parent().parent().find(".quiz-wrap__name").text();
    var user_result = $(this)
      .parent()
      .parent()
      .find(".quiz-wrap__result")
      .text();
    var user_tel = $(this).find("input[name=user-tel]").val();
    var user_messenger = $(this)
      .find(".quiz-choice.active")
      .attr("data-target");

    sendTest(title, user_name, user_tel, user_messenger, user_result);
    ym(76990609, "reachGoal", "final-test");

    $(this)[0].reset();
    return false;
  });

  // QUESTION
  $(".question .question-form").on("submit", function (e) {
    e.preventDefault();

    var title = $(this).attr("data-meta");
    var user_name = $(this).find("input[name=user-name]").val();
    var user_lastname = $(this).find("input[name=user-lastname]").val();
    var user_tel = $(this).find("input[name=user-tel]").val();

    sendQuestion(title, user_name, user_lastname, user_tel);
    ym(76990609, "reachGoal", "order-question");

    $(this)[0].reset();
    return false;
  });

  // WRITE US
  $(".write .popup-form").on("submit", function (e) {
    e.preventDefault();

    var title = $(this).attr("data-meta");
    var user_name = $(this).find("input[name=user-name]").val();
    var user_tel = $(this).find("input[name=user-tel]").val();
    var user_city = $(this).find("input[name=user-city]").val();
    var user_email = $(this).find("input[name=user-email]").val();
    var user_message = $(this).find(".popup-form__textarea").val();

    sendUs(title, user_name, user_city, user_tel, user_email, user_message);
    ym(76990609, "reachGoal", "write-us");

    $(this)[0].reset();
    return false;
  });

  // CONSULT
  $(".popup[data-target=order-consult] .popup-form").on("submit", function (e) {
    e.preventDefault();

    var title = $(this).parent().attr("data-meta");
    var user_name = $(this).find("input[name=user-name]").val();
    var user_lastname = $(this).find("input[name=user-lastname]").val();
    var user_tel = $(this).find("input[name=user-tel]").val();
    var user_choice = $(this)
      .find(".popup-form-choice-card.active")
      .attr("data-target");

    var service = $(this).parent().attr("data-service");

    if (service == "services") {
      sendConsult(
        title,
        user_name,
        user_lastname,
        user_tel,
        user_choice,
        title,
        "Без советника"
      );
      ym(76990609, "reachGoal", "order-consult-services");
    }

    if (service == "team") {
      sendConsult(
        title,
        user_name,
        user_lastname,
        user_tel,
        user_choice,
        "Финансовая консультация",
        title
      );
      ym(76990609, "reachGoal", "order-consult-advisors");
    }

    if (service !== "team" && service !== "services") {
      sendConsult(
        title,
        user_name,
        user_lastname,
        user_tel,
        user_choice,
        "Финансовая консультация",
        "Без советника"
      );
      ym(76990609, "reachGoal", "order-consult");
    }

    $(this)[0].reset();
    return false;
  });

  // CONSULT PAY
  $(".popup[data-target=order-pay] .popup-form").on("submit", function (e) {
    e.preventDefault();

    var title = $(this).parent().parent().attr("data-meta");
    var user_name = $(this).find("input[name=user-name]").val();
    var user_lastname = $(this).find("input[name=user-lastname]").val();
    var user_tel = $(this).find("input[name=user-tel]").val();
    var service = $(this).parent().parent().attr("data-service");
    var type = $(this).find(".quiz-choice.active").attr("data-target");
    var promocode = $(this).find(".popup-form-promo .quiz__input").val();
    var sum = $(this).find(".sum").text();
    var stock = $(this).find(".stock").text();

    if (service == "services") {
      sendConsultPay(
        title,
        user_name,
        user_lastname,
        user_tel,
        title,
        "Без советника",
        type,
        promocode,
        sum,
        stock
      );
      ym(76990609, "reachGoal", "pay-consult-services");
    }

    if (service == "team") {
      sendConsultPay(
        title,
        user_name,
        user_lastname,
        user_tel,
        "Финансовая консультация",
        title,
        type,
        promocode,
        sum,
        stock
      );
      ym(76990609, "reachGoal", "pay-consult-advisors");
    }

    if (type == 'рассрочка') {

      if (service == "team") {
        service = "Финансовая консультация";
      } else {
        service = title;
      }

      tinkoff.create(
        {
          shopId: 'f5635e08-2c70-4377-83a3-0558f3ff6b77',
          showcaseId: 'a66f91f3-a803-4be3-a691-ef94ceac037a',
          promoCode: 'default',
          items: [
            { name: service, price: sum, quantity: 1 },
          ],
          sum: sum
        },
        { view: 'newTab' }
      );
    }

    if (type == 'онлайн') {
      pay(this);
    }

    $(this)[0].reset();
    return false;
  });

  // ADVISOR CONSULT
  $(".popup[data-target=order-pay-2] .popup-form").on("submit", function (e) {
    e.preventDefault();

    var title = $(this).parent().parent().attr("data-meta");
    var user_name = $(this).find("input[name=user-name]").val();
    var user_lastname = $(this).find("input[name=user-lastname]").val();
    var user_tel = $(this).find("input[name=user-tel]").val();
    var type = $(this).find(".quiz-choice.active").attr("data-target");
    var promocode = $(this).find(".popup-form-promo .quiz__input").val();
    var sum = $(this).find(".sum").text();
    var stock = $(this).find(".stock").text();

    sendConsultPay(
      title,
      user_name,
      user_lastname,
      user_tel,
      "Финансовая консультация",
      title,
      type,
      promocode,
      sum,
      stock
    );
    ym(76990609, "reachGoal", "pay-consult-services");

    if (type == 'рассрочка') {
      tinkoff.create(
        {
          shopId: 'f5635e08-2c70-4377-83a3-0558f3ff6b77',
          showcaseId: 'a66f91f3-a803-4be3-a691-ef94ceac037a',
          promoCode: 'default',
          items: [
            { name: 'Финансовая консультация', price: sum, quantity: 1 },
          ],
          sum: sum
        },
        { view: 'newTab' }
      );
    }

    if (type == 'онлайн') {
      pay(this);
    }

    $(this)[0].reset();
    return false;
  });

  // PARTY FORM
  $(".party-action-form").on("submit", function (e) {
    e.preventDefault();

    var title = $(this).attr("data-meta");
    var user_name = $(this).find("input[name=user-name]").val();
    var user_lastname = $(this).find("input[name=user-lastname]").val();
    var user_tel = $(this).find("input[name=user-tel]").val();

    sendParty(title, user_name, user_lastname, user_tel);
    ym(76990609, "reachGoal", "send-party");

    $(this)[0].reset();
    return false;
  });

  $(".popup[data-target=order-party] .popup-form").on("submit", function (e) {
    e.preventDefault();

    var title = $(this).attr("data-meta");
    var user_name = $(this).find("input[name=user-name]").val();
    var user_lastname = $(this).find("input[name=user-lastname]").val();
    var user_tel = $(this).find("input[name=user-tel]").val();

    sendParty(title, user_name, user_lastname, user_tel);
    ym(76990609, "reachGoal", "send-party");

    $(this)[0].reset();
    return false;
  });

  // CALC FORM
  $(".price-row-form").on("submit", function (e) {
    e.preventDefault();

    var title = $(this).attr("data-meta");
    var user_name = $(this).find("input[name=user-name]").val();
    var user_lastname = $(this).find("input[name=user-lastname]").val();
    var user_tel = $(this).find("input[name=user-tel]").val();
    var user_email = $(this).find("input[name=user-email]").val();
    var user_city = $(this).find("input[name=user-city]").val();

    var sum = parseInt(
      $(this)
        .parent()
        .parent()
        .find(".price-wrap-bottom-wrap__price span")
        .text()
        .replace(/\D/g, "")
    );

    var result = [];

    function createResult(parent, items) {
      var length = items.length;

      for (var i = 0; i < length; i++) {
        parent.push(
          $(items[i]).find(".price-wrap-row__service").text() + ' ' +
          $(items[i]).find(".price-wrap-row__input").text() + ' шт. по ' +
          $(items[i]).find(".price-wrap-row__price--price").text() + ' руб.'
        );
      }
    }

    createResult(result, $(".price-wrap-row.checked"));

    var services = result.join();

    sendCalc(
      title,
      user_name,
      user_lastname,
      user_tel,
      user_email,
      user_city,
      services,
      title,
      sum
    );
    ym(76990609, "reachGoal", "send-calc");

    $(this)[0].reset();
    return false;
  });

  // CHOICE
  $(".popup-form-choice-card").on("click", function () {
    $(".popup-form-choice-card").removeClass("active");
    $(this).toggleClass("active");
  });

  // POPUP SELECT
  function initSelect(target) {
    var select = $(".popup[data-target=" + target + "]");
    var selected = select.find(".popup-form-select__title:first-child").text();
    var sum = parseInt(
      select
        .find(".popup-form-select__title:first-child")
        .attr("data-price")
        .replace(/\D/g, "")
    );

    select.find(".popup-form-select__title:first-child").addClass("active");
    select.find(".popup-form-select__selected").text(selected);
    select.find(".popup-form-sum .sum").text(sum);
    select.find("input[name=amount]").val(sum);

    select.find(".popup-form-select").on("click", function () {
      $(this).find(".popup-form-select-nav").slideToggle();
    });

    select.find(".popup-form-select__title").on("click", function () {
      selected = $(this).text();
      sum = parseInt($(this).attr("data-price").replace(/\D/g, ""));

      select.find(".popup-form-select__selected").text(selected);
      select.find(".popup-form-sum .sum").text(sum);
      select.find("input[name=amount]").val(sum);

      select.find(".popup-form-select__title").removeClass("active");
      $(this).addClass("active");
    });
  }

  // initSelect('get-consult');
  initSelect("order-pay");

  // POPUP PROMO
  $(".popup-form-promo__btn").on("click", function () {
    //     var promocode = "prosovetnik29";
    var promocode = ['щербаков', 'shcherbakov', 'русанова', 'rusanova', 'бургмагин', 'burmagin', 'фатов', 'fatov', 'брынов', 'brynov'];
    var promoService = "Личный финансовый план";

    var sum = parseInt(
      $(this)
        .parent()
        .parent()
        .find(".popup-form-select__title.active")
        .attr("data-price")
        .replace(/\D/g, "")
    );
    var value = $(this).siblings(".quiz__input").val();
    var selected = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .attr("data-meta");
    var text = $(this).text();

    if (
      text == "Применить" &&
      value !== "" &&
      promocode.indexOf(value.toLowerCase()) != -1 &&
      sum > 0 &&
      selected == promoService
    ) {
      $(this).parent().siblings(".popup-form__promo-desc").slideDown();
      $(this)
        .parent()
        .parent()
        .find(".popup-form__promo-alert")
        .slideDown()
        .css("display", "inline-flex");

      $(this).parent().addClass("success");

      $(this)
        .parent()
        .parent()
        .find(".sum")
        .text(sum - (sum * 0.1));

      $(this)
        .parent()
        .parent()
        .find("input[name=amount]")
        .val(sum - (sum * 0.1));

      $(this)
        .parent()
        .parent()
        .find(".stock")
        .text(sum - (sum * 0.1));
    } else {
      $(this).parent().parent().find(".popup-form__promo-failure").slideDown();
    }

    if (text == "Применить") {
      $(this).addClass("active");
      $(this).text("Сбросить");
    } else {
      $(this).removeClass("active");
      $(this).text("Применить");

      $(this).parent().siblings(".popup-form__promo-desc").slideUp();
      $(this).parent().parent().find(".popup-form__promo-alert").slideUp();
      $(this).parent().parent().find(".popup-form__promo-failure").slideUp();

      $(this).parent().removeClass("success");
    }
  });
  
  // // функция возвращает cookie с именем name, если есть, если нет, то undefined    
  // function getCookie(name) {
  //   var matches = document.cookie.match(new RegExp(
  //     "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  //   ));
  //   return matches ? decodeURIComponent(matches[1]) : undefined;
  // }
  // // проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
  // var alertwin = getCookie("alertwin");
  // if (alertwin != "no") {
  //   $(document).mouseleave(function (e) {
  //     if (e.clientY < 10) {
  //       $(".popup").hide();

  //       $(".popups").fadeIn().css("display", "flex");
  //       $(".popup[data-target=" + "meth-learn" + "]").fadeIn();
  //       // записываем cookie на 1 день, с которой мы не показываем окно
  //       var date = new Date;
  //       date.setDate(date.getDate() + 1);
  //       document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();
  //     }
  //   });
  //   $(document).click(function (e) {
  //     if (($(".meth-popup-learn").is(':visible')) && (!$(e.target).closest(".meth-popup-learn .meth-popup__close").length)) {
  //       $(".meth-popup-learn").remove();
  //     }
  //   });
  // }

});

// $(document).mouseleave(function (e) {
//   if (e.clientY < 10) {
//     $(".popup").hide();

//     $(".popups").fadeIn().css("display", "flex");
//     $(".popup[data-target=" + "meth-learn" + "]").fadeIn();
//   }
// });
// $(document).click(function (e) {
//   if (($(".meth-popup-learn").is(':visible')) && (!$(e.target).closest(".meth-popup-learn .meth-popup__close").length)) {
//     $(".meth-popup-learn").remove();
//   }
// });


