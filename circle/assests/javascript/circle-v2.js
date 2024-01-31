$( "#CircleForm" ).validate({
});

function displayInfo() {
    if ($("#CircleForm" ).valid()) {
        
         document.getElementById("radius").innerHTML = "";

         var radius;
         var radiusfp;
         var diameter;
         var circumference;
         var area;
         var result;

         // read in the legs as a string
         radius = document.getElementById("radius").value;
        

         // Convert numbers from strings to Floating Point
         radiusfp = parseFloat( radius ); 
         
         // calculate the hypotenuse
         diameter = calcDiameter(radius);
         circumference = calcCircumference(radius);
         area = calcArea(radius);




         // display 
         document.getElementById("diameter").innerHTML = diameter.toString();
         document.getElementById("circumference").innerHTML=circumference.toString();
         document.getElementById("area").innerHTML = area.toString()
    }
}

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
  
  function clearForm(){
    document.getElementById("radius").value = "";
    document.getElementById("radius").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("area").innerHTML = "";
  }
