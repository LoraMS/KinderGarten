$(document).ready(function () {
  $("select").on("click" , function() {
    $(this).parent(".select-box").toggleClass("open");
  });
  $(document).mouseup(function (e) {
      let container = $(".select-box");
      if (container.has(e.target).length === 0){
          container.removeClass("open");
      }
  });
  
  $("select").on("change" , function() {
    let selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");
    label.find(".label-desc").html(selection);
  });


  $(".filter-timetable").change(function () {
    let filterValue = $(this).val();
    let row = $('td');
    
    row.css('visibility', 'hidden');
    row.each(function (i, el) {
      if ($(el).attr('data-type') == filterValue) {
        $(el).css('visibility', 'visible');
      }
    });
    if ("all" == filterValue) {
      row.css('visibility', 'visible');
    }

    let line = $('.line');
    line.hide();
    line.each(function (i, el) {
      if ($(el).attr('data-type') === filterValue) {
        $(el).show();
      }
    });
    if (filterValue === "all") {
      line.show();
    }
  });
});