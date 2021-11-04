function percentageCalculator(){
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;

    var ans = (x/100)*y;

    document.getElementById("result").innerHTML = "50% of 70 is "+ans; 

    console.log(ans)
}

