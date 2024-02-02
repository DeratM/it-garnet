/* The following should be a file in your js or script folder */

$( "#CircleForm" ).validate();



function display() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        
         document.getElementById("radius").innerHTML = "";

         var radius = parseFloat (document.getElementById("radius").value); 
         var circumference = calcCircumference (radius);
         var diameter = calcDiameter(radius);
         var area = calcArea(radius);


         
         // display the hypotenuse
         document.getElementById("circumference").innerHTML = circumference.toString();
         document.getElementById("diameter").innerHTML = diameter.toString();
         document.getElementById("area").innerHTML = area.toString();
    }
}

  function calcDiameter (radius){
      return (radius * 2)
      ;
  }
  function calcCircumference (radius){
      return 2 * Math.PI * radius
      ;
  }
  function calcArea (radius){
      return Math.PI * Math.pow(radius, 2)
      ;
  }
  
  function clearForm(){
    document.getElementById("radius").value = "";
    document.getElementById("radiuserror").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("area").innerHTML = "";
}

