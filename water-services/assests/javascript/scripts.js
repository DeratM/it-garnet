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
        "type":"line",
        "data": {
            "labels": dates,
            "datasets":[{"label":"Gauge Height",
            "data": values,
            "fill":false,
            "borderColor":"rgb(75, 192, 192)",
            "lineTension":0.1}]},
            "options":{
                responsive: false,
                maintainAspectRatio: true,
                title: {
                    display: true,
                    text: sitename + ' - PID: ' + sitecode,
                    fontSize : 18
                },
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                             displayFormats: {
                                day: 'MMM D'
                            }
                        }
                    }],
    
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: siteDescription
                        }
                    }]
    
                }
            }
        }
    );



    // Graph 2
    var dates = [];
    var values = [];
    /* fLen contains the length of the array (number of values) */
    fLen = msg.value.timeSeries[1].values[0].value.length
    for (var i = 0; i < fLen; i++) {
        values[i] = msg.value.timeSeries[1].values[0].value[i].value
        dates[i] = msg.value.timeSeries[1].values[0].value[i].dateTime
    }
    var sitename = msg.value.timeSeries[1].sourceInfo.siteName
    var sitecode = msg.value.timeSeries[1].sourceInfo.siteCode[0].value
    var siteDescription = msg.value.timeSeries[1].variable.variableDescription

    let ctx1 = document.getElementById("chartjs-1");
    var myChart = new Chart(ctx1, {
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
    


    // Graph 3
    var dates = [];
    var values = [];
    /* fLen contains the length of the array (number of values) */
    fLen = msg.value.timeSeries[2].values[0].value.length
    for (i = 0; i < fLen; i++) {
        values[i] = msg.value.timeSeries[2].values[0].value[i].value
        dates[i] = msg.value.timeSeries[2].values[0].value[i].dateTime
    }
    var sitename = msg.value.timeSeries[2].sourceInfo.siteName
    var sitecode = msg.value.timeSeries[2].sourceInfo.siteCode[0].value
    var siteDescription = msg.value.timeSeries[2].variable.variableDescription

    let ctx2 = document.getElementById("chartjs-2");
    var myChart = new Chart(ctx2, {
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


     // Graph 4
     var dates = [];
     var values = [];
     /* fLen contains the length of the array (number of values) */
     fLen = msg.value.timeSeries[3].values[0].value.length
     for (i = 0; i < fLen; i++) {
         values[i] = msg.value.timeSeries[3].values[0].value[i].value
         dates[i] = msg.value.timeSeries[3].values[0].value[i].dateTime
     }
     var sitename = msg.value.timeSeries[3].sourceInfo.siteName
     var sitecode = msg.value.timeSeries[3].sourceInfo.siteCode[0].value
     var siteDescription = msg.value.timeSeries[3].variable.variableDescription
 
     let ctx3 = document.getElementById("chartjs-3");
     var myChart = new Chart(ctx3, {
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


