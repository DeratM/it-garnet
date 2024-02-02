$( "#CircleForm" ).validate({
});

function displayRadius () {}
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) 

document.getElementById('radius').innerHTML=""

// Variables
var radius = parseFloat(radius); 
var circumference;
var diameter;
var area;


// reads radius as a string
radius = document.getElementById("radius").value;


// display area, circumference, and diameter
document.getElementById("radius").innerHTML = radius.toString();
document.getElementById("circumference").innerHTML = circumference.toString();
document.getElementById("diameter").innerHTML = diameter.toString();
document.getElementById("area").innerHTML = area.toString();


// Equations
function calcDiameter(radius){
  return radius * 2
}

function calcCircumference(radius){
  return 2 * Math.PI * radius
}

function calcArea(radius){
  return Math.PI * Math.pow(radius, 2)
}


// To clear the whole form
function clearForm(){
    document.getElementById("radius").value = "";
    document.getElementById("radius").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("area").innerHTML = "";
}

