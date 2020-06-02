$(document).ready(function () {
  var saveBtn = $(".saveBtn");
  moment().format("MMMM Do YYYY, h:mm:ss a")
  saveBtn.on("click", function () {
    var text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  });
  $('#currentDay').text( moment().format("MMMM Do YYYY, h:mm:ss a"));
  $("#hour-9 .description").val(localStorage.getItem('hour-9'))




  
});

