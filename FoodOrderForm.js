function checkField1(){
var field=document.getElementById("field1").value;
var regex=/^[0-9]{10}$/;

if(regex.test(field))//test is
document.getElementById("message1").innerHTML="Your input is accepted";
else
document.getElementById("message1").innerHTML="Please use Ten numbers";
}
function DeliveryCharge(){
var x=1;
var km=2
var price=km*x;
document.getElementById("output").innerHTML="The Delivery Charge is "+price+"$";
}