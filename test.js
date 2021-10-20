var $ = function (id) {
return document.getElementById(id);
}

// To calculate for change 
var calculate_click = function ()
{ 
    var cents = $("cents").value;

    if ($("cents").value > 24){
        var quarters = Math.floor(cents/25);
        cents = cents%25;
        $("quarters").value = quarters }

    if ($("cents").value > 9){
        var dimes = Math.floor(cents/10);
        cents = cents%10;
        $("dimes").value = dimes}

    if ($("cents").value > 4){
        var nickels = Math.floor(cents/5);
        cents = cents%5;
        $("nickels").value = nickels}

    if ($("cents").value > 0) {
        var pennies = Math.floor(cents);

        $("pennies").value = pennies}

} 
window.onload = function () {
    $("calculate").onclick = calculate_click;
}

//to change the background color
var count = 1
function backgroundColor() {
    if (count == 0) {
        container.style.backgroundColor = "#195030"
        count = 1;        
    }
    else {
        container.style.backgroundColor = "#34568b"
        count = 0;
    }
    
}
