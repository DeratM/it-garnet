async function getData() {
        
 // URL and method used with AJAX Call
    var myURL = "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07055680,07055646,07055780,07055660&indent=on&period=P7D&siteStatus=all&parameterCd=00065";
    
// Get the info
    let myCalcObject = await fetch(myURL);
    let myResult = await myCalcObject.text();
       
// Show the results
    document.getElementById("results").innerHTML = myResult;
    }

// Clear Button
    function clearForm() {
        document.getElementById("results").innerHTML = "";
    }