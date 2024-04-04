async function GetData() {  
    var myURL = "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07055680,07055646,07055780,07055660&indent=on&period=P7D&siteStatus=all&parameterCd=00065";
    var msgObject = await fetch(myURL);
    var msgJSONText = await msgObject.text();
    var msg = JSON.parse(msgJSONText);  
    

    var dates = [];
    var values = [];
    /* fLen contains the length of the array (number of values) */
    fLen = msg.value.timeSeries[0].values[0].value.length
    for (var i = 0; i < fLen; i++) {
        values[i] = msg.value.timeSeries[0].values[0].value[i].value
        dates[i] = msg.value.timeSeries[0].values[0].value[i].dateTime
    }
    var sitename = msg.value.timeSeries[0].sourceInfo.siteName
    var sitecode = msg.value.timeSeries[0].sourceInfo.siteCode[0].value
    var siteDescription = msg.value.timeSeries[0].variable.variableDescription

    let ctx0 = document.getElementById("chartjs-0");
    var myChart = new Chart(ctx0, {
        type: "line",
        data: {
            labels: dates,
            datasets: [{"date":"City",
                label: "values", 
                data: values,
                fill: false,
                borderColor: "#D99441",
                lineTension: 0.1
                
            }]
        }
    });

}


