$(document).ready(function () {
  // QUIZ
  var quizBalance = 0;
  var lastStep = +$(".quiz:nth-last-child(-n+2)").attr("data-target");
  var quizUserName = "";
  var quizResult = "";

  $(".quiz[data-target=1]")
    .find(".quiz-top__num")
    .text(Math.round(100 / lastStep / 10) * 10 + "%");
  $(".quiz[data-target=1]")
    .find(".quiz-top__num")
    .circleProgress({
      value: 1 / lastStep,
      size: 40,
      fill: {
        gradient: ["#FFB976", "#FFB976"],
      },
    });

  $(".quiz-bottom__next").attr("disabled", "disabled");

  $(".card-button").on("click", function () {
    var target = $(this).attr("data-target");

    if (target) {
      $(".popups").fadeIn().css("display", "flex");
      $(".popup[data-target=" + target + "]").fadeIn();
    }
  });

  $(".quiz-start-form").on("submit", function (event) {
    event.preventDefault();

    quizUserName = $(this).find("input[name=user-name]").val();

    $(".quiz[data-target=quiz-start]").hide();
    $(".quiz[data-target=1]").fadeIn();
  });

  $(".quiz-card").on("click", function () {
    var currentParent = $(this).parent().parent();

    $(currentParent).find(".quiz-card").removeClass("active");
    $(this).addClass("active");

    $(currentParent).find(".quiz-bottom__next").removeAttr("disabled");
  });

  $(".quiz-choice").on("click", function () {
    var currentParent = $(this).parent().parent();

    $(currentParent).find(".quiz-choice").removeClass("active");
    $(this).addClass("active");

    $(currentParent).find(".quiz-bottom__next").removeAttr("disabled");
  });

  $(".quiz-bottom__next").on("click", function () {
    var currentParent = $(this).parent().parent();
    var currentStep = +$(currentParent).attr("data-target");

    console.log(
      $(".quiz[data-target=" + currentStep + "]")
        .find(".quiz-body .active")
        .attr("data-target")
    );

    $(".quiz[data-target=" + currentStep + "]").hide();

    if (currentStep + 1 == lastStep) {
      for (var iter = 1; iter < lastStep; iter += 1) {
        var currentChoice = +$(".quiz[data-target=" + iter + "]")
          .find(".quiz-body .active")
          .attr("data-target");
        quizBalance += currentChoice;
      }

      if (quizBalance <= 4) {
        quizResult = "Консервативный";

        $(".quiz-wrap__line-icon").css("left", "15%");
        $(".quiz-wrap__desc[data-target=1]").show();
      } else if (quizBalance >= 5 && quizBalance <= 10) {
        quizResult = "Умеренно-консервативный";

        $(".quiz-wrap__line-icon").css("left", "30%");
        $(".quiz-wrap__desc[data-target=2]").show();
      } else if (quizBalance >= 11 && quizBalance <= 18) {
        quizResult = "Рациональный";

        $(".quiz-wrap__line-icon").css("left", "45%");
        $(".quiz-wrap__desc[data-target=3]").show();
      } else if (quizBalance >= 19 && quizBalance <= 24) {
        quizResult = "Умеренно-агрессивный";

        $(".quiz-wrap__line-icon").css("left", "60%");
        $(".quiz-wrap__desc[data-target=4]").show();
      } else if (quizBalance >= 25 && quizBalance <= 30) {
        quizResult = "Агрессивный";

        $(".quiz-wrap__line-icon").css("left", "75%");
        $(".quiz-wrap__desc[data-target=5]").show();
      } else if (quizBalance >= 30 && quizBalance <= 38) {
        quizResult = "Сверхагрессивный";

        $(".quiz-wrap__line-icon").css("left", "90%");
        $(".quiz-wrap__desc[data-target=6]").show();
      } else if (quizBalance >= 38) {
        quizResult = "Профессиональный";

        $(".quiz-wrap__line-icon").css("left", "100%");
        $(".quiz-wrap__desc[data-target=7]").show();
      }

      $(".quiz[data-target=quiz-final]").fadeIn().css("display", "flex");

      $(".quiz-wrap__name").text(quizUserName);
      $(".quiz-wrap__result").text(quizResult);
      $(".quiz-wrap__line-title").text(quizResult);
    } else {
      $(".quiz[data-target=" + (currentStep + 1) + "]")
        .find(".quiz-top__num")
        .text(Math.round(((currentStep + 1) / lastStep) * 10) * 10 + "%");
      $(".quiz[data-target=" + (currentStep + 1) + "]")
        .find(".quiz-top__num")
        .circleProgress({
          value: (currentStep + 1) / lastStep,
          size: 40,
          fill: {
            gradient: ["#FFB976", "#FFB976"],
          },
        });

      $(".quiz[data-target=" + (currentStep + 1) + "]").fadeIn();
    }
  });

  $(".quiz-bottom__prev").on("click", function () {
    var currentParent = $(this).parent().parent();
    var currentStep = +$(currentParent).attr("data-target");

    $(".quiz[data-target=" + currentStep + "]").hide();
    $(".quiz[data-target=" + (currentStep - 1) + "]").fadeIn();
  });
});
