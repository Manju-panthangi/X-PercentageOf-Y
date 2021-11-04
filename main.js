function percentageCalculator(){
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;

    var ans = (x/100)*y;

    document.getElementById("result").innerHTML = x+"% of "+y+" is "+ans; 

    console.log(ans)
}

