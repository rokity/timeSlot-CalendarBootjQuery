$("#left2").click(function(event) {
  $("#giorni").fadeOut(function() {
    if ($("#giorni").children(0).prop("id") == "1") {

      $("#giorni").empty().fadeIn();
      $("#giorni").append('<div id="3">' + $("#terzo").html() +
        '</div>').fadeIn();
    } else {
      if ($("#giorni").children(0).prop("id") == "2") {

        $("#giorni").empty().fadeIn();
        $("#giorni").append('<div id="1">' + $("#primo").html() +
          '</div>').fadeIn();
      } else {
        if ($("#giorni").children(0).prop("id") == "3") {

          $("#giorni").empty().fadeIn();
          $("#giorni").append('<div id="2">' + $("#secondo").html() +
            '</div>').fadeIn();
        }
      }
    }

  });

});
$("#right2").click(function(event) {
  $("#giorni").fadeOut(function() {
    if ($("#giorni").children(0).prop("id") == 1) {

      $("#giorni").empty().fadeIn();
      $("#giorni").append('<div id="2">' + $("#secondo").html() +
        '</div>').fadeIn();
    } else {
      if ($("#giorni").children(0).prop("id") == 2) {

        $("#giorni").empty().fadeIn();
        $("#giorni").append('<div id="3">' + $("#terzo").html() +
          '</div>').fadeIn();
      } else {
        if ($("#giorni").children(0).prop("id") == 3) {

          $("#giorni").empty().fadeIn();
          $("#giorni").append('<div id="2">' + $("#primo").html() +
            '</div>').fadeIn();
        }
      }
    }

  });
});
