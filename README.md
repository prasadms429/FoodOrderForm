<html>
<head>
<title>Food Order</title>
<link rel="stylesheet" type="text/css" href="FoodOrderForm.css">
<script type="text/javascript" src="FoodOrderForm.js"></script>
<script>
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
</script>
</head>

<body style="background-color:lightblue;">

<H1>Order your favorite Food</H1>
<img src="data:image/jpeg;base64,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"/>
<br>
<H3>Select your wish food:</H3>
<form>
<input type="radio" name="food" value="Butter Chicken" checked>Butter Chicken<br>
<input type="radio" name="food" value="Burger">Burger<br>
<input type="radio" name="food" value="Fried Rice">Fried Rice<br>
<input type="radio" name="food" value="White Rice">White Rice<br>

<br><input type="checkbox" name="Accepted" value="Accepted" checked>I accepted Terms and Condition<br>
<p style="font-size:120%;color:brown">Customer Details =</p>

First name:<br>
<input type="text" name="firstname" required><br>
Last name:<br>
<input type="text" name="lastname" ><br>
Adress of your location:<br>
<input type="text" name="Adress" ><br>
Mobile Number:<br>
<input id="field1" type="text"  onblur="checkField1();"/><span id="message1"></span><br>
Quantity:<br>
<input type="number" name="quantity"><br>
<button onclick="DeliveryCharge();">Delivery Charge (onclick)</button>
<p id = "output" ></p>

<input type="submit" value="Order Now">
</form>
</body>
</html>
