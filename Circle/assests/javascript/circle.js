$( "#CircleForm" ).validate({
});

function displayRadius(){}
    if ($("#CircleForm").valid())


var radius;
var radiusfp;
var diameter;
var circumference;
var area;
var result;

radius = document.getElementById("radius").value;

document.getElementById("diameter").innerHTML = diameter.toString();
document.getElementById("circumference").innerHTML=circumference.toString();
document.getElementById("area").innerHTML = area.toString()

radius = parseFloat(radiusfp); 


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

