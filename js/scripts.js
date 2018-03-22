$(document).ready(function() {
  $(".clickable").click(function() {
    $("#bulldog-showing").toggle();
    $("#bulldog-hidden").toggle();
  });

  $(".clickable1").click(function() {
    $("#parrot-showing").toggle();
    $("#parrot-hidden").toggle();
  });

  $(".clickable2").click(function() {
    $("#cat-showing").toggle();
    $("#cat-hidden").toggle();
  });
});
