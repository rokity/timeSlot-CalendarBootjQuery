$("#right").click(function(event) {


  var month = $(this).prev(0).children(0).text();
  var number = Date.getMonthNumberFromName(month) + 1;

  if ((number / 12) >= 1)
    number = 0;
  $("#center").fadeOut(function() {
    $(this).text(months[number]).fadeIn();
    var d = new Date();
    var number_of_day = Date.getDaysInMonth(d.getFullYear(), Date.getMonthNumberFromName(
      months[number]));
    var first_day = new Date(d.getFullYear(), Date.getMonthNumberFromName(
      months[number]), 1).getDay() - 1;
    if (first_day == -1)
      first_day = 6;


    $("#primo").empty();
    $("#secondo").empty();
    $("#terzo").empty();
    load_days(first_day, number_of_day);
  });

});

$("#left").click(function(event) {

  var month = $(this).next(0).children(0).text();
  var number = Date.getMonthNumberFromName(month) - 1;
  if (number < 0)
    number = 11;
  $("#center").fadeOut(function() {
    $(this).text(months[number]).fadeIn();
    var d = new Date();
    var number_of_day = Date.getDaysInMonth(d.getFullYear(), Date.getMonthNumberFromName(
      months[number]));
    var first_day = new Date(d.getFullYear(), Date.getMonthNumberFromName(
      months[number]), 1).getDay() - 1;
    if (first_day == -1)
      first_day = 6;

    $("#primo").empty();
    $("#secondo").empty();
    $("#terzo").empty();
    load_days(first_day, number_of_day);


  });
});
