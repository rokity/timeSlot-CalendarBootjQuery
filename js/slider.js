$( "#slider" ).slider({
  range: true,
    values: [8,11],
    min: 0,
    max: 23,
    step: 1,
    change:function( event, ui ) {
      var index = $(ui.handle).index();
      var value=ui.value+1;
      value=value+".00";
          if (index == 1)
          $("#orario_sinistra").text(value);            //  console.log("sinistro");
          if (index == 2)
                $("#orario_destra").text(value);



  /*    if($("#slider").children(1).attr("style")==())
      console.log("sinistra");
      if($("#slider").children(2).attr("style")==(ui.handle.attr("style")))
     console.log("destra");*/
    //  console.log(ui.handle);
    //  console.log(ui.value);
    }
})
.each(function() {

  //
  // Add labels to slider whose values
  // are specified by min, max and whose
  // step is set to 1
  //

  // Get the options for this slider
  var opt = $(this);

  // Get the number of possible values
  var vals = opt.slider('option','max') - opt.slider('option','min');

  // Space out values
  for (var i = 0; i <= vals; i++) {

    var el = $('<label>'+(i+1)+'</label>').css('left',(i/vals*100)+'%');

    $( "#slider" ).append(el);

  }

});
