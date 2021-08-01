function compute()
{
    var principle = document.getElementById("principal").value;
    var year=new Date();
    year = year.getFullYear();
    var interest_rate = document.getElementById("rate").value;
    var period = document.getElementById("years").value;
    if(principle == ""){
        alert("please enter principle amount");
        document.getElementById("principal").focus();
        }
    else if(interest_rate == 0 || interest_rate == "0"){
        alert("please choose rate of interest");
        document.getElementById("rate").focus();
    }
    else if (period == ""){
        alert("please enter year");
        document.getElementById("years").focus();
    }
    else{
            period=parseInt(period,10);
            var amount_end = (principle * period * interest_rate / 100) * 12 ;
            var per = year + period;

             var first_line="If you deposit " + principle + ",";
            var second_line="at an interest rate of " + interest_rate + ".";
            var third_line="You will receive an amount of " + amount_end + ",";
            var fourth_line="in the year " + per + ".";

            document.getElementById("line1").innerHTML=first_line;
            document.getElementById("line2").innerHTML=second_line;
            document.getElementById("line3").innerHTML=third_line;
            document.getElementById("line4").innerHTML=fourth_line;
            console.log(principle);
            console.log(interest_rate);
            console.log(period);
        }
}
function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  }
