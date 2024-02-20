function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        var operand1 = document.getElementById("Operand1").value;

        // Operator
        var from;
        if (document.getElementById("cmOperator").checked) {
            operator = document.getElementById("cmOperator").value;
        }
        if (document.getElementById("mOperator").checked) {
            operator = document.getElementById("mOperator").value;
        }
        if (document.getElementById("kmOperator").checked) {
            operator = document.getElementById("kmOperator").value;
        }
        if (document.getElementById("inOperator").checked) {
            operator = document.getElementById("inOperator").value;
        }
        if (document.getElementById("ftOperator").checked) {
            operator = document.getElementById("ftOperator").value;
        }
        if (document.getElementById("ydOperator").checked) {
            operator = document.getElementById("ydOperator").value;
        }
        if (document.getElementById("miOperator").checked) {
            operator = document.getElementById("miOperator").value;
        }
       
        var to;
        if (document.getElementById("To-cm-Operator").checked) {
            operator = document.getElementById("cmOperator").value;
        }
        if (document.getElementById("To-m-Operator").checked) {
            operator = document.getElementById("To-m-Operator").value;
        }
        if (document.getElementById("To-km-Operator").checked) {
            operator = document.getElementById("To-km-Operator").value;
        }
        if (document.getElementById("To-in-Operator").checked) {
            operator = document.getElementById("To-in-Operator").value;
        }
        if (document.getElementById("To-ft-Operator").checked) {
            operator = document.getElementById("To-ft-Operator").value;
        }
        if (document.getElementById("To-yd-Operator").checked) {
            operator = document.getElementById("To-yd-Operator").value;
        }
        if (document.getElementById("To-mi-Operator").checked) {
            operator = document.getElementById("To-mi-Operator").value;
        }

        CalculateResult(operand1, from, to);
    }
}

async function CalculateResult(operand1, from, to) {
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        /* AJAX calculator requires Operand1, Operator, and Operand2 */
        myURL = myURL + "?Operand1=" + encodeURIComponent(operand1) + "&from=" + encodeURIComponent(from) + "&to=" + encodeURIComponent(to);

        /* fetch the results */
        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand1Msg").innerHTML = "";

    document.getElementById("cmOperator").checked = false;
    document.getElementById("mOperator").checked = false;
    document.getElementById("kmOperator").checked = false;
    document.getElementById("inOperator").checked = false;
    document.getElementById("ftOperator").checked = false;
    document.getElementById("ydOperator").checked = false;
    document.getElementById("miOperator").checked = false;

    document.getElementById("To-cm-Operator").checked = false;
    document.getElementById("To-m-Operator").checked = false;
    document.getElementById("To-km-Operator").checked = false;
    document.getElementById("To-in-Operator").checked = false;
    document.getElementById("To-ft-Operator").checked = false;
    document.getElementById("To-yd-Operator").checked = false;
    document.getElementById("To-mi-Operator").checked = false;

    document.getElementById("FromMsg").innerHTML = "";
    document.getElementById("ToMsg").innerHTML = "";

    
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});