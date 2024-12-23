var amt;
function Loan()
{
    amt=document.getElementById("amt").value;
    document.getElementById("amount").value=" "+amt;
    document.getElementById("p").innerHTML= amt;
}
var year;
function Year()
{
     year=document.getElementById("range2").value;
     document.getElementById("year").value=" "+year;
}
var rate;
var result;
var interest;
var Total;
function Rate()
{
    rate=document.getElementById("range3").value;
    document.getElementById("rate").value=" "+rate;
    r=rate/12/100;
      result= amt*r*(1+r)^year/((1+r)^year-1);
      document.getElementById("l").innerHTML=result;
      interest = (amt*rate*year)/100;
      document.getElementById("I").innerHTML=interest;


      Total=parseInt(amt)+parseInt(interest);
      document.getElementById("TAP").innerHTML=Total;
}
