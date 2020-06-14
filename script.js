//   //Assignment #1
//  // 1. Write a script to greet your website
// //     visitor using JS alert box.

//     alert("Greetings");

//  // 2. Write a script to display following message
// //     on your web page:


//     alert("Error Please enter a valid password");


//  // 3. Write a script to display following message on your web
// //     page: (Hint : Use line break)
 

//     alert("Welcome To JS Land...\nHappy Coding");

//  // 4. Write a script to display following messages
// //     in sequence:  

//     function sequence(){

//         var alerts = ["Welcome To JS Land...", "Happy Coding!"];
//         for(var i = 0; i < alerts.length; i++){
//         alert(alerts[i]);
//         };
        
//     }

//     sequence();

//  // 5. Generate the following message through browser’s
// //     developer console:


// //  6. Make use of alerts in your new/existing HTML & CSS
// //     project.


// //  7. Practice placement of <script></script> element in
// //     following sections of your project in exercise 6:





//   //Assignment #2
//  //
// //


// // 1. Declare a variable called username.
    
//     var username;

// //  2. Declare a variable called myName & assign to it a string
// //  that represents your Full Name.

//     var myName = "Akif Sohail";

// //  3. Write script to
// //      a) Declare a JS variable, titled message.
// //      b) Assign “Hello World” to variable message
// //      c) Display the message in alert box.


//     function hello(){
//         var message;
//         message = "Hello World";
//         alert(message);
//     };

//     hello()


// //  4. Write a script to save student’s bio data in JS variables and
// //     show the data in alert boxes.


//     function biodata(){
//         var usrname = prompt("Student's Full Name");
//         var usrage = prompt("Student's Age");
//         var usrcourse = prompt("Student's Course");
//         alert(`Hello ${usrname}`);
        
//         alert(`You Are ${usrage} Years Old`);
//         alert(`You Are Currently Doing The ${usrcourse} Course`);
//     };

//     biodata()
    

// //  5. Write a script to display the following alert using one JS
// //     variable:


//        function pizzatask(){

//             var pizza = "pizza";
//             var a = [];

//             for(var i = 0; i < 4; i++){
//             a.push(pizza + "\n"); 
//             pizza = pizza.slice(0, pizza.length-1);
//        }

//        alert(a);

//        }

//        pizzatask();


// //  6. Declare a variable called email and assign to it a string that
// //     represents your Email Address(e.g. example@example.com).
// //     Show the blow mentioned message in an alert box.(Hint: use
// //     string concatenation)



//         var email = "codepro365@gmail.com"
//         alert("My Email Address Is ".concat(email))




// //  7. Declare a variable called book & give it the value “A
// //     smarter way to learn JavaScript”. Display the following
// //     message in an alert box:


//         var book = "'A Smarter Way To Learn JavaScript'"
//         alert("I Am Trying To Learn From The Book " + book)



// //  8. Write a script to display this in browser through JS

//        document.write("Yah! I can write HTML content through JavaScript <br>");

// //  9. Store following string in a variable and show in alert and
// //     browser through JS

//        alert(" ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ")


//   //Assignment #3
//  //      
// //

// //  1. Declare a variable called age & assign to it your age. Show
// //     your age in an alert box.

//        var age = 11;
//        alert("I'm " + age + " Years Old");



// // 2. Declare & initialize a variable to keep track of how many
// //    times a visitor has visited a web page. Show his/her
// //    number of visits on your web page. For example: “You
// //    have visited this site N times”.
       

// // 3. Declare a variable called birthYear & assign to it your
// //    birth year. Show the following message in your browser:


//        var birthYear = "2008";
//        document.write("My Birth Year Is " + birthYear + "<br>" )


// // 4. A visitor visits an online clothing store
// //    www.xyzClothing.com . Write a script to store in variables
// //    the following information:
// //    a. Visitor’s name
// //    b. Product title
// //    c. Quantity i.e. how many products a visitor wants to
// //    order
// //    Show the following message in your browser: “John
// //    Doe ordered 5 T-shirt(s) on XYZ Clothing store”.


//       function xyzcloth() {
//         var visitorname = prompt("Visitor Name");
//         var producttitle = prompt("Product Name");
//         var quantity = prompt("Quantity");
//         document.write("\n" + visitorname + " Ordered " + quantity + " " + producttitle + "(s) On XYZ Cloting Store");
        
//       }
      
//       xyzcloth();



//   //Assignment #4
//  //
// //


// // 1. Declare 3 variables in one statement.
// // 2. Declare 5 legal & 5 illegal variable names.
// // 3. Display this in your browser
// //    a) A heading stating “Rules for naming JS variables”
// //    b) Variable names can only contain ______, ______, ______ and ______.
// //       For example $my_1stVariable
// //    c) Variables must begin with a ______, ______ or
// //       _____. For example $name, _name or name
// //    d) Variable names are case _________
// //    e) Variable names should not be JS _________

//       var a, b ,c ;

//     //   var name;
//     //   var name1;
//     //   var name_my;
//     //   var $name;
//     //   var _name;

//     //   var 1name;
//     //   var #name;
//     //   var alert;
//     //   var my code;
//     //   var 123;

//       document.write("<h1>Rules for naming JS variables</h1>");
//       document.write("<p>Variable names can only contain $, _, letters and _____</p>");
//       document.write("<p>Variables must begin with a _, $ or letters.</p>");
//       document.write("<p>Variable names are case sensitive</p>");
//       document.write("<p>Variable names should not be JS reserved keyword</p>");
    

//   //Assignment #5
//  //
// // 



// // 1. Write a program that take two numbers & add them in a
// //    new variable. Show the result in your browser.


//       var numberone = prompt("Enter Your First Number :");
//       var numbertwo = prompt("Enter Your Second Number :");
//       var ans = parseInt(numberone) + parseInt(numbertwo);
      
//       document.write("Sum Of " + numberone + " & " + numbertwo + " is " + ans + "<br>");


// // 2. Repeat task1 for subtraction, multiplication, division &
// //    modulus.


// //  Subtraction:


//       var numberone = prompt("Enter Your First number :");
//       var numbertwo = prompt("Enter Your Second number :");
//       var ans = parseInt(numberone) - parseInt(numbertwo);

//       document.write("Diffrerence Of " + numberone + " & " + numbertwo + " is " + ans + "<br>");


// //  Multiplication:


//       var numberone = prompt("Enter your first number :");
//       var numbertwo = prompt("Enter your second number :");
//       var ans = parseInt(numberone) * parseInt(numbertwo);
      
//       document.write(numberone + " Times " + numbertwo + " is " + ans + "<br>");


// //  Division:


//       var numberone = prompt("Enter your first number :");
//       var numbertwo = prompt("Enter your second number :");
//       var ans = parseInt(numberone) * parseInt(numbertwo);

//       document.write("The Quotient Of " + numberone + " & " + numbertwo + " is " + ans + "<br>");


// //  Modulus:


//    var numberone = prompt("Enter your first number :");
//    var numbertwo = prompt("Enter your second number :");
//    var ans = parseInt(numberone) + parseInt(numbertwo);

//    document.write("Sum of " + numberone + " & " + numbertwo + " is " + ans + "<br>");


// //  3. Do the following using JS Mathematic Expressions
// //        a. Declare a variable.
// //        b. Show the value of variable in your browser like “Value
// //           after variable declaration is: ??”.
// //        c. Initialize the variable with some number.
// //        d. Show the value of variable in your browser like “Initial
// //            value: 5”.
// //        e. Increment the variable.
// //        f. Show the value of variable in your browser like “Value
// //           after increment is: 6”.
// //        g. Add 7 to the variable.
// //        h. Show the value of variable in your browser like “Value
// //           Page 1 of 9MATH EXPRESSIONS | JAVASCRIPT
// //           after addition is: 13”.
// //        i. Decrement the variable.
// //        j. Show the value of variable in your browser like “Value
// //           after decrement is: 12”.
// //        k. Show the remainder after dividing the variable’s value
// //           by 3.
// //        l. Output : “The remainder is : 0”.


//         var mathoperator;
//         document.write("Value After Variable Declaration Is: " + mathoperator + "<br>");
//         var mathoperator = 15;
//         document.write("Initial Value: " + mathoperator + "<br>");
//         var increased = mathoperator++;
//         document.write("Value After Increment Is: : " + increased + "<br>");
//         var plusnum = mathoperator + 7;
//         document.write("Value after adding 7 to variable is: " + plusnum + "</br>");
//         var decreased = mathoperator--;
//         document.write("Value after decremented is: " + decreased + "</br>");
//         var dividenum = mathoperator % 3;
//         document.write("Remainder after dividing by 3 is: " + dividenum + " </br>");


// // 4. Cost of one movie ticket is 600 PKR. Write a script to
// //    store
// //    ticket price in a variable & calculate the cost of buying 5
// //    tickets
// //    to a movie.

//         var priceone = 600;
//         var totalprice = priceone * 5
//         document.write("Total Cost To Buy 5 tickets to a movie is : " + totalprice +" PKR.");

// // 5. Write a script to display multiplication table of any
// //    number in your browser.

//         function random(min, max) {
//             min = Math.ceil(min);
//             max = Math.floor(max);
//             return Math.floor(Math.random() * (max - min)) + min;
//         }

//         var inputnum = random(1, 11);
//         inputnum = parseInt(inputnum)

//         function multiplyinput(desirednum ){
//             for(var i = 1; i <= 10; i++){
//                 var result = desirednum + " * " + i + " = " + i*desirednum + "<br>";
//                 document.write(result);
//             }
//         }
//         multiplyinput(inputnum)

// // 6. The Temperature Converter: 
// //      a. Store a Celsius temperature into a variable.
// //      b. Convert it to Fahrenheit & output “NN o C is NN o F”.
// //      c. Now store a Fahrenheit temperature into a variable.
// //      d. Convert it to Celsius & output “NN o F is NN o C”.
//         document.write("<br>");
//         var cdegree = prompt("Enter Celcius");
//         function infdegree(a){
//             var answerthis = (a * 9/5) + 32;
//             document.write(a + "&degC is " + answerthis + "&degF");
//         }
//         infdegree(cdegree)
//         document.write("<br>");

//         var fnum = prompt("Enter Farhenite");
//         function incdegree(a){
//             var answerthis = (a - 32) * 5/9;
//             document.write(a + "&degF is " + answerthis + "&degC");
//         }
//         incdegree(fnum)


// // 7. Write a program to implement checkout process of a
// //    shopping cart system for an e-commerce website. Store
// //    the following in variables
// //      a. Price of item 1
// //      b. Price of item 2
// //      c. Ordered quantity of item 1
// //      d. Ordered Quantity of item 2
// //      e. Shipping charges
// //    Compute the total cost & show the receipt in your browser.


// var firstitem = 200;
// var seconditem = 1500;
// var qtyone = 5;
// var qtytwo = 2;
// var deliverycost = 300;
// var totalprice = (firstitem*qtyone) + (seconditem*qtytwo) + deliverycost;
// document.write("Price of item 1 is : " + firstitem + " Rs <br>");
// document.write("Price of item 2 is : " + seconditem + " Rs <br>");
// document.write(" Ordered quantity of item 1 is : " + qtyone + " <br>");
// document.write(" Ordered quantity of item 2 is : " + qtytwo + " <br>");
// document.write(" hipping charges :" + deliverycost + " Rs <br>");
// document.write(" <br> <br>");
// document.write(" Total cost of your order is :" + totalprice + " <br>");


// // 8. Store total marks & marks obtained by a student in 2
// //    variables. Compute the percentage & show the result in
// //    your browser


// var totalscore = 100;
// var obtainedscore = 80;
// var calculatedpercentage = totalscore/obtainedscore *100;
// document.write("<h1>MARKS SHEET<h1>");
// document.write(" <br> <br>");
// document.write(" <br> <br>");
// document.write(" Total Marks :" + totalscore + "<br>");
// document.write(" Marks Obtained :" + obtainedscore + "<br>");
// document.write(" Percentage :" + percentagescore);


// // 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// //    script to convert the total currency to Pakistani Rupees.
// //    Perform all calculations in a single expression.


//         var usdollars = 10;
//         var saudiamount = 25;
//         var tradeval = usdollars * 163.48 + saudiamount * 43.54;

//         document.write(" <h1> Currency in PKR ");
//         document.write(" <br> <br>");
//         document.write(" <br> <br>");
//         document.write(" Total currency in PKR :" + exchangevalue);


// // 10. Write a program to initialize a variable with some
// //     number and do arithmetic in following sequence:
// //      a. Add 5
// //      b. Multiply by 10
// //      c. Divide the result by 2
// //     Perform all calculations in a single expression


//     var calc = 49;

//     calc = parseInt(calc);

//     function docalculation (z){
//         var answer = ((z + 5 ) * 10 ) / 2 ;
//         document.write(answer);
//     }

//     docalculation(calc)


// // // 11. The Age Calculator: Forgot how old someone is?
// // //     Calculate it!
// // //      a. Store the current year in a variable.
// // //      b. Store their birth year in a variable.
// // //      c. Calculate their 2 possible ages based on the stored
// // //         values.


//     var a = new Date();
//     var currentyear = a.getFullYear();
//     var birthdate = prompt("Enter You Birth Year");
//     var age = parseInt(a.getFullYear()) - parseInt(birthdate);

//     document.write("<br><br>");
//     document.write("<h1>Age Calculator</h1>");
//     document.write("<br>");
//     document.write("Current year : " + a.getFullYear()  + "<br>");
//     document.write("Birth year : "+ birthdate  + "<br>");
//     document.write("Your age : "+ age);


// // 12. The Geometrizer: Calculate properties of a circle.
// //      a. Store a radius into a variable.
// //      b. Calculate the circumference based on the radius, and
// //         output “The circumference is NN”.
// // (Hint : Circumference of a circle = 2 π r , π = 3.142)
// // Calculate the area based on the radius, and output “The
// // area is NN”. (Hint : Area of a circle = π r 2 , π = 3.142)

//     var radius = 20;
//     var circum = 2 * 3.142 * radius;
//     var area = 3.142 * radius * radius ;

//     document.write(" <h1>The Geometrizer</h1><br>");
//     document.write(" Radius of the circle :" + radius + " <br>");
//     document.write(" Circumference of the circle :" + circum + " <br>");
//     document.write(" Area of the circle :" + area + " <br>");


// // 13. The Lifetime Supply Calculator: Ever wonder how
// //     much a “lifetime supply” of your favorite snack is?
// //     Wonder no more.
// //      a. Store your favorite snack into a variable
// //      b. Store your current age into a variable.
// //      c. Store a maximum age into a variable.
// //      d. Store an estimated amount per day (as a number).
// //      e. Calculate how many would you eat total for the rest of
// //         your life.
// // Output the result to the screen like so: “You will need
// // NNNN to last you until the ripe old age of NN”.

//     var favoritesnack = prompt("Your Favorite Snack");
//     var agenow = age;
//     alert("Your Age Now Is " + age)
//     var ageExpectancy = prompt("How Much Will You Live");
//     var everyday = prompt("How Much Will You Probably Eat Everyday");
//     var wholelife = (ageExpectancy - agenow) * everyday * 365;
//     document.write(" <h1>Life Time Supply Calculator</h1><br>");
//     document.write( "Favourite snack : " + favoritesnack + "<br>");
//     document.write( "Current age : " + agenow + "<br>");
//     document.write( "Estimates max age : " + ageExpectancy + "<br>");
//     document.write( "Amount of snacks per day : " + everyday + "<br>");
//     document.write( "You'll need : " + wholelife + " " + favoritesnack + " to last you till your max age of " + ageExpectancy);


    
//   // assignment: #6-9
//  //
// //


// // 1. Write a program to take a number in a variable, do the
// //    required arithmetic to display the following result in your
// //    browser:

//     var inpFrmUsr = prompt("Enter Number To Do The 1. Task In This Assignment : ");
//     document.write(" <h1>Result</h1><br>");
//     document.write(" The Value Of a Is :  "+ inpFrmUsr + "<br>");
//     document.write(" ______________________________________________________________<br>");

//     document.write("<br>");
//     document.write(" The Value Of ++a Is:  "+ ++inpFrmUsr + "<br>");
//     document.write(" Now The Value Of a Is:  "+  inpFrmUsr + "<br>");
//     document.write("<br>");

//     document.write(" The Value Of a++ Is:  "+ inpFrmUsr++ + "<br>");
//     document.write(" Now The Value Of a Is:  "+  inpFrmUsr + "<br>");
//     document.write("<br>");


//     document.write(" The Value Of --a Is:  "+ --inpFrmUsr + "<br>");
//     document.write(" Now The Value Of a Is:  "+  inpFrmUsr + "<br>");
//     document.write("<br>");


//     document.write(" The Value Of a-- Is:  "+ inpFrmUsr-- + "<br>");
//     document.write(" Now The Value Of a Is :  "+  inpFrmUsr + "<br>");
//     document.write(4, "<br>");

// // 2. What will be the output in variables a, b & result after
// //    execution of the following script:
// //    var a = 2, b = 1;
// //    var result = --a - --b + ++b + b--;
// //    Explain the output at each stage:
// //    --a;                             output => 1,
// //    --a - --b;                       output =>  1 - 0  = 1,
// //    --a - --b + ++b;                 output =>  1 - 0 => 1 + 2 => 3, 
// //    --a - --b + ++b + b--;           output =>  1 - 0 => 1 + 2 => 3 + 0 => 3

//     var a = 2, b = 1;

//     document.write("a is :" + --a +"<br>");

//     a = 2, b = 1;

//     document.write("b is :" + --b + "<br>");

//     a = 2, b = 1;

//     var result = --a - --b + ++b + b--;

//     document.write("result is :" + result);

//     document.write("<br><br>");

// // 3. Write a program that takes input a name from user &
// //    greet the user.

//     var usrname = prompt("Your Name: ");
//     alert("Hello " + usrname + ".")

 
// // 4 Number Four Isn't In The Assignment Sheet

// // 5. Write a program to take input a number from user &
// //    display it’s multiplication table on your browser. If user
// //    does not enter a new number, multiplication table of 5
// //    should be displayed by default.


//     function multiplyinput(){
        
//         multi = prompt("Enter Number You Wish To See The Multiplication Table Of:");
//         multi = parseInt(multi);
//         if (multi == NaN) {
//             var multi = 5;
//         }
//         for(var i = 1; i <= 10; i++){
//             if (multi == NaN) {
//                 var multi = 5;
//             }
//             var result = multi + " * " + i + " = " + i*multi + "<br>";
//             document.write(result);
//         }
//     }
//     multiplyinput() // provided default parameter, still not working...


// // 6.
// //      a) Take three subjects name from user and store them in 3
// //         different variables.
// //      b) Total marks for each subject is 100, store it in another
// //         variable.
// //      c) Take obtained marks for first subject from user and
// //         stored it in different variable.
// //      d) Take obtained marks for remaining 2 subjects from user
// //         and store them in variables.
// //      e) Now calculate total marks and percentage and show the
// //         result in browser like this.(Hint: user table)

// var sub1 = prompt("First Subject Name :");
// var sub2 = prompt("Second Subject Name :");
// var sub3 = prompt("Third Subject Name :");

// var obtainsubone = prompt("Marks obtained In First Subject :");
// var obtainsubtwo = prompt("Marks obtained In Second Subject :");
// var obtainsubthree = prompt("Marks obtained In Shird Subject :");

// var total = 100;
// var allcombinedtotal = 300;
// var resulsub1 = obtainsubone / total * 100;
// var resulsub2 = obtainsubtwo / total * 100;
// var resulsub3 = obtainsubthree / total * 100;
// var allcombinedtotalabtain = parseInt(obtainsubone) + parseInt(obtainsubtwo) + parseInt(obtainsubthree);
// var allcombinedtotalpercen= (resulsub1 + resulsub2 + resulsub3 )/3;
// document.write("<table><tr><td> <h1>Subject</h1></td><td><h1>Total Marks</h1></td><td><h1>Obtained Marks</h1></td><td><h1>Percentage</h1></td></tr><tr><td> " + sub1 + "</td><td> " + total + "</td><td> " + obtainsubone + "</td> <td> " + resulsub1 + "</td></tr><tr><td> " + sub2 + "</td><td> " + total + "</td><td> " + obtainsubtwo + "</td><td> " + resulsub2 + "</td></tr><tr><td> " + sub3 + "</td><td> " + total + "</td><td> " + obtainsubthree + "</td><td> " + resulsub3 + "</td></tr><tr><td><h3>TOTAL</h3></td><td> " + allcombinedtotal + "</td><td> " + allcombinedtotalabtain + "</td><td> " + allcombinedtotalpercen + "</td></tr></table>");


//   //  Assignment: #9-10
//  //
// //

// // 1. Write a program to take “city” name as input from user. If
// //    user enters “Karachi”, welcome the user like this:
// //      “Welcome to city of lights”


// var city_input = prompt("City: ").toLowerCase();
// function citychecker(i) {
//     if (i === "karachi"){
//         alert("Welcome To the City Of Lights.")
//     }else{
//         alert("Welcome")
//     }
// }
// check_city(city_input)



// // 2. Write a program to take “gender” as input from user. If the
// //    user is male, give the message: Good Morning Sir. If the
// //    user is female, give the message: Good Morning Ma’am.

//     var gender = prompt("Your Gender : ").toLowerCase();

//     function genderChecker(i){

//         if (i === "male"){
//             alert("Good Morning Sir.")
//         }else{
//             alert("Good Morning Ma'am.")
//         }

//     }

//     check_gender(gender)


// // 3. Write a program to take input color of road traffic signal
// //    from the user & show the message according to this table:


//         var traffic = prompt("Enter Signal Color  : ").toLowerCase();

//         function signalchecker(i) {

//             if (i === "red"){
//             alert("Stop Now.");
//             }

//             else if(i === "yellow"){
//                 alert("Get Ready To Move.");
//             }

//             else{
//                 alert("Move now");
//             }

//         }
// signalchecker(traffic)


// // 4. Write a program to take input remaining fuel in car (in
// //     litres) from user. If the current fuel is less than 0.25litres,
// //     show the message “Please refill the fuel in your car”


//         var fuelremains = parseFloat(prompt("Please Enter The Amount Of Feul In Your Car (In Litres) : "));

//         function fuelchecker(i){

//             if (i < 0.25){
//                 alert("Please Refill The Fuel In Your Car.");
//             }
            
//             else{
//                 alert("You Are Feuled Up");
//             }

//         }

//         fuelchecker(fuelremains)


// // 5. Run this script, & check whether alert message would be
// //    displayed or not. Record the outputs.
// //      a. var a = 4;
// //      if (++a === 5){
// //      alert("given condition for variable a is true");
// //          output => alert will display.

// //          b. var b = 82;
// //          if (b++ === 83){
// //          alert("given condition for variable b is true");
// //          }
// //          output => alert will not display.

// //       c. var c = 12;
// //      if (c++ === 13){
//         // alert("condition 1 is true");
//         // }
//         // if (c === 13){
//         // alert("condition 2 is true");
//         // }
//         // if (++c < 14){
//         // alert("condition 3 is true");
//         // }
//         // if(c === 14){
//         // alert("condition 4 is true");
//         // }
//         //  output => condition 3 is true.

// //  d. var materialCost = 20000;
// // var laborCost = 2000;
// // var totalCost = materialCost + laborCost;
// //if (totalCost === laborCost + materialCost){
// //     alert("The cost equals");
// //     }
// //   output => alert will display.

// //  e. if (true){
// //         alert("True");
//  // }
//   // if (false){
//  // alert("False");
//  // }
//  // } output => alert will display "True".

// // f. if("car" < "cat"){
//  //     alert("car is smaller than cat");
//  //     }
//  // }
// //   output => alert will not display, there is an error.
 
// // 6. Write a program to take input the marks obtained in three
// //    subjects & total marks. Compute & show the resulting
// //    percentage on your page. Take percentage & compute
// //    grade as per following table:

//     var obtained_sub1 = prompt("Enter marks obtained in first subject : ");
//     var obtained_sub2 = prompt("Enter marks obtained in second subject : ");
//     var obtained_sub3 = prompt("Enter marks obtained in third subject : ");
//     var sub_total = prompt("Enter total marks of subjects : ");

//     var accumulate_obtained = parseInt(obtained_sub1) + parseInt(obtained_sub2) + parseInt(obtained_sub3);
//     var accumulate_percentage = (accumulate_obtained/sub_total )* 100;
//     var grade;
//     var remarks;
//     if(accumulate_percentage < 60){
//         grade = "fail";
//         remarks = "Sorry"
//     }else if(accumulate_percentage >= 60){
//         grade ="B";
//         remarks = "You need to improve";
//     }else if(accumulate_percentage >= 70){
//         grade = "A";
//         remarks = "Good";

//     }else{
//         grade = "A-one";
//         remarks = "Excellent"
//     }
//     document.write("<h1>MARKS SHEET</h1>");
//     document.write("<br>");
//     document.write("Total Marks : " + sub_total + "<br>");
//     document.write("Marks obtained : " + accumulate_obtained + "<br>");
//     document.write("Percentage : " + accumulate_percentage + "%" + "<br>");
//     document.write("Grade : " + grade + "<br>" );
//     document.write("Remarks : " + remarks + "<br>");


// // 7. Guess game:
// //    Store a secret number (ranging from 1 to 10) in a variable.
// //    Prompt user to guess the secret number.
// //      a. If user guesses the same number, show “Bingo! Correct
// //         answer”.
// //      b. If the guessed number +1 is the secret number, show
// //         “Close enough to the correct answer”.

//     var usrgeuss = prompt("Enter a number (between 1 - 10) : ");
//     usrgeuss = parseInt(usrgeuss);
//     var rannum = Math.floor((Math.random() * 10) + 1);
//     if( usrgeuss === rannum){
//         alert("You Win.");
//     }else{
//         alert("Close To Number");
//     }
//     alert("The Number Was : " + rannum);

// // 8. Write a program to check whether the given number is
// //    divisible by 3. Show the message to the user if the number
// //    is divisible by 3.

//     var userinput = prompt("Enter a number to check divisibility by 3 : ");
//     userinput = parseInt(userinput);
//     if(userinput % 3 === 1){
//         alert("The Given Number Is Divisible By 3.");
//     }else{
//         alert("The Given Number Is Not Divisible By 3.");
//     }
    

// // 9. Write a program that checks whether the given input is an
// //    even number or an odd number.

//     var use = prompt("Enter a number to check Divisibility by 3 : ");
//     use = parseInt(use);
//     if(user_eoro % 3 === 1){
//         alert("The Given Number Is An Even Number.");
//     }else{
//         alert("The Given Number Is An Odd Number.");
//     }

// // 10. Write a program that takes temperature as input and
// //     shows a message based on following criteria
// //      a. T > 40 then “It is too hot outside.”
// //      b. T > 30 then “The Weather today is Normal.”
// //      c. T > 20 then “Today’s Weather is cool.”
// //      d. T > 10 then “OMG! Today’s weather is so Cool.”

//     var temn = prompt("Enter The Current Temperature : ");
//     temn = parseInt(temn);
//     if( temn > 40){
//         alert("It Is Too Hot Outside.");
//     }else if( temn > 30){
//         alert("It Weather Today Is Normal Outside.");
//     }else if( temn > 20){
//         alert("Today's Wweather Is Cool.");
//     }else if( temn > 10){
//         alert("OMG! Todays chilly.");
//     }

// // 11. Write a program to create a calculator for +,-,*, / & %
// //     using if statements. Take the following input:
// //      a. First number
// //      b. Second number
// //      c. Operation (+, -, *, /, %)
// //         Compute & show the calculated result to user.

//     var oneint = prompt("Enter your first number : ");
//     var twoint = prompt("Enter your second number : ");
//     var umath = prompt("Enter the arithematic operation to perform: ");
//     oneint = parseInt(oneint);
//     twoint = parseInt(twoint);
//     if (umath == "+"){
//         var resu = oneint + twoint;
//         alert("the result is : " + resu);
//     }else if(umath == "-"){
//         var resu = oneint - twoint;
//         alert("the result is : " + resu);
//     }else if(user_arithematic == "*"){
//         var resu = oneint * twoint;
//         alert("the resulted is : " + resu);
//     }else if(umath == "/"){
//         var resu = oneint / twoint;
//         alert("the resulted is : " + resu);
//     }else if(umath == "%"){
//         var resu = oneint % twoint;
//         alert("the resulted is : " + resu);
//     }

//   //  assignment 12- 13  if..else, else if, testing conditions
//  //
// //


// // 1. Write a program that takes a character (number or string)
// //    in a variable & checks whether the given input is a
// //    number, uppercase letter or lower case letter. (Hint: ASCII
// //    codes:- A=65, Z=90, a=97, z=122).


//     var checktint = prompt("Enter A Character (number or alphabet): ");
//     var characascii = checktint.charCodeAt(0);

//     if( characascii >= 65 &&  characascii <= 90){
//         alert("You entered uppercase letter");
//     }else if( characascii >= 97 &&  characascii <= 122){
//         alert("You entered lowerercase letter");
//     } else if( characascii >= 48 &&  characascii <= 57){
//         alert("You entered a number");
//     }


// // 2. Write a JavaScript program that accept two integers and
// //    display the larger. Also show if the two integers are equal.


//     var inpuint = prompt("Integer:");
//     var inputwoint = prompt("Another Integer:");
//     if(inpuint > inputwoint){
//         alert("The Bigger Number Is  " + inpuint);
//     }else if(inpuint == inputwoint){
//         alert( inpuint + " Is Equal To " + inputwoint);
//     }else{
//         alert("The Bigger Number Is " + inputwoint);
//     }


// // 3. Write a program that takes input a number from user &
// //    state whether the number is positive, negative or zero.


//     var iint = prompt("Enter An Integer:");
//     iint = parseInt(iint);
//     if(int > 1){
//         alert("Number Entered Is A Positive Integer");
//     }else if(iint < 1){
//         alert("Number Entered Is A Negative Integer");
//     }else if(iint == 0){
//         alert("Number entered is zero");
//     }

  
    
// // 4. Write a program that takes a character (i.e. string of
// //    length 1) and returns true if it is a vowel, false otherwise

//     var inputing = prompt("Enter one to check for vowel character : ");
//     inputing = inputing.toLowerCase();
//     if( inputing.length > 1){
//         alert("Kindly enter only one character");
//     }else if(inputing == "a" || inputing == "e" || inputing == "i" || inputing == "o" || inputing == "u"){
//         alert("Character entered is a vowel");
//     }else{
//         alert("Character entered is not a vowel");
//     }


// 5. Write a program that
//      a. Store correct password in a JS variable.
//      b. Asks user to enter his/her password
//      c. Validate the two passwords:
//          i. Check if user has entered password. If not, then
//             give message “ Please enter your password”
//          ii. Check if both passwords are same. If they are
//              same, show message “Correct! The password you
//              entered matches the original password”. Show
//              “Incorrect password” otherwise.
 

    var inword = prompt("Enter your new password : ");
    var wordlen = inword.length() * "*"
    alert("Your password is saved : " + wordlen);
    var input_userpw = prompt("Enter your password to login : ");
    if(inword == input_userpw){
        alert("Correct!! password entered matches the original password.");
    }else{
        alert("wrong password entered.");
    }
    alert(inword.length);


// // 6. This if/else statement does not work. Try to fix it:
// // var greeting;
// // var hour = 13;
// // if (hour < 18) {
// // greeting = "Good day";
// // else
// // greeting = "Good evening";
// // }


// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else{
// greeting = "Good evening";
// }

// // 7. Write a program that takes time as input from user in 24
// // hours clock format like: 1900 = 7pm. Implement the
// // following case using if, else & else if statements

// var input_time = prompt("Enter time (in 24 hour format .i.e, 1700 for 5 o'clock) : ");
// input_time = parseInt(input_time);
// if(input_time >= 0000 && input_time < 1200 ){
//     alert("Good Morning.");
// }else if(input_time >= 1200 && input_time < 1700 ){
//     alert("Good Afternoon.");
// }else if(input_time >= 1700 && input_time < 2100 ){
//     alert("Good Evening.");
// }else if( input_time >= 2100 && input_time <= 2359){
//     alert("Good Night.");
// }

// -------------------------------------------------------------------------------------------------------------------------------
// assignment 13-15 arrays

// // 1. Declare an empty array using JS literal notation to store
// // student names in future.

// var name_array = [];

// // 2. Declare an empty array using JS object notation to store
// // student names in future.

// var name_obj = new Array();

// // 3. Declare and initialize a strings array.

// var str_arr = ["abc", "def", "ghi"];

// // 4. Declare and initialize a numbers array.

// var num_arr = [ 2, 4, 6];

// // 5. Declare and initialize a boolean array.

// var bool_arr = [true, false];

// // 6. Declare and initialize a mixed array.

// var mix_arr = ["acb", 1, true, "a", "ali"];

// // 7. Declare and Initialize an array and store available
// // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// // BS, BCOM, MS, M. Phil., PhD). Show the listed
// // qualifications in your browser like:

// var qual_pak = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write("<h1>Qualifications: </h1>");
// document.write("1) " + qual_pak[0] + "<br>" + "2) " + qual_pak[1] + "3) " + qual_pak[2] + "<br>" + "4) " + qual_pak[3] + "5) " + qual_pak[4] + "<br>" + "6) " + qual_pak[5] + "7) " + qual_pak[6] + "<br>" + "8) " + qual_pak[7]);

// // 8.Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:

// var stu_name = ["Akif", "Aliyan", "Huma"];
// var  stu_score = [490, 490, 450];
// var stu_total = 500;
// document.write("Score of " + stu_name[0] + "is :" + stu_score[0] + " . Percentage is : " + stu_score[0]/stu_total * 100 + "% <br>" );
// document.write("Score of " + stu_name[1] + "is :" + stu_score[1] + " . Percentage is : " + stu_score[1]/stu_total * 100 + "% <br>" );
// document.write("Score of " + stu_name[2] + "is :" + stu_score[2] + " . Percentage is : " + stu_score[2]/stu_total * 100 + "% <br>" );


// // 9. Initialize an array with color names. Display the array
// // elements in your browser.
// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.
// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.
// // d. Delete the first color in the array. Display the updated
// // array in your browser.
// // e. Delete the last color in the array. Display the updated
// // array in your browser.
// // f. Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// // position/index. . Display the updated array in your
// // browser.
// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then
// // remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your
// // browser.

// var col_arr = ["Magenta ", "amber ", "Amethyst ","Aquamarine ","Ashy "];
// document.write("Available colours are : " + col_arr);
// var choosen_col = prompt("Kindly enter the colour you want to display at the start." );
// function  choosen(a) {
//     col_arr = col_arr.push(a);
//   }
//  choosen(choosen_col) 
// document.write(col_arr);

// // not done!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // 10. Write a program to store student scores in an array &
// // sort the array in ascending order using Array’s sort
// // method.
// var score_array = [32, 230, 480, 120];
// document.write("Score of Students : ");
//  for(var i = 0 ;i < score_array.length; i++){
//   document.write(score_array[i]+", ");
// }
// document.write("<br>")
// var sorted_arr = score_array.sort();
// document.write("Ordered Score of Students : ");
// for(var i = 0 ;i < sorted_arr.length; i++){
//     document.write(sorted_arr[i]+", ");
//   }

// // 11.
// // Write a program to initialize an array with city names.
// // Copy 3 array elements from cities array to selectedCities
// // array.
// var city_name = ["Karachi", "Islamabad","Lahore", "Qutta", "Peshawar"];
// var selected_city = [city_name[1], city_name[3], city_name[4]];
// document.write("Cities list: ");
// document.write("<br>" + city_name);
// document.write("<br>Selected Cities list: ");
// document.write("<br>" + selected_city);

// // 12. Write a program to create a single string from the
// // below mentioned array:
// // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// // (Use array’s join method)

// var arr = ["This ", "is ", "my ", "cat. "];
// var new_arr = arr.join("");
// document.write("Array : <br>" + arr + "<br>");
// document.write("String : <br>" + new_arr);

// // 13.
// // Create a new array. Store values one by one in such a way
// // that you can access the values in the order in which they
// // were stored. (FIFO-First In First Out)

// var fifo_arr = new Array();
// fifo_arr.push("a");
// fifo_arr.push("b");
// fifo_arr.push("c");
// fifo_arr.push("d");
// fifo_arr.push("e");
// document.write("array : <br>" + fifo_arr + "<br>");


// document.write("Out : <br>" + fifo_arr.shift()+ "<br>");
// document.write("Out : <br>" + fifo_arr.shift()+ "<br>");
// document.write("Out : <br>" + fifo_arr.shift()+ "<br>");
// document.write("Out : <br>" + fifo_arr.shift()+ "<br>");
// document.write("Out : <br>" + fifo_arr.shift()+ "<br>");


// 14.
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// 15.
// Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select men