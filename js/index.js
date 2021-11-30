$(document).ready(function (){
  // MEth Tabs
  $(".meth-blocks-items-block").on("click", function () {
    var target = $(this).attr("data-target");

    $(".meth-blocks-items-block").removeClass(
      "meth-blocks-items-block--active"
    );

    $(".meth-blocks-desc").hide();

    $(this).addClass("meth-blocks-items-block--active");

    $(".meth-blocks-desc[data-target=" + target + "]").fadeIn();
  });

  // faq questions

  $(".meth-faq-list-card-top:first").toggleClass("active");
  $(".meth-faq-list-card-top:first").parent().find(".meth-faq-list-card-bottom").slideToggle();
  $(".meth-faq-list-card-top:first").parent().toggleClass("blue");


  $(".meth-faq-list-card-top").on("click", function () {
    $(this).toggleClass("active");
    $(this).parent().find(".meth-faq-list-card-bottom").slideToggle();
    $(this).parent().toggleClass("blue");
  });
});




