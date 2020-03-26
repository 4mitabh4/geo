// confirmed 
Plotly.d3.csv("confirmed_data.csv", function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function(row) {
      return row[key];
    });
  }

  var trace1 = {
    type: "scatter",
    mode: "lines",
    x: unpack(rows, "date"),
    y: unpack(rows, "confirmed_cases"),
    line: { color: "#17BECF" }
  };


  var data = [trace1];
  var layout = {
    title: "number of confirmed cases (india)"
  };

  Plotly.newPlot("confirmed", data, layout);
});



// death 


Plotly.d3.csv("death_data.csv", function(err, rows) {
  function unpack(rows, key) {
    return rows.map(function(row) {
      return row[key];
    });
  }

  var trace1 = {
    type: "scatter",
    mode: "lines",
    x: unpack(rows, "date"),
    y: unpack(rows, "confirmed_cases"),
    line: { color: "#17BECF" }
  };


  var data = [trace1];
  var layout = {
    title: "number of deaths (india)"
  };

  Plotly.newPlot("death", data, layout);
});


// recovery 

Plotly.d3.csv("recovered_data.csv", function(err, rows) {
  function unpack(rows, key) {
    return rows.map(function(row) {
      return row[key];
    });
  }

  var trace1 = {
    type: "scatter",
    mode: "lines",
    x: unpack(rows, "date"),
    y: unpack(rows, "confirmed_cases"),
    line: { color: "#17BECF" }
  };


  var data = [trace1];
  var layout = {
    title: "number of recovery (india)"
  };

  Plotly.newPlot("recovery", data, layout);
});
