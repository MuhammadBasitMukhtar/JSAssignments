//CHAPTER 01

// Chapter 01 - Task 01
alert("Welcome To My Site!!");

// Chapter 01 - Task 02
alert("Error! Please Enter a Valid Password", "Javascript Task");

// Chapter 01 - Task 03
alert("Welcome to JS Land..\nHappy Coding!!");

// Chapter 01 - Task 04
alert("Welcome to JS Land..");
alert("Happy Coding!!");

// Chapter 01 - Task 05
alert("Hello..I can run JS through my web browser's console");

//CHAPTER 02

// Chapter 02 - Task 01
var username;

// Chapter 02 - Task 02
var myName = "Muhammad Basit";

// Chapter 02 - Task 03
var message;
message = "Hello World"
alert(message);

// Chapter 02 - Task 04
var stdName = "Muhammad Basit";
var stdAge = "20 Years Old";
var Course = "Web & Mobile Hybrid App";
alert(stdName);
alert(stdAge);
alert(Course);

// Chapter 02 - Task 05
var food = "PIZZA";
alert(food.slice(0,5) + "\n" + food.slice(0,4) + "\n" + food.slice(0,3) + "\n" + food.slice(0,2) + "\n" + food.slice(0,1));

// Chapter 02 - Task 06
var email = "basit@gmail.com";
alert("My email address is " + email);

// Chapter 02 - Task 07
var book =  "A smarter way to learn JavaScript";
alert("I am trying to learn from a Book: " + book);

// Chapter 02 - Task 07
document.writeln("Yah! I can write HTML Content through JavaScript \n");

// Chapter 02 - Task 08
var somethin = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(somethin)

//CHAPTER 03

// Chapter 03 - Task 01
var age = 20;
alert("I am " + age + " years old");

// Chapter 03 - Task 02
var times = 19;
alert("You have visited this site " + age + " times \n");

// Chapter 03 - Task 03
var birthYear = 2000;
document.writeln("My birth year is " + birthYear + "\n") 
document.writeln("Data type of my declared variable is " + typeof(birthYear) + "\n");

// Chapter 03 - Task 04
var VName = "Muhammad Basit";
var PTitle = "T-Shirt Gray";
var Qty = 5;
document.writeln("<b>" + VName + "</b> ordered <b>" + Qty + " " + PTitle + "</b>(s) on Clothing Store \n") 

//CHAPTER 04

// Chapter 04 - Task 01
var v1, v2, v3;

// Chapter 04 - Task 02
var LegalVar, $1Name, _Name, I4Name; //Legal Names
//var alert, 4Name, 45, 5no, typeof; //Illegal Names

// Chapter 04 - Task 03
document.write("<h1>Rules for naming JS Variables</h1> \n\nVariable names can only contain alphabets, $, numbers and _. For example: $my_1stVariable\nVariables must begin with a letter, $ or _. For example $name, _name or name\nVariable names are case sensitive\nVariable names should not be JS keywords");

//CHAPTER 05

// Chapter 05 - Task 01
var no1 = 5, no2 = 10;
var res = no1 + no2;
document.writeln("Sum of" + no1 + " and " + no2 + " is " + res);

// Chapter 05 - Task 02
var no1 = 5, no2 = 10;
var res = no1 - no2;
document.writeln("Subtracition of " + no1 + " from " + no2 + " is " + res);
res = no1 * no2;
document.writeln("Multiplication of" + no1 + " and " + no2 + " is " + res);
res = no1 % no2;
document.writeln("Modulus of" + no1 + " and " + no2 + " is " + res);

// Chapter 05 - Task 03
var number;
document.writeln("Value after variable declaration is: " + number);
number = 5;
document.writeln("Initial value: " + number);
number++;
document.writeln("Value after increment is: " + number);
number = number + 7;
document.writeln("Value after addtion is: " + number);
number--;
document.writeln("Value after decrement is: " + number);
document.writeln("The remainder is: " + number % 3);

// Chapter 05 - Task 04
var cost = 600;
var priceOf5 = cost * 5;
document.writeln("Total cost to but 5 tickets to a movie is: " + priceOf5 + "PKR");

// Chapter 05 - Task 05
var mnumber = 4;
document.writeln("Table of " + mnumber);
for(i = 1; i <= 10; i++)
{
    document.writeln(mnumber + " x " + i + " = " + mnumber * i);
}

// Chapter 05 - Task 06
var CTemp = 25;
var FTemp = 70;
var ToCelsiusDegree = (FTemp - 32) * 5 / 9;
var ToFarenheitDegree = (CTemp * 9 / 5) + 32;
document.write(CTemp + " degree C is" + ToFarenheitDegree + " degree Farenheit");
document.write(FTemp + " degree F is" + ToCelsiusDegree + " degree Celsius");

// Chapter 05 - Task 07
var PI1 = 650, QI1 = 3, PI2 = 100, QI2 = 7, SCharges = 100;
var TCost = (PI1 * QI1) + (PI2 * QI2) + SCharges;
document.write("<h1>Shopping Cart</h1> \n\n Price of item 1 is " + PI1 + "\n Quantity of item 1 is " + QI1 + "\nPrice of item 2 is " + PI2 + "\n Quantity of item 2 is " + QI2 + "\n Shipping Charges " + SCharges + "\n\n Total Cost of your order is " + TCost);

// Chapter 05 - Task 08
var TMarks = 980;
var OMarks = 804;
var Percentage = (804 * 100) / TMarks;
document.write("<h1>Mark Sheet</h1>\n\n Total Marks: " + TMarks + "\n Marks Obtained: " + OMarks + "\n Percentage: " + Percentage); 

// Chapter 05 - Task 09
const dollar = 163.48;
const riyal = 43.54;
var Cdollar = 10, CRiyal = 25;
var totalCurrency = (Cdollar * dollar) + (CRiyal * riyal);
document.write("<h1>Currency in PKR</h1> \n\n Total Currency in PKR: " + totalCurrency);

// Chapter 05 - Task 10
var numberone = 5;
var result = ((5 + 5) * 10) / 2;
document.write("the result of "+ numberone +" after addin 5 multiplying with 10 and then dividing by 2 is " + result);

// Chapter 05 - Task 11
var birth = 1992, todayYear = 2020;
var age = todayYear - birth;
document.write("Your Age is " + age);

// Chapter 05 - Task 12
var radius = 20; const pi = 3.142;
var area = radius * radius * pi;
var circumferunce = 2 * radius * pi;
document.write("<h1>The Geometrizer</h1>\n\n Radius of a circle : "+ radius + "\n The Circumference is: " + circumferunce + "\n The area is: " + area);

// Chapter 05 - Task 13
var snack = "Lays";
var cage = 20;
var eage = 65;
var NofSnaks = 3;
document.write("\n You will need " + (eage - cage) * NofSnaks + " to last you until the ripe old age of " + eage);

//CHAPTER 06-09

// Chapter 6 - Task 1
var a = 10;
document.write("\n Result: \n The value of a: " + a);
document.write("\n\n The value of ++a is" + ++a);
document.write("\n Now the value of a is" + a);
document.write("\n\n The value of a++ is" + a++);
document.write("\n Now the value of a is" + a);
document.write("\n\n The value of --a is" + --a);
document.write("\n Now the value of a is" + a);
document.write("\n\n The value of a-- is" + a--);
document.write("\n Now the value of a is" + a);

// Chapter 6 - Task 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("\n a is: "+ a + "\n b is: "+ b + "\n result is: "+ result);

// Chapter 6 - Task 3
var nameofuser = prompt("What is your name?");
alert("Welcome to my site, "+ nameofuser + "!");

// Chapter 6 - Task 5
var mnumber = prompt("Enter a number", 5);
document.writeln("Table of " + mnumber);
for(i = 1; i <= 10; i++)
{
    document.writeln(mnumber + " x " + i + " = " + mnumber * i);
}

// Chapter 6 - Task 5
var S1Name = prompt("Enter 1st Subject Name: ");
var S2Name = prompt("Enter 2nd Subject Name: ");
var S3Name = prompt("Enter 3rd Subject Name: ");
var S1Marks = 100, S2Marks = 100, S3Marks = 100;
var S1OMarks = parseInt(prompt("Enter 1st Subject Obtained Marks: "));
var S2OMarks = parseInt(prompt("Enter 2nd Subject Obtained Marks: "));
var S3OMarks = parseInt(prompt("Enter 3rd Subject Obtained Marks: "));
document.write("<table><th><td>Subject</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage></td></th><tr><td>"+ S1Name +"</td><td>"+ S1Marks +"</td><td>"+ S1OMarks +"</td><td>"+ (S1OMarks * 100 / S1Marks) +"%</td></tr><tr><td>"+ S2Name +"</td><td>"+ S2Marks +"</td><td>"+ S2OMarks +"</td><td>"+ (S2OMarks * 100 / S2Marks) +"%</td></tr><tr><td>"+ S3Name +"</td><td>"+ S3Marks +"</td><td>"+ S3OMarks +"</td><td>"+ (S3OMarks * 100 / S3Marks) +"%</td><tr><td></td><td>"+ S1Marks+S2Marks+S3Marks+ +"</td><td>"+ S1OMarks+S2OMarks+S3OMarks +"</td><td>"+ (S1OMarks * 100 / S1Marks) + (S2OMarks * 100 / S2Marks) + (S3OMarks * 100 / S3Marks) +"%</td></tr></tr>")

//CHAPTER 09-11

// Chapter 9 - Task 1
var city = prompt("Enter City Name: ");
if (city === "Karachi")
{
    alert("Welcome to the city of Lights!");
}

// Chapter 9 - Task 2
var gend = prompt("Enter Gender: ");
if (gend === "male")
{
    alert("Good Morning Sir!");
}
else if (gend === "female")
{
    alert("Good Morning Madam!");
}

// Chapter 9 - Task 3
var color = prompt("Enter Light color: ");
if (color === "red")
{
    alert("Must Stop!");
}
else if (color === "yellow")
{
    alert("Ready to move!");
}
else if (color === "green")
{
    alert("Move now!");
}

// Chapter 9 - Task 4
var fuel = parseFloat(prompt("Enter remaining fuel (in litres): "));
if (fuel <= 0.25)
{
    alert("Please refill the fuel in your car!");
}

// Chapter 9 - Task 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
}
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

// Chapter 9 - Task 6
var marks1 = parseInt(prompt("First sub. marks: "));
var marks2 = parseInt(prompt("Second sub. marks: "));
var marks3 = parseInt(prompt("Third sub. marks: "));
var tmar = marks1 + marks2 + marks3
var perc = tmar * 100 / 300;
var grade = "fail";
var remarks = "Sorry";
if(perc >= 80)
{
    grade = "A-one";
    remarks = "Excellent";
}
else if(perc >= 70)
{
    grade = "A";
    remarks = "Good";
}
else if(perc >= 60)
{
    grade = "B";
    remarks = "You need to improve";
}
document.write("\n <h1>Marks Sheet</h1> \n\n Total Marks :  300 \n Marks Obt. " + tmar + "\n Percentage: " + perc + "\n Grade: "+ grade + "\n Remarks: " + remarks);

// Chapter 9 - Task 7
var randno = Math.random(1,10);
var guessed = parseInt(prompt("Guess the number: "));
if (randno == guessed)
{
    alert("Bingo! Correct Answer");
}
else if(guessed == --randno)
{
    alert("So Close!");
}

// Chapter 9 - Task 8
var gno = parseInt(prompt("Enter number: "));
if( (gno % 3) == 0)
{
    alert("It is divisible by 3")
}
else
{
    alert("It is not divisible by 3")
}

// Chapter 9 - Task 9
var gino = parseInt(prompt("Enter number: "));
if( (gino % 2) == 0)
{
    alert("It is even")
}
else
{
    alert("It is odd")
}

// Chapter 9 - Task 10
var gtemp = parseInt(prompt("Enter temperature: "));
if( gtemp > 40)
{
    alert("Today's weather is so Cool")
}
else if( gtemp > 30)
{
    alert("The weather is normal")

}
else if( gtemp > 20)
{
    alert("Today's weather is so Cool")    
}
else if( gtemp > 10)
{
    alert("OMG! Today's weather is so Cool")
}

// Chapter 9 - Task 11
var Fno = parseInt(prompt("Enter first Number: "));
var Sno = parseInt(prompt("Enter second Number: "));
var res;
var operation = prompt("Enter operation:")
if(operation == "+")
{
    res = Fno + Sno;
}
else if(operation == "-")
{
    res = Fno - Sno;
}
else if(operation == "*")
{
    res = Fno * Sno;
}
else if(operation == "/")
{
    res = Fno / Sno;
}
else
{
    res = "Wrong operation";
}
document.write("Result is " + res);

//CHAPTER 12-13

// Chapter 12 - Task 2
var no01 = parseInt(prompt("Enter 1st no: "));
var no02 = parseInt(prompt("Enter 2nd no: "));
if (no01 > no02)
{
    alert("1st is bigger");
}
else if (no01 == no02)
{
    alert("both are equal");
}
else
{
    alert("2nd is bigger");

}

// Chapter 12 - Task 3
var chkno = parseInt(prompt("Enter no: "));
if (chkno > 0)
{
    alert("it is psotive");
}
else if (chkno == 0)
{
    alert("it is zero");
}
else
{
    alert("it is negative");

}

// Chapter 12 - Task 1

var inp = prompt("Enter: ");
if(inp.charCodeAt(0) >= 65 && inp.charCodeAt(0) <= 90)
{
    document.write("<br><br>It is a Uppercase letter!.")
}
else if(inp.charCodeAt(0) >= 97 && inp.charCodeAt(0) <= 122)
{
    document.write("<br><br>It is a Lowercase letter!.")
}
else
{
    document.write("<br><br>It is a Number!.")
}

// Chapter 12 - Task 4

var inp = prompt("Enter Letter: ");
function CheckVowel(inputCharacter)
{
    if(inputCharacter.match(/[aeiouAEIOU]/))
    {
        return true;
    }
    else
    {
        return false;
    }
}
document.write("<br><br>" + CheckVowel(inp));


// Chapter 12 - Task 5
var Password = "CorrectPass";
var input = prompt("Enter Password: ");
if(input === Password)
{
alert("Correct! The password you entered matches the original password");
}
else if(input == "")
{
    alert("Please enter your password");
}
else
{
    alert("Incorrect password");
}


// Chapter 12 - Task 6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else
{
greeting = "Good evening";
}
alert(greeting);

// Chapter 12 - Task 7
var time = prompt("Enter Time in 2400 hrs Format: ");
if(time >= 0000 && time < 1200)
{
    alert("Good Morning!");
}
else if(time >= 1200 && time < 1700)
{
    alert("Good Afternoon!");
}
else if(time >= 1700 && time < 2100)
{
    alert("Good Evening!");
}
else if(time >= 2100 && time < 2359)
{
    alert("Good Night!");
}



// Chapter 14

// Chapter 14 - Task 1

var myArray = [];

// Chapter 14 - Task 2

var myArray = {};

// Chapter 14 - Task 3

var strArray = new Array("Car", "Bike", "Motorcycle");

// Chapter 14 - Task 4

var intArray = [4,5,6];

// Chapter 14 - Task 5

var boolArray = [true,false];

// Chapter 14 - Task 6

var mixArray = ["This", 1, 2, "is",4,"Mixed","Array"];

// Chapter 14 - Task 7

var Quals = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
document.write("Qualifications<br><br>")
for(i = 0 ; i < Quals.length; i++)
{
    document.write(i+1 + ") " + Quals[i] + "<br>");
}

// Chapter 14 - Task 8

var stdName = ["Basit", "Hammad", "Yasir"];
var stdMarks = new Array(320,230,480);

function GetPerc(marks)
{
    var res = marks * 100 / 500;
    return res;
}
for (let index = 0; index < stdName.length; index++) {
    document.write("Score of " + stdName[index] + " is " + stdMarks[index] + ". Percentage: " + GetPerc(stdMarks[index]) + "%<br>");
}


// Chapter 14 - Task 9 
document.writeln("<br><br>Original List<br><br>");
var colors = ["Red","Blue","Yellow"];
for (let index = 0; index < colors.length; index++) {
    document.writeln(colors[index] + "<br>");
}
document.writeln("<button onclick='AddBegin()'>Add Color in Beginning</button><br>");
document.writeln("<button onclick='AddEnd()'>Add Color in Ending</button><br>");
document.writeln("<button onclick='Add2Color()'>Add 2 Color in Beginning</button><br>");
document.writeln("<button onclick='RemoveBegin()'>Remove Color in Beginning</button><br>");
document.writeln("<button onclick='RemoveEnd()'>Remove Color in Ending</button><br>");
document.writeln("<button onclick='AddSpecificPos()'>Add Color At Desired Pos.</button><br>");
document.writeln("<button onclick='RemoveSpecificPos()'>Remove Color at Desired Pos</button><br>");
function AddBegin()
{
    var newcolor = prompt("Enter new color to add in beginning: ");
    colors.unshift(newcolor);
    document.writeln("<br><br>After Adding in Beginning List<br><br>");
    for (let index = 0; index < colors.length; index++) {
        document.write(colors[index] + "<br>");
    }
}

function AddEnd()
{
    var newcolor = prompt("Enter new color to add in ending: ");
    colors.push(newcolor);
    document.writeln("<br><br>After Adding in Ending List<br><br>");
    for (let index = 0; index < colors.length; index++) {
        document.write(colors[index] + "<br>");
    }
}

function Add2Color()
{
    colors.push("Magenta", "Cyan");
    document.writeln("<br><br>After Adding in Beginning List<br><br>");
    for (let index = 0; index < colors.length; index++) {
        document.write(colors[index] + "<br>");
    }
}

function RemoveBegin()
{
    colors.shift();
    document.writeln("<br><br>After Removing from Beginning List<br><br>");
    for (let index = 0; index < colors.length; index++) {
        document.write(colors[index] + "<br>");
    }
}
function RemoveEnd()
{
    colors.pop();
    document.writeln("<br><br>After Removing from Ending List<br><br>");
    for (let index = 0; index < colors.length; index++) {
        document.write(colors[index] + "<br>");
    }
}
function AddSpecificPos()
{
    var newcolorpos = parseInt(prompt("Enter position: "));
    var newcolor = prompt("Enter new color to add: ");
    colors.splice(newcolorpos,0,newcolor);
    document.writeln("<br><br>After Adding in at Desired position List<br><br>");
    for (let index = 0; index < colors.length; index++) {
        document.write(colors[index] + "<br>");
    }    
}
function RemoveSpecificPos()
{
    var newcolorpos = prompt("Enter color to remove: ");
    var ind = colors.indexOf(newcolorpos);
    var num = parseInt(prompt("Enter numbers to remove: "));
    colors.splice(ind,num);
    document.writeln("<br><br>After removing List<br><br>");
    for (let index = 0; index < colors.length; index++) {
        document.write(colors[index] + "<br>");
    }    
}
// Chapter 14 - Task 10

var arrMarks =[320, 230, 480,120];
document.write("Scores of Student: "+ arrMarks.join(",") + "<br>")
arrMarks.sort();
document.write("Ordered Scores of Student: "+ arrMarks.join(","))


// Chapter 14 - Task 11

var cities = ["Karachi","Lahore", "Islamabad","Quetta","Peshawar"];
var selectedCities = [];
for (let index = 2; index < 4; index++) {
    selectedCities.push(cities[index]);
}
document.write("Cities List:<br> " + cities.join(",") + "<br>");
document.write("Selected Cities List:<br> " + selectedCities.join(",") + "<br>");


// Chapter 14 - Task 12
var arr = ["This","is","my","cat"];
document.write("Array:<br>" + arr.join(",") + "<br>String: <br>" + arr.join(" "));


// Chapter 14 - Task 13
var arrList = ["Keyboard", "Mouse", "Printer","Monitor"];
document.write("Devices: <br>" + arrList.join(",") + "<br>");
document.write("Out: <br>" + arrList[0] + "<br>");
arrList.shift();
document.write("Out: <br>" + arrList[0] + "<br>");
arrList.shift();
document.write("Out: <br>" + arrList[0] + "<br>");
arrList.shift();
document.write("Out: <br>" + arrList[0] + "<br>");
arrList.shift();

// Chapter 14 - Task 14
var arrList = ["Keyboard", "Mouse", "Printer","Monitor"];
document.write("Devices: <br>" + arrList.join(",") + "<br>");
var inde = arrList.lastIndexOf()
document.write("Out: <br>" + arrList[arrList.length - 1] + "<br>");
arrList.pop();
document.write("Out: <br>" + arrList[arrList.length - 1] + "<br>");
arrList.pop();
document.write("Out: <br>" + arrList[arrList.length - 1] + "<br>");
arrList.pop();
document.write("Out: <br>" + arrList[arrList.length - 1] + "<br>");
arrList.pop();

// Chapter 14 - Task 15

var manufac = ["Apple","Samsung", "Motorola","Nokia","Sony","Haier"];
document.write("<select>");
for (let index = 0; index < manufac.length; index++) {
    document.write("<option>" + manufac[index] + "</option>");
}
document.write("</select>");

// CHAPTER 17-20

// Chapter 17 - Task 1

var MultiArr =[ [] ];

// Chapter 17 - Task 2

var MultiArr =[ [0,1,2,3] , [1,0,1,2] , [2,1,0,1] ];

// Chapter 17 - Task 3
 for (var a = 1 ; a <= 10 ; a++ ){
     document.write(a + "<br>" )
 }
 

 // Chapter 17 - Task 5
 var A = ["apple", "banana", "mango", "oorange", "strawberry"] 
 document.write(A.join("<br>") + "<br>")
 for (var i = 0 ; i < A.length ; i++){
    document.write("Element at index " + i + " is " + A[i] + "<br>");
 }

 
// // Chapter 17 - Task 4
var a = parseInt(prompt("enter the number"));
var i = parseInt(prompt("enter the length"));
for( j=1 ; j<=i ; j++){
    document.write(a + "*" + j + "=" + a * j + "<br>");
}


// Chapter 17 - Task 6
 document.write("<h2>COUNTING:</h2>")
 for (var a = 0 ; a <= 15 ; a++ ){
     document.write(a + " ")
 }

 document.write("<h2> REVERSE COUNTING:</h2>")
 for (var a = 15 ; a >= 0 ; a-- ){
     document.write(a + " ")
 }

 document.write("<h2>EVEN NUMBERS:</h2>")
 for (var a = 0 ; a <= 20 ; a++ ){
     if (a % 2 == 0){
         document.write(a + " ")
     }
 }



 document.write("<h2>ODD NUMBERS:</h2>")
 for (var a = 0 ; a <= 20 ; a++ ){
    if (a % 2 != 0){
         document.write(a + " ")
     }

      }

 document.write("<h2>SERIES:</h2>")
 for (var a = 2 ; a <= 20 ; a=a+2 ){
         document.write(a + "k," + " ")
 }


// Chapter 17 - Task 7
 var B = ["cake", "apple pie", "cookie", "chips", "patties"] 
 var a = prompt("WELCOME TO OUR BAKERY WHAT DO YOU WANT TO ORDER " , "check the availability" )
 
    if(B.includes(a)){
        alert(a + " is available at index " + B.indexOf(a) +" in our bakery")
    }
    else{
        alert("We are sorry. we dont have " + a +" in our bakery");
    }
 

// Chapter 17 - Task 8
 var A = [24,56,78,91,12];
 document.write("List: " + A.join(",")+ "<br> ");
 A.sort(function (a , b) {return a-b})
 document.write( "THE SMALLEST VALUE IS " + A[0] + "<br>")

 // Chapter 17 - Task 9
 var A = [24,56,78,91,12];
 document.write("List: " + A.join(",")+ "<br> ");
 A.sort(function (a , b) {return b-a})
 document.write( "THE LARGEST VALUE IS " + A[0] + "<br>")

 
 // Chapter 17 - Task 10
for (let index = 1; index <= 100; index++) {
    if(index % 5 == 0)
    {
        document.write(index+ ",")
    }
    
} 

// ------------------------ Chp 21 to 25 ------------------------------------

// Question # 1
first_name = prompt("Enter your First Name:");
last_name = prompt("Enter your last Name:");
fullName = first_name+" "+last_name;
alert("----Question 1-----"+"\n"+"Helow "+fullName);

// Question # 2
fav_m = prompt("Enter your favorite Mobile Name:");
alert("----Question 2-----"+"\n"+"Your favourite mobile is: "+fav_m+"\n"+"Length of String: "+fav_m.length);

// Question # 3
var a = "Pakistani";
var index = a.indexOf("n");
alert("----Question 3-----"+"\n"+"String: "+a+"\n"+"Index of 'n' : "+index);

// Question # 4
var a = "Hello World";
var LastIndex = a.lastIndexOf("l");
alert("----Question 4-----"+"\n"+"String: "+a+"\n"+"Last ndex of 'l' : "+LastIndex);

// Question # 5
var a = 'Pakistani'
index = a[3]
alert("----Question 5-----"+"\n"+"String: "+a+"\n"+"Character at index 3 : "+index);

// Question # 6
first_n = prompt("Enter your First Name:");
last_n = prompt("Enter your last Name:");
fullName = first_n.concat(last_n);
alert("----Question 6-----"+"\n"+"Helow "+fullName);

// Question # 7
var a = "Hyderabad";
var b = a.replace("Hyder","Islam");
alert("----Question 7-----"+"\n"+"City: "+a+"\n"+"After replacement: "+b);

// Question # 8
var message = 'Ali and Sami are best friends. They play cricket and football together.';
var b = message.replace(/and/g,"&");
alert("----Question 8-----"+"\n"+"Old Text: "+message+"\n"+"After replacement: "+b);

// Question # 9
var a = "472";
var at = typeof(a);
var c = +a;
var ct = typeof(c);
alert("----Question 9-----"+"\n"+"Value: "+a+'\n'+"Type: "+at+"\n"+"Value: "+c+'\n'+"Type: "+ct);

// Question # 10
var str = prompt("Enter string: ");
var ustr = str.toUpperCase();
alert("----Question 10-----"+"\n"+"User Input: "+str+"\n"+"Uppercase: "+ustr);

// Question # 11
var str = prompt("Enter string: ");
var ustr = str[0].toUpperCase()+str.slice(1);           
alert("----Question 10-----"+"\n"+"User Input: "+str+"\n"+"Uppercase: "+ustr);

//  Question # 12
var num = 35.36 ;
var num2 = ""+num;
var str = num2.replace(".","");
alert("----Question 12-----"+"\n"+"Number: "+num+'\n'+"Result: "+str);

// Question # 13
var str = prompt("Enter string: ");
for (let i=0; i<str.length ; i++){
    if (str[i] === "@"){
        alert("Please enter a valid user name.");
    }
    else if (str[i] === ","){
        alert("Please enter a valid user name.");
    }
    else if (str[i] === "."){
        alert("Please enter a valid user name.");
    }
    else if (str[i] === "!"){
        alert("Please enter a valid user name.");
    }
}

// Question # 14
var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var name = prompt("Enter: ");
var b;
b = name.toLowerCase();
if(b==A[0]){
    alert(name+" is available at index 0 in our bakery.");
}
else if(b==A[1]){
    alert(name+" is available at index 1 in our bakery.");
}
else if(b==A[2]){
    alert(name+" is available at index 2 in our bakery.");
}
else if(b==A[3]){
    alert(name+" is available at index 3 in our bakery.");
}
else if(b==A[4]){
    alert(name+" is available at index 4 in our bakery.");
}
else{
    alert("We are sorry "+name+" is not available in our bakery.");
}


// Question # 15
var str = prompt("Enter password: ");
if (str.length<6){
    alert("Please enter a valid answer.")
}
if (typeof(+str[0]) == "number"){
    alert("Password cannot begin with a anumber.")
}

// Question # 16
var university = 'University of Karachi';
var str = university.split(" ");
for (let i=0; i<university.length; i++){
    document.write(university[i]+"<br>");
}

// Question # 17
var str = prompt("Enter String: ");
var endStr = str[str.length-1];
alert("----Question 17-----"+"\n"+"Input: "+str+"\n"+"Last character of input : "+endStr);

// Question # 18
var tex = "The quick brown fox jumps over the lazydog";
var tex2 = tex.split(" ");
let count = 0;
for(let i=0; i<tex2.length ; i++){
    if(tex2[i].toLowerCase() == "the"){
        count = count+1;
    }
}
alert("----Question 18-----"+"\n"+"Text: "+tex+"\n"+"There are "+count+" occurance(s) of word 'the' ");



// ------------------------ Chp 26 to 30 ------------------------------------

// Question # 1
var num = prompt("Enter Postive Integer: ")
if (num<0){alert("Please Enter Positive Integer.")}
document.write("Number: "+num+"<br>");
document.write("Round Off Value: "+Math.round(num)+"<br>");
document.write("Floor Value: "+Math.floor(num)+"<br>");
document.write("Ceil Value: "+Math.ceil(num)+"<br>");

// Question # 2
var num = prompt("Enter Negative Integer: ")
if (num>0){alert("Please Negative Positive Integer.")}
document.write("Number: "+num+"<br>");
document.write("Round Off Value: "+Math.round(num)+"<br>");
document.write("Floor Value: "+Math.floor(num)+"<br>");
document.write("Ceil Value: "+Math.ceil(num)+"<br>");

// Question # 3
var num = prompt("Enter Number: ");
if (num<0){alert("Aboslute Number of "+num+" is "+num*-1)}
else if (num>=0){alert("Aboslute Number of "+num+" is "+num)}

// Question # 4
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6);
var numberOfStars = Math.ceil(improvedNum);
alert("Random dice value: "+numberOfStars)

// Question 5
var ran = Math.random();
var HorT = ran*2;
var imp = Math.ceil(HorT);
if(imp==1){alert("Random Coin Value: Tails")}
else if(imp==2){alert("Random Coin Value: Heads")}

// Question # 6
var ran = Math.random();
var num = ran*100;
var imp = Math.ceil(num);
alert("Random number between 1 & 100: "+imp);

// Question # 7
var str = prompt("Enter name in kilograms: ");
var matches = str.match(/(\d+)/);
var pounds = +matches[0]*2.205;
alert("The weight of user is "+pounds+" Pounds.")


// Question # 8
var num = Math.random();
var numm = num*10;
var ex = Math.ceil(numm);
var user = prompt("Guess a Number between 1 to 10: ");
if (user==ex){alert("Well Done")}
else{alert("Try Again")}



// ------------------------ Chp 31 to 34 ------------------------------------

// Question 1
var now = new Date; alert(now);

// Question 2
var now  = new Date;
var month = now.getMonth();
var months = ["January","Feburary","March","April","May","June",
             "July","August","September","October","November","December"]
alert("Current Month: "+months[month]);

// Questiom # 3
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date;
var day = now.getDay();
alert("Today is "+dayNames[day]);

// Question # 4'
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date;
var day = now.getDay();
if(dayNames[day]=="Sun" || dayNames[day] == "Sat"){alert("Its Fun day")}
else{alert("Its "+dayNames[day])}

// Question # 5
var now = new Date;
date = now.getDate();
if(date<=15){alert("First fifteen days of themonth")}
else{alert("Lastdays of the month")}

// Question # 6
var now = new Date;
milli = now.getTime()
minutes = milli/(1000*60);
alert("Current Date: "+now+"\n"+"Ellapsed milliseconds since January 1,1970: "+milli+'\n'+
"Ellapsed minutes since January 1,1970: "+minutes);


// Question # 7
var now = new Date;
hours = now.getHours();
if (hours<=12){alert("Its A.M.")}
else{alert("Its P.M.")}

// Question # 8
var laterDate = new Date(2020,11,31);
alert(laterDate)

// Question # 9
var ramadan = new Date(2020,3,24);
var now = new Date;
rmdays = ramadan.getTime();
today = now.getTime();
NumberOfDays = ((+today) - (+rmdays) )/ (1000*60*60*24) ;
alert(Math.ceil(NumberOfDays)+" days have passed since 1st Ramadan 2020.");


// Question # 10
var jan1 = new Date(2020,0,1);
var now = new Date;
var jan1m = jan1.getTime();
var nowm = now.getTime();
var sec = (+nowm)-(+jan1m)/1000;
alert("On reference Date: "+now+", "+sec+" seconds had passed since beginning of 2020.")

// Question # 11
var exact = new Date;
var now = new Date;
var h = now.getHours();
now.setHours(+h-1);
alert("Current Date: "+exact+"\n"+"1 hour ago it was "+now);

// Question # 12
var now = new Date;
var x = new Date;
xy = x.getFullYear();
x.setFullYear(+xy-100);
alert("Current Date: "+now+"\n"+"100 years back, it was "+x);

// Question # 13
var now = new Date;
var age = prompt("Enter your age: ");
n = now.getFullYear();
now.setFullYear(+n-age);
year = now.getFullYear();
alert("Your Birthday year is: "+year);

// Question # 14

var name = prompt("Enter Your Name: ");
var now = new Date;
month = now.getMonth();
var months = ["January","Feburary","March","April","May","June",
              "July","August","September","October","November","December"]
var units = Math.random();
units = +units*500;
document.write("<p>"+ "<br>"+"<h2><b>K-Electric Bill </h2></b>"+
               "Customer Name: "+"<b>"+name[0].toUpperCase()+name.slice(1)+"</b><br>"+
               "Month: "+"<b>"+months[month]+"</b><br>"+
               "Number of Units: "+"<b>"+Math.ceil(+units)+"</b><br>"+
                "Charges per Unit: "+"<b>16</b><br>"+
                "<br>"+
                "Net Amount Payable (Within Due Date): "+"<b>"+(+Math.ceil(+units)*16)+"</b><br>"+
                "Late payment surcharge: "+"<b>350</b><br>"+
                "Gross Amount Payable (After Due Date): "+"<b>"+((+Math.ceil(+units)*16)+350)+"</b><br>"+
                "</p>");

// ------------------------ Chp 35 to 38 ------------------------------------


// Question # 1
function CurrentDate(){
    var now = new Date;
    document.write("Current Date & Time: "+"<b>"+now+"<b>");
}
CurrentDate();

// Question # 2
function greeting(){
    var name = prompt("Enter Name: ");
    var last = prompt("Enter Last Name: ");
    alert("Hello, "+name+" "+last);
}
greeting();

// Question # 3
function AddNumber(){
    var name = prompt("Enter First Number: ");
    var last = prompt("Enter Second Number: ");
    return (+name)+(+last);
}
n = AddNumber();
alert(n);

// Question # 4
function calculator(num1,num2,opr){
    if(opr=="+"){return "Addition of 2 numbers is : "+(+num1)+(+num2)}
    else if(opr=="-"){return "Subtraction of 2 numbers is : "+(+num1)-(+num2)}
    else if(opr=="/"){return "Division of 2 numbers is : "+(+num1)/(+num2)}
    else if(opr=="*"){return "Multiplication of 2 numbers is : "+(+num1)*(+num2)}
    else if(opr=="%"){return "Remainder between 2 numbers is : "+(+num1)%(+num2)}
    else{return "Invalid Operator"}
}
var result = calculator(5,4,'/');
document.write(result);

// Question # 5
function square(x){
    return "Square of "+x+" is "+((+x)*(+x))
}
document.write(square(5))

// Question # 6
function factorial(num){
    var fact = 1;
    for(let i = 1; i<=num ; i++)
    {
        fact = fact * i;
    }
    return "Factorial of "+num+" is "+fact
}
document.write(factorial(5))

// Question # 7
function Count(){
    num1 = prompt("Enter Starting Numevr: ");
    num2 = prompt("Enter Ending Numevr: ");
    for(num1; num1<=num2;num1++){
        document.write("Counting: "+num1 +"<br>")
    }
}
Count();

// Question # 8
function hypotenuse(){
    base = prompt("Enter Base: ");
    perp =prompt("Enter Perpendicular: ");
    function square(num){return ((+num)*(+num))}
    base = square(base);
    perp = square(perp);
    return "Hypotenuse is : "+(Math.sqrt((+base)+(+perp))).toFixed(2)
}
document.write(hypotenuse())

// Question # 9
function area_as_variable(){
    h = prompt("Enter Height: ");
    w = prompt("Enter Width: ");
    return "Area of rectangle is : "+((+h)*(+w))+"<br>"
}
function area_as_value(h,w){return "Area of rectangle is : "+((+h)*(+w))+"<br>"}
document.write(area_as_value(2,2)+area_as_variable())

// Question # 10
function check_palindrome(str){
    var p="";
    for(i= ((+str.length)+1) ; i>=0; i--){
        p = p+str[i];
    }
    pe = p.replace(/undefined/g,"")

    if (pe==str){var res = str + " and " + pe +" is palindrome."}
    else{var res = str + " and " + pe +" is not palindrome."}
    return res
}
document.write(check_palindrome("madam"))

// Question # 11
function FirstUpper(str){
    var str2 = str.split(' ');
    var p = " ";
    for (let i=0; i<str2.length; i++){
        var str3 = str2[i][0].toUpperCase()+str2[i].slice(1);
        p = p+str3+" ";
    }
    return p
}
document.write(FirstUpper("my name is muzammil"));

// Question # 12
function longest(str){
    var str2 = str.split(' ');
    for (let i=0; i<(str2.length-1); i++){
        if (str2[i].length>str2[i+1].length){re = str2[i]}
        else { re = str2[i+1]}
    }
    return re
}
alert(longest("long longest longer"))

// Question # 13
function FindNumberOfLetter(str,letter){
    var str1 = str.toLowerCase();
    var str2 = str1.split('');
    var count = 0;
    for (let i = 0 ; i<=str2.length ; i++){
        if (str2[i]==letter){ count = count+1 }
    }
    return "Most repeated '"+letter+"' in '"+str+ "' are "+count
}
document.write(FindNumberOfLetter("long longest longer","l"));

// Question # 14
function calcCircumference(radius){
    return "Circumference of circle: "+ (2*(Math.PI)*(+radius)).toFixed(2)+"<br>"
}
function calcArea(radius){
    return "Area of circle: " +((Math.PI)*(+radius)*(+radius)).toFixed(2)+"<br>"
}
document.write(calcCircumference(5)+calcArea(5))

// Chapter 38-43 ----------------------------------------------

//Question # 1

function power(base, exponent) {
    var result = 1;
    if(exponent == undefined)
        exponent = 2;
    for(var i=1; i<=exponent; i++) {
        result = result * base;
    }
    return document.write(result);
}
power(3,6);

//Question # 2

function year(){
    var year = prompt("enter year")
        if (year % 4 == 0) {
            alert("it's a leap year")
        }else{
            alert("it's not a leap year")
        }
    }
    year();

//Question # 3

function ValueOfS(a,b,c)
{
	S = (a + b + c) / 2;
    return S;
}

function AreaOfTriangle(S,a,b,c)
{
	area = S * (S - a) * ( S - b ) * (S - c)
    return area;
}
a = 10, b = 15, c = 20;
document.write(AreaOfTriangle(ValueOfS(a,b,c),a,b,c).toFixed(3))

//Question # 4

function mainFunc(){
    var s1 = prompt("Enter number of 1st subject: ")
    var s2 = prompt("Enter number of 2nd subject: ")
    var s3 = prompt("Enter number of 3rd subject: ")

    total = (+s1)+(+s2)+(+s3);

    var avg = Avg(total)
    percent = Percentage(total);
    
    alert("Average: " + avg + '\n' + "Percentage: " + percent)
}
function Avg(total){
    ans = +total/3;
    return +ans.toFixed(2);
}
function Percentage(total){
    var percen = (+total/300)*100;
    return percen.toFixed(2)+"%";
}
mainFunc()

//Question # 5

function findIndex(string,target){
    for (let i = 0; i<= string.length; i++){
       if (string[i] == target){
        index = i;
        }
    }
    return "Index of "+ target +" is : " + index; 
}
document.write(findIndex("Hello Dear", "e"));

//Question # 6

function DeleteVowels(string){
    var string = prompt("Enter String to delete Vowels: ");
    string2 = string;
    for (let i = 0; i<=string.length-1; i++ ){
           if (string[i].toLowerCase() == 'a' ){ 
                var index = string.indexOf(string[i]);
                h1 = string.slice(0,index);
                h2 = string.slice(index+1,string.length);
                string = h1+h2;
            }
            if (string[i].toLowerCase() == 'e' ){ 
                var index = string.indexOf(string[i]);
                h1 = string.slice(0,index);
                h2 = string.slice(index+1,string.length);
                string = h1+h2;
            }
            if (string[i].toLowerCase() == 'i' ){ 
                var index = string.indexOf(string[i]);
                h1 = string.slice(0,index);
                h2 = string.slice(index+1,string.length);
                string = h1+h2;
            }
            if (string[i].toLowerCase() == 'o' ){ 
                var index = string.indexOf(string[i]);
                h1 = string.slice(0,index);
                h2 = string.slice(index+1,string.length);
                string = h1+h2;
            }
            if (string[i].toLowerCase() == 'u' ){ 
                var index = string.indexOf(string[i]);
                h1 = string.slice(0,index);
                h2 = string.slice(index+1,string.length);
                string = h1+h2;
            }

    }
    
    alert("String: "+ string2+ "\n" + "Vowels removed: "+ string)
}
DeleteVowels()

//Question # 7

var string = prompt("Enter string: ");

var li = [];

for ( let i = 0; i<=string.length-2; i++){
    var target = string[i].toLowerCase()+string[i+1].toLowerCase();
    switch(target){
        case "aa" :
            li.push("aa");
            break;
        case "ae" :
            li.push("ae");
            break;
        case "ai" :
            li.push("ai");
            break;
        case "ao" :
            li.push("ao");
            break;
        case "au" :
            li.push("au");
            break;

        case "ea" :
            li.push("ea");
            break;
        case "ee" :
            li.push("ee");
            break;
        case "ei" :
            li.push("ei");
            break;
        case "eo" :
            li.push("eo");
            break;
        case "eu" :
            li.push("eu");
            break;

        case "ia" :
            li.push("ia");
            break;
        case "ie" :
            li.push("ie");
            break;
        case "ii" :
            li.push("ii");
            break;
        case "io" :
            li.push("io");
            break;
        case "iu" :
            li.push("iu");
            break;

        case "oa" :
            li.push("oa");
            break;
        case "oe" :
            li.push("oe");
            break;
        case "oi" :
            li.push("oi");
            break;
        case "oo" :
            li.push("oo");
            break;
        case "ou" :
            li.push("ou");
            break;

        case "ua" :
            li.push("ua");
            break;
        case "ue" :
            li.push("ue");
            break;
        case "ui" :
            li.push("ui");
            break;
        case "uo" :
            li.push("uo");
            break;
        case "uu" :
            li.push("uu");
            break;
    }
}
document.write("There are "+ li.length+" Vowel Succession in '"+ string+ "'" + "<br> <br>");
for (let i = 0; i <= li.length-1; i++ ){
    document.write("Vowels in succession: "+ li[i] +"<br>");
}

//Question # 8

var distance_In_Km = Number(prompt("Enter distance between two cities in kilometers."));
document.write("The distance between two cities in Kilometers is " + distance_In_Km + " km<br>")
function distanceInMeters() {
    var convertedDistane = distance_In_Km * 1000;
    document.write("The distance between two cities in Meters is " + convertedDistane + " m<br>")
}
function distanceInFeet() {
    var convertedDistane = distance_In_Km * 3280.84;
    document.write("The distance between two cities in Feet is " + convertedDistane + " ft<br>")
}
function distanceInInches() {
    var convertedDistane = distance_In_Km * 39370.1;
    document.write("The distance between two cities in Inches is " + convertedDistane + " inch<br>")
}
function distanceInCentimeters() {
    var convertedDistane = distance_In_Km * 100000;
    document.write("The distance between two cities in Centimeters is " + convertedDistane + " cm<br>")
}
distanceInMeters();
distanceInFeet();
distanceInInches();
distanceInCentimeters();

//Question # 9

var workers_worked_in_Hours = prompt("Enter No. Of Hours.");
var overtime_pay_per_Hour = 12;
var total_Overtime;
var pay_of_total_Overtime;
if (workers_worked_in_Hours > 40) {
    total_Overtime = workers_worked_in_Hours - 40;
    pay_of_total_Overtime = total_Overtime * overtime_pay_per_Hour;
    document.write("You work extra " + total_Overtime + " hours of overtime so your total overtime pay is " + pay_of_total_Overtime + " rupees. ")
}
else {
    document.write("You will have not given any overtime charges because Your Work time is less than or equal to 40 Hours.")

}

//Question # 10

var cashier_Amount = Number(prompt("Enter your Amount."));
var No_of_100_Notes = 0;
var No_of_50_Notes = 0;
var No_of_10_Notes = 0;
var calculation = cashier_Amount / 100;
var No_of_100_Notes_in_Int = Math.floor(calculation);
var subtract_in_Cashier_Amount = No_of_100_Notes_in_Int * 100;
cashier_Amount -= subtract_in_Cashier_Amount
No_of_100_Notes = No_of_100_Notes_in_Int;

calculation = cashier_Amount / 50;
var No_of_50_Notes_in_Int = Math.floor(calculation);
var subtract_in_Cashier_Amount = No_of_50_Notes_in_Int * 50;
cashier_Amount -= subtract_in_Cashier_Amount
No_of_50_Notes = No_of_50_Notes_in_Int;
calculation = cashier_Amount / 10;

var No_of_10_Notes_in_Int = Math.floor(calculation);
No_of_10_Notes = No_of_10_Notes_in_Int;
document.write("You will have "+ No_of_100_Notes+ " hundred notes " + No_of_50_Notes + " fifty notes and " + No_of_10_Notes + " ten notes.");

//Chapter 43-48 --------------------------------

//Question # 1

//Question # 2

//Question # 3

//Question # 3

persons = [
	{name: "Basit", class: "10th"},
    {name: "Muzammil", class: "10th"},
    {name: "Bilal", class: "10th"},
]
var html = "<table><tr><th>Index</th><th>Name</th><th>Class</th><th></th></tr>";
for (var i = 0; i < persons.length ; i++)
{
	html += "<tr>";
    html += "<td>" + i + "</td>";
    html += "<td>" + persons[i].name + "</td>";
    html += "<td>" + persons[i].class + "</td>";
    html += "<td><button onClick='func("+i+")'>Delete</button></td>";
    html += "</tr>"
}
html += "</table>";

function func(id)
{
	persons.splice(id,1);
    var html = "<table><tr><th>Index</th><th>Name</th><th>Class</th><th></th></tr>";
    for (var i = 0; i < persons.length ; i++)
	{
	html += "<tr>";
    html += "<td>" + i + "</td>";
    html += "<td>" + persons[i].name + "</td>";
    html += "<td>" + persons[i].class + "</td>";
    html += "<td><button onclick='func("+i+")'>Delete</button></td>";
    html += "</tr>"
	}
html += "</table>";
document.write(html);
}
document.write(html);

//Question # 4

//Question # 5