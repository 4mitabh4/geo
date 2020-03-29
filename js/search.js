$(document).ready(function() {
  // Get value on button click and show alert
  $("#myBtn").click(function() {
    var str = $("#myInput").val();
    // alert(str);
    $.getJSON("https://api.covid19india.org/state_district_wise.json", function(
      data
    ) {
      var x = "";
      var y = "";
      $("#tbody").empty();
      $("#ending").empty();
      $.each(data, function(key, value) {
        if (key.toLowerCase() == str.toLowerCase()) {
          $.each(value, function(key1, value1) {
            $.each(value1, function(key2, value2) {
              // y = key2 + value2.confirmed + "<br/>";
              // $("#test").append(y);
              x += "<tr>";
              x += "<td data-title='state' > " + key + "</td>";
              x += "<td data-title='district' > " + key2 + "</td>";
              x += "<td data-title='Confirmed'>" + value2.confirmed + "</td>";
            });
          });
        }
      });
      $("#table").append(x);
      if (!x) {
      $("#ending").append("That's all for Now!");
      }
    });
  });  
});
