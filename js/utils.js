<!-- Variable Globali -->
var weekabbrs = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"
];
var weeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
  'Sunday'
];
<!-- End Of Global Variable -->



function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function load_days(first_day, count_days) {
  $("#primo").empty();
  $("#secondo").empty();
  $("#terzo").empty();

  for (var i = 1; i <= count_days; i++) {
    if (i <= 10) {
      $("#primo").append(
        '<a  type="button" class="btn btn-default  col-md-1 text-center" role="button" aria-label="Right Align"><span class="" aria-hidden="true"><h3>' +
        i + '</h3></br>' + weekabbrs[first_day] + '</span></a>');
      first_day++;
      if (first_day == 7)
        first_day = 0;
    }
    if (i > 10 && i <= 20) {
      $("#secondo").append(
        '<a  type="button" class="btn btn-default  col-md-1 text-center" role="button" aria-label="Right Align"><span class="" aria-hidden="true"><h3>' +
        i + '</h3></br>' + weekabbrs[first_day] + '</span></a>');
      first_day++;
      if (first_day == 7)
        first_day = 0;

    }
    if (i > 20 && i <= 31) {
      $("#terzo").append(
        '<a  type="button" class="btn btn-default  col-md-1 text-center" role="button" aria-label="Right Align"><span class="" aria-hidden="true"><h3>' +
        i + '</h3></br>' + weekabbrs[first_day] + '</span></a>');
      first_day++;
      if (first_day == 7)
        first_day = 0;
    }
  }

  $("#giorni").html(" ").fadeIn();
  $("#giorni").append('<div id="1">' + $("#primo").html() + '</div>').fadeIn();

}
