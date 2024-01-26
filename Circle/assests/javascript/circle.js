$( "#CircleForm" ).validate({

});

function displayRadius () {}
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) 

document.getElementById('radius').innerHTML=""

// Variables
var radius;
var radiusfp;
var diameter;
var circumference;
var area;
var result;

// reads radius as a string
radius = document.getElementById("radius").value;

// Conver number from strings to floating point
radius = parseFloat(radiusfp); 


// display area, circumference, and diameter
document.getElementById("diameter").innerHTML = diameter.toString();
document.getElementById("circumference").innerHTML=circumference.toString();
document.getElementById("area").innerHTML = area.toString()

// Equations
function calcDiameter(radius){
  return radius * 2
}

function calcCircumference(radius){
  return 2 * Math.PI * radius
}

function calcArea(radius){
  return Math.PI(radius * radius)
}


// To clear the whole form
function clearForm(){
    document.getElementById("radius").value = "";
    document.getElementById("radius").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("area").innerHTML = "";
}

