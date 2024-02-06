/* The following should be a file in your js or script folder */

$( "#CircleForm" ).validate();



function display() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        
         document.getElementById("diameter").innerHTML = "";
         document.getElementById("circumference").innerHTML = "";
         document.getElementById("area").innerHTML = "";

         var radius;
         var circumference;
         var diameter;
         var area;

        radius = document.getElementById("radius").value;
        radius = parseFloat (radius);
        
        circumference = calcDiameter (radius);
        diameter = calcCircumference(radius);
        area = calcArea(radius);

         
        
         document.getElementById("circumference").innerHTML = circumference.toString();
         document.getElementById("diameter").innerHTML = diameter.toString();
         document.getElementById("area").innerHTML = area.toString();
    }
}

  function calcDiameter (radius){
      return radius * 2
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

