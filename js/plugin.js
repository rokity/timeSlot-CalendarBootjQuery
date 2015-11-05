$(function() {
  if ($("#calendario").length > 0) {
    //plugin work
    $("#calendario").addClass('container-fluid jumbotron');
    var container = $("#calendario");
    if (container.children(0).attr("id") == "title") {


      //Configure Title
      configureTitle(container);


    }


  }



});


function configureTitle(container) {
  //Configure Title Section

  //Change ID
  container.children(0).attr({
    id: 'calendario_title'
  }).addClass('row ');

  var width;
  var style;
  //Set Width
  switch ($("#calendario_title").attr("cal-size")) {
    case 'small':
      width = "col-md-offset-5 col-md-1  ";
      break;
    case 'medium':
      width = "col-md-4 col-md-offset-4 ";
      break;
    case 'large':
      width = "col-md-8 col-md-offset-2 ";
      break;
    default:
      style = $("#calendario_title").attr("cal-size");
      break;
  }

  if (width != null)
    $("#calendario_title").addClass(width);
  else {
    $("#calendario_title").addClass("center-block ");
    $("#calendario_title").css({
      'width': style
    });
  }
  var label_color, label_style;
  switch ($("#calendario_title").attr("cal-color")) {
    case 'red':
      label_color = "label-danger";
      break;
    case 'gray':
      label_color = "label-default";
      break;
    case 'blue':
      label_color = "label-primary";
      break;
    case 'green':
      label_color = "label-success";
      break;
    case 'light blue':
      label_color = "label-info";
      break;
    case 'yellow':
      label_color = "label-warning";
      break;
    default:
      label_style = $("#calendario_title").attr("cal-color");
      break;

  }



  if (label_color != null)
    $("#calendario_title").append(
      '<h2><span  class="label ' + label_color + ' center-block">' +
      $("#calendario_title").attr("value") +
      '</span></h2></div>'
    );
  else {
    $("#calendario_title").append(
      '<h2><span  class="label  center-block" style="background-color:' +
      label_style + '">' +
      $("#calendario_title").attr("value") +
      '</span></h2></div>'
    );
  }
}
