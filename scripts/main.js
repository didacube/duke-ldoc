$(function() {
  var d = new Date();
  var h = d.getHours();
  if (h > 20) {
    $("header").addClass("night");
    $("body").addClass("night");
    $("footer").addClass("night");
    $("nav").addClass("night");
  } else {
    $("header").addClass("day");
    $("body").addClass("day");
    $("footer").addClass("day");
    $("nav").addClass("day");
  }
});
