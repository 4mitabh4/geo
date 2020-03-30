$(document).ready(function() {
  $.getJSON("https://api.covid19india.org/data.json", function(data) {
    var x = "";
    $.each(data["statewise"], function(key, value) {
      if (value.state != "Total") {
        x += "<tr>";
        x += "<td data-title='State' > " + value.state + "</td>";
        x += "<td data-title='Confirmed'>" + value.confirmed + "</td>";
        x += "<td data-title='death'>" + value.deaths + "</td>";
        x += "<td data-title='recovered'>" + value.recovered + "</td>";
        x +=
          "<td data-title='last updated time'>" +
          value.lastupdatedtime +
          "</td>";
      }
    });
    $("#table").append(x);
  });
});

// total 
$(document).ready(function() {
  $.getJSON("https://api.covid19india.org/data.json", function (data) {
    var y = 0;
    var x = 0;
    var z = 0;
    $.each(data["cases_time_series"], function (key1, value1) {
      if (value1.totalconfirmed) {
        y = value1.totalconfirmed;
        x = value1.totaldeceased;
        z = value1.totalrecovered;
      }
    });
      $.each(data["statewise"], function (key, value) {
        if (value.state == "Total") {
          $("#Confirmed").append(value.confirmed);
          $("#Today_Confirmed").append(value.confirmed-y);
          $("#Death").append(value.deaths);
          $("#Today_Death").append(value.deaths-x);
          $("#Recovered").append(value.recovered);
          $("#Today_Recovered").append(value.recovered-z);
          $("#Updated").append(value.lastupdatedtime);
        }
      });
    
    
  });
});

