async function convert() {
    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");

    // Validate all of the form elements
    form.validate();

    // If all of the form elements are valid, get the form values
    if (form.valid()) {
        var fromCurrency = document.getElementById("fromCurrency").value;
        var toCurrency = document.getElementById("toCurrency").value;
        var apiKey = "vg549lERDp02oT9VnUccCrdHHgjarFmu";
        var fromDate = document.getElementById("FromDate").value;
        var toDate = document.getElementById("ToDate").value;

        /* URL for AJAX Call */
        let myURL =       "https://api.polygon.io/v2/aggs/ticker/C:" + fromCurrency + toCurrency + "/range/1/day/" + fromDate + "/" + toDate + "?unadjusted=false&sort=asc&limit=32&apiKey=" + apiKey;
        let msg1Object = await fetch(myURL);
    
    if (msg1Object.status >= 200 && msg1Object.status <= 299) {
      let msg1JSONText = await msg1Object.text();
      let msg1 = JSON.parse(msg1JSONText);
      let currencyDate = [];
      let currencyValue = [];
      let numdays = msg1.results.length;
      
      if (numdays > 0) {
        for (let i = 0; i < numdays; i++) {
          currencyValue[i] = msg1.results[i].c;
          let tempdate = new Date(msg1.results[i].t);
          currencyDate[i] = tempdate.toLocaleDateString();
        }
      }

      let ctx0 = document.getElementById("chartjs-0");
      var myChart = new Chart(ctx0, {
        type: "line",
        data: {
          labels: currencyDate,
          datasets: [{
              label: "1 " + fromCurrency + " to " + toCurrency,
              data: currencyValue,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              lineTension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          title: {
            display: true,
            text: fromCurrency + " to " + toCurrency,
          },
        },
      });
    } else {
      /* AJAX completed with error - probably invalid stock ticker symbol */
      alert("Currency Not Found - Status: " + msg1Object.status);
      return;
    }
  }
}

function clearForm() {
  document.getElementById("fromCurrency").innerHTML = "";
  document.getElementById("toCurrency").innerHTML = "";
  document.getElementById("fromDate").value = "";
  document.getElementById("toDate").value = "";

  /* Ugly Code to Erase Canvas */
  var canvas0 = document.getElementById("chartjs-0");
  var context0 = canvas0.getContext("2d");
  context0.clearRect(0, 0, canvas0.width, canvas0.height);
}